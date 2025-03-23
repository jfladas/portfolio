<template>
    <teleport to="#images-teleport" :disabled="!isOverlayVisible">
        <div class="carousel hoverable">
            <div class="carousel-inner" :style="{ transform: `translateX(-${currentIndex * 100}%)` }">
                <div class="carousel-item" v-for="(image, index) in images" :key="index"
                    :class="{ small: !isOverlayVisible }">
                    <img :src="image.src" :alt="image.caption" />
                    <div v-if="image.caption" class="fade-bottom">
                        <p>{{ image.caption }}</p>
                    </div>
                </div>
            </div>
            <div v-if="images.length != 1" class="carousel-fade prev"></div>
            <div v-if="images.length != 1" class="carousel-fade next"></div>
            <button v-if="images.length != 1" class="carousel-control prev" @click="$emit('prev-slide')">
                <font-awesome-icon icon="chevron-left" />
            </button>
            <button v-if="images.length != 1" class="carousel-control next" @click="$emit('next-slide')">
                <font-awesome-icon icon="chevron-right" />
            </button>
            <button v-if="!isOverlayVisible" class="expand-button" @click="$emit('toggle-overlay')">
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
        images: {
            type: Array,
            required: true
        },
        currentIndex: {
            type: Number,
            default: 0
        },
        isOverlayVisible: {
            type: Boolean,
            default: false
        }
    },
    emits: ['toggle-overlay', 'next-slide', 'prev-slide']
};

//TODO: improve image carousel mobile ux
</script>

<style scoped>
.carousel {
    position: relative;
    overflow: hidden;
    width: 100%;
}

.carousel-inner {
    display: flex;
    height: 100%;
    transition: transform 0.5s cubic-bezier(0.6, 0.6, 0.1, 1);
}

.carousel-item {
    min-width: 100%;
    max-height: 90vh;
    background: linear-gradient(to top, rgba(var(--navy-rgb), 0), var(--deep), rgba(var(--navy-rgb), 0));
    background: transparent;
    display: flex;
    flex-direction: column;
    justify-content: center;
}

.carousel-item.small {
    max-height: 30rem;
}

.carousel img {
    width: 100%;
    height: auto;
    max-height: calc(100% - 2.5rem);
    margin-top: 0.5rem;
    object-fit: contain;
    transform: scale(0.99);
    display: block;
    background: linear-gradient(to top, rgba(var(--deep-rgb), 0.2), rgba(var(--deep-rgb), 0));
}

.carousel p {
    position: absolute;
    bottom: 0;
    width: 100%;
    height: 2rem;
    display: flex;
    justify-content: center;
    align-items: center;
    color: var(--white);
}

.fade-bottom {
    position: relative;
    height: 2rem;
    background-color: rgba(var(--navy-rgb), 0.5);
    backdrop-filter: blur(1rem);
    transform: translate(0, -30%);
}

.carousel-fade {
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
    background-color: rgba(var(--navy-rgb), 0.5);
    height: 100%;
    width: 2rem;
    backdrop-filter: blur(1rem);
    opacity: 0;
    transition: opacity 0.5s;
}

.carousel-fade.prev {
    left: 0;
    mask: linear-gradient(to left, transparent, var(--white));
}

.carousel-fade.next {
    right: 0;
    mask: linear-gradient(to right, transparent, var(--white));
}

.carousel-control {
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
    height: 2.5rem;
    width: 2.5rem;
    padding: 0.5rem;
    font-size: 1.5rem;
    color: var(--white);
    opacity: 0;
    transition: opacity 0.5s;
    background-color: rgba(var(--navy-rgb), 0.3);
    backdrop-filter: blur(0.5rem);
}

.carousel-control.prev {
    left: 0;
}

.carousel-control.next {
    right: 0;
}

.carousel-control:hover {
    background-color: rgba(var(--deep-rgb), 0.2);
}

.carousel-control:active {
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
}

.expand-button:hover,
.unexpand-button:hover {
    background-color: rgba(var(--deep-rgb), 0.2);
}

.expand-button:active,
.unexpand-button:active {
    background-color: rgba(var(--deep-rgb), 0.5);
}

.carousel:hover .carousel-control,
.carousel:hover .carousel-fade,
.carousel:hover .expand-button,
.carousel:hover .unexpand-button {
    opacity: 1;
}
</style>