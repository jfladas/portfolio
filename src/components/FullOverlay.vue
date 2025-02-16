<template>
    <div v-show="isOverlayVisible" class="overlay">
        <div class="overlay-content">
            <div v-show="overlayType === 'images'" id="images-teleport"></div>
            <div v-show="overlayType === 'video'" id="video-teleport"></div>
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
    }
}
</script>

<style scoped>
.overlay {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(var(--navy-rgb), 0.5);
    backdrop-filter: blur(1rem);
    display: flex;
    justify-content: center;
    align-items: center;
    z-index: 100;
}

.overlay-content {
    position: relative;
    width: fit-content;
    max-width: 90vw;
    height: fit-content;
    max-height: 90vh;
    background-color: var(--navy);
    overflow: auto;
    display: flex;
    align-items: stretch;
    justify-content: center;
}

#video-teleport {
    display: flex;
    align-items: stretch;
}
</style>