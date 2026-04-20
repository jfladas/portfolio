<template>
    <teleport to="#video-teleport" :disabled="!isOverlayVisible">
        <div class="video-player hoverable" :class="{ notplaying: !isPlaying, 'loading-placeholder': !isVideoLoaded }"
            @mousemove="showControlsTemporarily" @touchstart="showControlsTemporarily">
            <video ref="video" :src="video" @ended="handleVideoEnded" @loadeddata="handleVideoLoaded"
                @loadedmetadata="handleMetadataLoaded" @timeupdate="handleTimeUpdate"
                :class="{ small: !isOverlayVisible }"></video>
            <button class="play-pause-button" @click="togglePlayPause" @mouseenter="handleControlMouseEnter"
                @mouseleave="handleControlMouseLeave" :style="{ opacity: showControls ? 1 : 0 }">
                <font-awesome-icon
                    :icon="isVideoLoaded ? (isEnded ? 'rotate-left' : (isPlaying ? 'pause' : 'play')) : 'spinner'"
                    :spin="!isVideoLoaded" />
            </button>
            <div class="progress" :class="{ unexpanded: !isOverlayVisible }" @mouseenter="handleControlMouseEnter"
                @mouseleave="handleControlMouseLeave" :style="{ opacity: showControls ? 1 : 0 }">
                <input class="progress-bar" type="range" min="0" max="100" step="0.1" :value="progressPercent"
                    :disabled="!isVideoLoaded || !duration" @input="handleSeek" />
            </div>
            <button v-if="!isOverlayVisible" class="expand-button" @click="handleExpand"
                @mouseenter="handleControlMouseEnter" @mouseleave="handleControlMouseLeave"
                :style="{ opacity: showControls ? 1 : 0 }">
                <font-awesome-icon icon="up-right-and-down-left-from-center" />
            </button>
            <button v-if="isOverlayVisible" class="unexpand-button" @click="$emit('toggle-overlay')"
                @mouseenter="handleControlMouseEnter" @mouseleave="handleControlMouseLeave"
                :style="{ opacity: showControls ? 1 : 0 }">
                <font-awesome-icon icon="down-left-and-up-right-to-center" />
            </button>
        </div>
    </teleport>
</template>

<script>
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
            showControls: true
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
        handleVideoEnded() {
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
                if ((this.isPlaying || this.isMobileInteractionMode) &&
                    (this.isMobileInteractionMode || !this.isHoveringControls)) {
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
        }
    },
    mounted() {
        this.hoverMediaQuery = window.matchMedia('(hover: none), (pointer: coarse)');
        this.updateInteractionMode();
        this.hoverMediaQuery.addEventListener('change', this.updateInteractionMode);
    },
    beforeUnmount() {
        if (this.hoverMediaQuery) {
            this.hoverMediaQuery.removeEventListener('change', this.updateInteractionMode);
        }
        this.clearHideControlsTimer();
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

.progress {
    position: absolute;
    left: 0;
    right: 0;
    bottom: 0;
    height: 2.5rem;
    display: flex;
    align-items: center;
    background-color: rgba(var(--navy-rgb), 0.5);
    backdrop-filter: blur(0.5rem) saturate(2);
    transition: opacity 0.5s;
}

.progress.unexpanded {
    right: 2.5rem;
}

.progress-bar {
    width: 100%;
    margin: 0;
    appearance: none;
    -webkit-appearance: none !important;
    background: transparent;
    height: 100%;
    cursor: pointer;
}

.progress-bar::-webkit-slider-thumb {
    appearance: none;
    -webkit-appearance: none !important;
    width: 1.5rem;
    height: 1.5rem;
    background: rgba(var(--white-rgb), 0.8);
    border-radius: 0.5rem;
    cursor: pointer;
}

.progress-bar:hover {
    background: rgba(var(--deep-rgb), 0.3);
}

.progress-bar::-webkit-slider-thumb:hover {
    background: rgba(var(--white-rgb), 1);
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

.unexpand-button {
    top: 0;
}

.expand-button:hover,
.unexpand-button:hover {
    background-color: rgba(var(--deep-rgb), 0.3);
}

.expand-button:active,
.unexpand-button:active {
    background-color: rgba(var(--deep-rgb), 0.5);
}

.video-player:hover .expand-button,
.video-player:hover .unexpand-button,
.video-player:hover .play-pause-button,
.video-player.notplaying .play-pause-button,
.video-player.notplaying .expand-button,
.video-player.notplaying .unexpand-button {
    opacity: 1;
}
</style>