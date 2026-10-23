<template>
    <div v-show="isOverlayVisible" class="overlay" @click="handleClick">
        <div class="overlay-content">
            <div v-show="overlayType === 'images'" id="images-teleport"></div>
            <div v-show="overlayType === 'video'" id="video-teleport"></div>
            <div v-show="overlayType === 'presentation'" id="presentation-teleport"></div>
        </div>
    </div>
</template>

<script>
export default {
    props: {
        isOverlayVisible: {
            type: Boolean,
            required: true
        },
        overlayType: {
            type: String,
            required: true
        }
    },
    emits: ['close'],
    methods: {
        // a click on the empty space around the media closes the overlay (the players handle clicks on themselves).
        // Checks for the overlay's own elements: by the time a click on a player's close button gets here, the
        // player may already have left the overlay, so "not inside a player" would wrongly reopen it.
        handleClick(event) {
            const emptyAreas = [this.$el, ...this.$el.querySelectorAll('.overlay-content, .overlay-content > div')]

            if (emptyAreas.includes(event.target)) {
                this.$emit('close')
            }
        }
    },
    watch: {
        // the page behind the overlay must not scroll
        isOverlayVisible: {
            handler(visible) {
                document.documentElement.classList.toggle('overlay-open', visible)
            },
            immediate: true
        }
    },
    beforeUnmount() {
        document.documentElement.classList.remove('overlay-open')
    }
}
</script>

<style>
html.overlay-open {
    overflow: hidden;
}
</style>

<style scoped>
.overlay {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(var(--navy-rgb), 0.7);
    backdrop-filter: blur(1rem) saturate(2);
    display: flex;
    justify-content: center;
    align-items: center;
    z-index: 100;
    overscroll-behavior: contain;
}

/* media fills the whole screen; images and videos keep their aspect ratio inside it */
.overlay-content {
    position: relative;
    width: 100%;
    height: 100%;
    overflow: hidden;
}

/* the players fill this area */
#images-teleport,
#video-teleport,
#presentation-teleport {
    width: 100%;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
}
</style>