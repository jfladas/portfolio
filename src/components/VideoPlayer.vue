<template>
    <teleport to="#video-teleport" :disabled="!isOverlayVisible">
        <div ref="videoPlayerRef" class="video-player hoverable"
            :class="{ notplaying: !isPlaying, 'loading-placeholder': !isVideoLoaded, expanded: isOverlayVisible, 'has-sound': sound }"
            @mousemove="showControlsTemporarily" @touchstart="showControlsTemporarily">
            <video ref="video" :src="video" :muted="muted" @ended="handleVideoEnded" @loadeddata="handleVideoLoaded"
                @loadedmetadata="handleMetadataLoaded" @timeupdate="handleTimeUpdate" @click="handleVideoClick"
                @play="startProgressLoop" @pause="stopProgressLoop"
                :class="{ small: !isOverlayVisible }"></video>
            <button class="play-pause-button" :aria-label="isPlaying ? 'Pause' : 'Play'" @click="togglePlayPause" @mouseenter="handleControlMouseEnter"
                @mouseleave="handleControlMouseLeave" :style="{ opacity: showControls ? 1 : 0 }">
                <AppIcon
                    :icon="isVideoLoaded ? (isEnded ? 'rotate-left' : (isPlaying ? 'pause' : 'play')) : 'spinner'" />
            </button>
            <div class="progress" @mouseenter="handleControlMouseEnter"
                @mouseleave="handleControlMouseLeave" :style="{ opacity: showControls ? 1 : 0 }">
                <div class="progress-fill" :style="{ width: `${progressPercent}%` }"></div>
                <div class="progress-rest" :style="{ left: `${progressPercent}%` }"></div>
                <input class="progress-bar" aria-label="Seek" type="range" min="0" max="100" step="0.1" :value="progressPercent"
                    :disabled="!isVideoLoaded || !duration" @input="handleSeek" />
            </div>
            <!-- only on videos with real sound (sound: true in src/data/projects.js); they start with sound on -->
            <button v-if="sound" class="sound-button" aria-label="Mute" :aria-pressed="muted" @click="toggleMute"
                @mouseenter="handleControlMouseEnter" @mouseleave="handleControlMouseLeave"
                :style="{ opacity: showControls ? 1 : 0 }">
                <AppIcon :icon="muted ? 'volume-mute' : 'volume-up'" />
            </button>
            <button v-if="!isOverlayVisible" class="expand-button" aria-label="Expand" @click="handleExpand"
                @mouseenter="handleControlMouseEnter" @mouseleave="handleControlMouseLeave"
                :style="{ opacity: showControls ? 1 : 0 }">
                <AppIcon icon="up-right-and-down-left-from-center" />
            </button>
            <button v-if="isOverlayVisible" class="unexpand-button" aria-label="Collapse" @click="$emit('toggle-overlay')"
                @mouseenter="handleControlMouseEnter" @mouseleave="handleControlMouseLeave"
                :style="{ opacity: showControls ? 1 : 0 }">
                <AppIcon icon="down-left-and-up-right-to-center" />
            </button>
        </div>
    </teleport>
</template>

<script>
import { isOnMedia } from '@/composables/fullscreenMedia.js';

