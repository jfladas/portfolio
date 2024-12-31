<template>
    <teleport to="#video-teleport" :disabled="!isOverlayVisible">
        <div class="video-player hoverable">
            <video ref="video" :src="video" @ended="handleVideoEnded"></video>
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
</script>

<style scoped>
.video-player {
    position: relative;
    overflow: hidden;
    width: 100%;
    display: flex;
}

.video-player video {
    width: 100%;
    height: auto;
}

.play-pause-button {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    width: 10rem;
    height: 10rem;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 2rem;
    color: white;
    background-color: rgba(var(--deep-rgb), 0.5);
    backdrop-filter: blur(1rem);
    mask: radial-gradient(circle at 50% 50%, white, transparent 50%);
    opacity: 0;
}

.play-pause-button:hover {
    background-color: rgba(var(--deep-rgb), 0.7);
}

.play-pause-button:active {
    background-color: rgba(var(--deep-rgb), 0.9);
}

.expand-button,
.unexpand-button {
    position: absolute;
    bottom: 0;
    right: 0;
    height: 5rem;
    width: 5rem;
    display: flex;
    justify-content: flex-end;
    align-items: flex-end;
    padding-right: 0.5rem;
    font-size: 1.2rem;
    color: rgba(255, 255, 255, 0.8);
    background-color: rgba(var(--deep-rgb), 0.5);
    backdrop-filter: blur(1rem);
    mask: radial-gradient(circle at 75% 75%, white 0, transparent 40%);
    opacity: 0;
    transition: opacity 0.5s;
}

.unexpand-button {
    top: 0;
    align-items: flex-start;
    mask: radial-gradient(circle at 75% 25%, white 0, transparent 40%);
}

.expand-button:hover,
.unexpand-button:hover {
    background-color: rgba(var(--deep-rgb), 0.7);
}

.expand-button:active,
.unexpand-button:active {
    background-color: rgba(var(--deep-rgb), 0.9);
}

.video-player:hover .expand-button,
.video-player:hover .unexpand-button,
.video-player:hover .play-pause-button {
    opacity: 1;
}
</style>