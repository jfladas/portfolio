<template>
    <teleport to="#video-teleport" :disabled="!isOverlayVisible">
        <div class="video-player hoverable" :class="{ notplaying: !isPlaying }">
            <video ref="video" :src="video" @ended="handleVideoEnded" :class="{ small: !isOverlayVisible }"></video>
            <button class="play-pause-button" @click="togglePlayPause">
                <font-awesome-icon :icon="isEnded ? 'rotate-left' : (isPlaying ? 'pause' : 'play')" />
            </button>
            <button v-if="!isOverlayVisible" class="expand-button" @click="handleExpand">
                <font-awesome-icon icon="up-right-and-down-left-from-center" />
            </button>
            <button v-if="isOverlayVisible" class="unexpand-button" @click="$emit('toggle-overlay')">
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
            isEnded: false
        };
    },
    emits: ['toggle-overlay'],
    methods: {
        togglePlayPause() {
            const video = this.$refs.video;
            if (video.paused) {
                video.play();
                this.isPlaying = true;
                this.isEnded = false;
            } else {
                video.pause();
                this.isPlaying = false;
            }
        },
        handleVideoEnded() {
            this.isPlaying = false;
            this.isEnded = true;
        },
        handleExpand() {
            this.$emit('toggle-overlay');
        }
    }
};

//TODO: improve video player mobile ux
</script>

<style scoped>
.video-player {
    position: relative;
    overflow: hidden;
    width: 100%;
    display: flex;
    background: linear-gradient(to top, rgba(var(--deep-rgb), 0.2), rgba(var(--deep-rgb), 0));
}

.video-player video {
    width: 100%;
    height: auto;
}

.video-player video.small {
    max-height: 30rem;
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
    background-color: rgba(var(--navy-rgb), 0.3);
    backdrop-filter: blur(0.5rem);
    opacity: 0;
}

.play-pause-button:hover {
    background-color: rgba(var(--deep-rgb), 0.2);
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
    background-color: rgba(var(--navy-rgb), 0.3);
    backdrop-filter: blur(0.5rem);
    opacity: 0;
    transition: opacity 0.5s;
}

.unexpand-button {
    top: 0;
    align-items: flex-start;
}

.expand-button:hover,
.unexpand-button:hover {
    background-color: rgba(var(--deep-rgb), 0.2);
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