export default {
    props: {
        video: {
            type: String,
            required: true
        },
        isOverlayVisible: {
            type: Boolean,
            default: false
        },
        // shows the mute button
        sound: {
            type: Boolean,
            default: false
        },
        overlayContent: {
            type: String,
            default: 'body'
        }
    },
    data() {
        return {
            isPlaying: false,
            isEnded: false,
            isVideoLoaded: false,
            currentTime: 0,
            duration: 0,
            hideControlsTimer: null,
            isHoveringControls: false,
            isMobileInteractionMode: false,
            hoverMediaQuery: null,
            showControls: true,
            boundClickOutside: null,
            progressFrame: null,
            muted: false
        };
    },
    emits: ['toggle-overlay'],
    computed: {
        progressPercent() {
            if (!this.duration) {
                return 0;
            }

            return (this.currentTime / this.duration) * 100;
        }
    },
    watch: {
        video() {
            this.isVideoLoaded = false;
            this.isPlaying = false;
            this.isEnded = false;
            this.currentTime = 0;
            this.duration = 0;
            this.clearHideControlsTimer();
            this.isHoveringControls = false;
            this.showControls = true;
        }
    },
    methods: {
        toggleMute() {
            this.muted = !this.muted;
            this.showControlsTemporarily();
        },
        // a click on the video plays/pauses it; in fullscreen, a click beside the picture closes fullscreen instead
        handleVideoClick(event) {
            if (this.isOverlayVisible && !isOnMedia(event)) {
                this.$emit('toggle-overlay');
                return;
            }

            this.togglePlayPause();
        },
        togglePlayPause() {
            if (!this.isVideoLoaded) {
                return;
            }

            const video = this.$refs.video;
            if (video.paused) {
                video.play();
                this.isPlaying = true;
                this.isEnded = false;
                this.hideControlsAfterDelay();
            } else {
                video.pause();
                this.isPlaying = false;
                this.showControls = true;
            }
        },
        // timeupdate only fires a few times per second, so while playing the progress is read every frame instead
        startProgressLoop() {
            this.stopProgressLoop();
            const update = () => {
                this.currentTime = this.$refs.video.currentTime;
                this.progressFrame = requestAnimationFrame(update);
            };
            this.progressFrame = requestAnimationFrame(update);
        },
        stopProgressLoop() {
            cancelAnimationFrame(this.progressFrame);
        },
        handleVideoEnded() {
            this.stopProgressLoop();
            this.isPlaying = false;
            this.isEnded = true;
            this.currentTime = this.duration;
            this.showControls = true;
        },
        handleVideoLoaded() {
            this.isVideoLoaded = true;
        },
        handleMetadataLoaded() {
            const video = this.$refs.video;
            this.duration = Number.isFinite(video.duration) ? video.duration : 0;
        },
        handleTimeUpdate() {
            const video = this.$refs.video;
            this.currentTime = video.currentTime;
            this.duration = Number.isFinite(video.duration) ? video.duration : this.duration;
        },
        handleSeek(event) {
            if (!this.duration) {
                return;
            }

            const newTime = (Number(event.target.value) / 100) * this.duration;
            const video = this.$refs.video;

            if (this.isEnded) {
                this.isEnded = false;
            }

            video.currentTime = newTime;
            this.currentTime = newTime;
            this.showControlsTemporarily();
        },
        handleExpand() {
            this.$emit('toggle-overlay');
            this.isHoveringControls = false;
        },
        handleControlMouseEnter() {
            if (this.isMobileInteractionMode) {
                return;
            }

            this.isHoveringControls = true;
            this.showControls = true;
            this.clearHideControlsTimer();
        },
        handleControlMouseLeave() {
            if (this.isMobileInteractionMode) {
                return;
            }

            this.isHoveringControls = false;
            if (this.isPlaying || this.isMobileInteractionMode) {
                this.hideControlsAfterDelay();
            }
        },
        updateInteractionMode() {
            this.isMobileInteractionMode = this.hoverMediaQuery ? this.hoverMediaQuery.matches : false;
        },
        clearHideControlsTimer() {
            if (this.hideControlsTimer) {
                clearTimeout(this.hideControlsTimer);
                this.hideControlsTimer = null;
            }
        },
        hideControlsAfterDelay() {
            this.clearHideControlsTimer();
            this.showControls = true;
            this.hideControlsTimer = setTimeout(() => {
                if (this.isPlaying && (this.isMobileInteractionMode || !this.isHoveringControls)) {
                    this.showControls = false;
                }
                this.hideControlsTimer = null;
            }, 2000);
        },
        showControlsTemporarily() {
            this.showControls = true;
            if (this.isMobileInteractionMode || (this.isPlaying && !this.isHoveringControls)) {
                this.hideControlsAfterDelay();
            }
        },
        handleClickOutside(event) {
            // on touch screens a paused video keeps its controls
            if (this.isMobileInteractionMode && !this.isPlaying) {
                return;
            }

            if (this.$refs.videoPlayerRef && !this.$refs.videoPlayerRef.contains(event.target)) {
                this.showControls = false;
                this.clearHideControlsTimer();
            }
        }
    },
    mounted() {
        this.hoverMediaQuery = window.matchMedia('(hover: none), (pointer: coarse)');
        this.updateInteractionMode();
        this.hoverMediaQuery.addEventListener('change', this.updateInteractionMode);

        this.boundClickOutside = this.handleClickOutside.bind(this);
        document.addEventListener('click', this.boundClickOutside);
    },
    beforeUnmount() {
        if (this.hoverMediaQuery) {
            this.hoverMediaQuery.removeEventListener('change', this.updateInteractionMode);
        }
        this.clearHideControlsTimer();
        this.stopProgressLoop();

        if (this.boundClickOutside) {
            document.removeEventListener('click', this.boundClickOutside);
        }
    }
};
</script>

