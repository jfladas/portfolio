<template>
    <teleport to="#images-teleport" :disabled="!isOverlayVisible">
        <div class="carousel hoverable">
            <div class="carousel-inner" :style="{ transform: `translateX(-${currentIndex * 100}%)` }">
                <div class="carousel-item" v-for="(image, index) in images" :key="index"
                    :class="{ small: !isOverlayVisible }">
                    <img :src="image.src" :alt="image.caption" />
                    <div class="fade-bottom" :class="{ small: !isOverlayVisible }">
                        <p>{{ image.caption }}</p>
                    </div>
                </div>
            </div>
            <div class="carousel-fade prev"></div>
            <div class="carousel-fade next"></div>
            <button class="carousel-control prev" @click="prevSlide">
                <font-awesome-icon icon="chevron-left" />
            </button>
            <button class="carousel-control next" @click="nextSlide">
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
    data() {
        return {
            slideTimeout: null
        };
    },
    emits: ['toggle-overlay', 'next-slide', 'prev-slide'],
    methods: {
        nextSlide() {
            this.$emit('next-slide');
            this.resetTimeout();
        },
        prevSlide() {
            this.$emit('prev-slide');
            this.resetTimeout();
        },
        resetTimeout() {
            clearTimeout(this.slideTimeout);
            this.slideTimeout = setTimeout(() => {
                if (!this.isOverlayVisible) {
                    this.nextSlide();
                }
            }, 5000);
        },
    },
    mounted() {
        this.resetTimeout();
    },
    unmounted() {
        clearTimeout(this.slideTimeout);
    }
};
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
}

.carousel p {
    position: absolute;
    bottom: 0;
    width: 100%;
    height: 2rem;
    display: flex;
    justify-content: center;
    align-items: center;
    color: white;
}

.fade-bottom {
    position: relative;
    height: 2rem;
    background-color: rgba(var(--navy-rgb), 0);
    backdrop-filter: blur(1rem);
    transform: translate(0, -30%);
}

.carousel-fade {
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
    background-color: rgba(var(--deep-rgb), 0.2);
    height: 100%;
    width: 2rem;
    backdrop-filter: blur(1rem);
    opacity: 0;
    transition: opacity 0.5s;
}

.carousel-fade.prev {
    left: 0;
    mask: linear-gradient(to left, transparent, white);
}

.carousel-fade.next {
    right: 0;
    mask: linear-gradient(to right, transparent, white);
}

.carousel-control {
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
    height: 2.5rem;
    width: 2.5rem;
    padding: 0.5rem;
    font-size: 1.5rem;
    color: white;
    opacity: 0;
    transition: opacity 0.5s;
    background-color: rgba(var(--deep-rgb), 0.5);
    backdrop-filter: blur(1rem);
}

.carousel-control.prev {
    justify-content: left;
    mask: linear-gradient(to left, transparent, white);
    left: 0;
}

.carousel-control.next {
    justify-content: right;
    mask: linear-gradient(to right, transparent, white);
    right: 0;
}

.carousel-control:hover {
    background-color: rgba(var(--deep-rgb), 0.7);
}

.carousel-control:active {
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

.carousel:hover .carousel-control,
.carousel:hover .carousel-fade,
.carousel:hover .expand-button,
.carousel:hover .unexpand-button {
    opacity: 1;
}
</style>