<style scoped>
.video-player {
    position: relative;
    overflow: hidden;
    width: 100%;
    display: flex;
    background: linear-gradient(to top, rgba(var(--deep-rgb), 0.2), rgba(var(--deep-rgb), 0));
}

.video-player.loading-placeholder {
    aspect-ratio: 16 / 9;
}

.video-player video {
    width: 100%;
    height: auto;
}

.video-player.loading-placeholder video {
    height: 100%;
    object-fit: contain;
}

.video-player video.small {
    max-height: 30rem;
}

/* expanded: fills the screen, so the bottom bar runs along the screen's bottom edge */
.video-player.expanded {
    height: 100%;
    background: none;
}

.video-player.expanded video {
    height: 100%;
    object-fit: contain;
}

.progress {
    position: absolute;
    left: 0;
    /* room for the expand/collapse button */
    right: 2.5rem;
    bottom: 0;
    height: 2.5rem;
    display: flex;
    align-items: center;
    /* the blur sits here, on the element that fades: a blur on its children only appears once the fade is done */
    backdrop-filter: blur(0.5rem) saturate(2);
    transition: opacity 0.5s;
}

/* played part looks like a hovered control, unplayed part like a normal one. The range input on top only handles seeking */
.progress-fill,
.progress-rest {
    position: absolute;
    top: 0;
    bottom: 0;
    pointer-events: none;
}

.progress-fill {
    left: 0;
    background-color: rgba(var(--deep-rgb), 0.3);
}

.progress-rest {
    right: 0;
    background-color: rgba(var(--navy-rgb), 0.5);
}

.progress-bar {
    position: relative;
    width: 100%;
    margin: 0;
    appearance: none;
    -webkit-appearance: none !important;
    background: transparent;
    height: 100%;
    cursor: pointer;
}

/* no handle: the thumb stays (for dragging) but is invisible */
.progress-bar::-webkit-slider-thumb {
    appearance: none;
    -webkit-appearance: none !important;
    width: 1px;
    height: 2.5rem;
    background: transparent;
    cursor: pointer;
}

.progress-bar::-moz-range-thumb {
    width: 1px;
    height: 2.5rem;
    border: none;
    background: transparent;
    cursor: pointer;
}

.progress-bar:disabled {
    cursor: default;
}

.play-pause-button {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    width: 4rem;
    height: 4rem;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 2rem;
    color: var(--white);
    background-color: rgba(var(--navy-rgb), 0.5);
    backdrop-filter: blur(0.5rem) saturate(2);
    transition: opacity 0.5s;
}

.play-pause-button:hover {
    background-color: rgba(var(--deep-rgb), 0.3);
}

.play-pause-button:active {
    background-color: rgba(var(--deep-rgb), 0.5);
}

.expand-button,
.unexpand-button {
    position: absolute;
    bottom: 0;
    right: 0;
    height: 2.5rem;
    width: 2.5rem;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 1.2rem;
    color: rgba(var(--white-rgb), 0.8);
    background-color: rgba(var(--navy-rgb), 0.5);
    backdrop-filter: blur(0.5rem) saturate(2);
    transition: opacity 0.5s;
}

/* same square as expand/collapse, just left of it */
.sound-button {
    position: absolute;
    bottom: 0;
    right: 2.5rem;
    height: 2.5rem;
    width: 2.5rem;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 1.2rem;
    color: rgba(var(--white-rgb), 0.8);
    background-color: rgba(var(--navy-rgb), 0.5);
    backdrop-filter: blur(0.5rem) saturate(2);
    transition: opacity 0.5s;
}

.has-sound .progress {
    right: 5rem;
}

.expand-button:hover,
.unexpand-button:hover,
.sound-button:hover {
    background-color: rgba(var(--deep-rgb), 0.3);
}

.expand-button:active,
.unexpand-button:active,
.sound-button:active {
    background-color: rgba(var(--deep-rgb), 0.5);
}

.video-player:hover .expand-button,
.video-player:hover .unexpand-button,
.video-player:hover .sound-button,
.video-player:hover .play-pause-button,
.video-player.notplaying .play-pause-button,
.video-player.notplaying .expand-button,
.video-player.notplaying .unexpand-button,
.video-player.notplaying .sound-button {
    opacity: 1;
}
</style>