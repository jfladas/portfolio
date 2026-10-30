<template>
    <teleport to="#images-teleport" :disabled="!isOverlayVisible">
        <div class="carousel hoverable" :class="{ expanded: isOverlayVisible, 'loading-placeholder': !currentLoaded && !isOverlayVisible }"
            @touchstart="onTouchStart"
            @touchmove="onTouchMove" @touchend="onTouchEnd">
            <div class="carousel-inner" :style="{ transform: `translateX(-${currentIndex * 100}%)` }">
                <div class="carousel-item" v-for="(image, index) in images" :key="index"
                    :class="{ small: !isOverlayVisible }" role="button" :tabindex="index === currentIndex ? 0 : -1"
                    :aria-label="isOverlayVisible ? 'Exit fullscreen' : 'Show fullscreen'" @click="onImageClick">
                    <img ref="images" :src="image.src" :alt="image.caption" @load="markLoaded(image.src)"
                        @error="markLoaded(image.src)" />
                </div>
            </div>
            <LoadingOverlay v-if="!currentLoaded" label="Loading image" />
            <div v-if="images.length != 1" class="carousel-fade prev"></div>
            <div v-if="images.length != 1" class="carousel-fade next"></div>
            <button v-if="images.length != 1" class="carousel-control prev" aria-label="Previous image" @click="$emit('prev-slide')">
                <AppIcon icon="chevron-left" />
            </button>
            <button v-if="images.length != 1" class="carousel-control next" aria-label="Next image" @click="$emit('next-slide')">
                <AppIcon icon="chevron-right" />
            </button>
            <div v-if="currentCaption" class="caption">
                <p>{{ currentCaption }}</p>
            </div>
            <button v-if="!isOverlayVisible" class="expand-button" aria-label="Expand" @click="$emit('toggle-overlay')">
                <AppIcon icon="up-right-and-down-left-from-center" />
            </button>
            <button v-if="isOverlayVisible" class="unexpand-button" aria-label="Collapse" @click="$emit('toggle-overlay')">
                <AppIcon icon="down-left-and-up-right-to-center" />
            </button>
        </div>
    </teleport>
</template>

<script>
import { isTouchScreen, isOnMedia } from '@/composables/fullscreenMedia.js';
import LoadingOverlay from '@/components/LoadingOverlay.vue';

export default {
    components: { LoadingOverlay },
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
    emits: ['toggle-overlay', 'next-slide', 'prev-slide'],
    data() {
        return {
            touchStartX: 0,
            touchEndX: 0,
            // by src, so a new set of images (another project) starts out loading again
            loadedSources: {}
        };
    },
    watch: {
        // expanded, the arrow keys switch images
        isOverlayVisible: {
            handler(visible) {
                if (visible) {
                    window.addEventListener('keydown', this.onKeydown);
                } else {
                    window.removeEventListener('keydown', this.onKeydown);
                }
            },
            immediate: true
        }
    },
    mounted() {
        // images from the browser cache can be complete before the load listener runs
        (this.$refs.images || []).forEach((img) => {
            if (img.complete) {
                this.markLoaded(img.getAttribute('src'));
            }
        });
    },
    beforeUnmount() {
        window.removeEventListener('keydown', this.onKeydown);
    },
    computed: {
        currentLoaded() {
            const currentImage = this.images[this.currentIndex];
            return !currentImage || Boolean(this.loadedSources[currentImage.src]);
        },
        currentCaption() {
            const currentImage = this.images[this.currentIndex];
            return currentImage && currentImage.caption ? currentImage.caption : '';
        }
    },
    methods: {
        markLoaded(src) {
            this.loadedSources[src] = true;
        },
        // opens fullscreen; closes it again, except for a tap on the image on touch screens (only shows the controls)
        onImageClick(event) {
            if (this.isOverlayVisible && isTouchScreen() && isOnMedia(event)) {
                return;
            }

            this.$emit('toggle-overlay');
        },
        onKeydown(event) {
            if (event.key === 'ArrowLeft') {
                this.$emit('prev-slide');
            } else if (event.key === 'ArrowRight') {
                this.$emit('next-slide');
            }
        },
        onTouchStart(event) {
            this.touchStartX = event.changedTouches[0].screenX;
            this.touchEndX = event.changedTouches[0].screenX;
        },
        onTouchMove(event) {
            this.touchEndX = event.changedTouches[0].screenX;
        },
        onTouchEnd() {
            if (this.touchEndX < this.touchStartX - 50) {
                this.$emit('next-slide');
            }
            if (this.touchEndX > this.touchStartX + 50) {
                this.$emit('prev-slide');
            }
        }
    }
};
</script>

<style scoped>
.carousel {
    position: relative;
    overflow: hidden;
    width: 100%;

    img {
        width: 100%;
        height: auto;
        max-height: 100%;
        margin-top: 0.5rem;
        object-fit: contain;
        display: block;
        background: linear-gradient(to top, rgba(var(--deep-rgb), 0.2), rgba(var(--deep-rgb), 0));
    }
}

.carousel-inner {
    display: flex;
    height: 100%;
    transition: transform 0.5s cubic-bezier(0.6, 0.6, 0.1, 1);
}

.carousel-item {
    min-width: 100%;
    max-height: 90vh;
    background: transparent;
    display: flex;
    flex-direction: column;
    justify-content: center;
    cursor: pointer;
}

.carousel-item.small {
    max-height: 30rem;
}

.carousel.loading-placeholder {
    aspect-ratio: 16 / 9;
    max-height: 30rem;
}

.carousel.expanded {
    height: 100%;

    .carousel-item {
        max-height: none;
        height: 100%;
    }

    img {
        height: 100%;
        margin-top: 0;
        background: none;
    }
}

.caption {
    position: absolute;
    left: 0;
    right: 2.5rem;
    bottom: 0;
    height: 2.5rem;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: rgba(var(--navy-rgb), 0.5);
    backdrop-filter: blur(0.5rem) saturate(2);
    opacity: 0;
    transition: opacity 0.5s;

    p {
        margin: 0;
        padding: 0 0.75rem;
        color: var(--white);
    }
}

.carousel-fade {
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
    background-color: rgba(var(--navy-rgb), 0);
    height: 100%;
    width: 3rem;
    backdrop-filter: blur(1rem);
    opacity: 0;
    transition: opacity 0.5s;
    pointer-events: none;
}

.carousel-fade.prev {
    left: -1px;
    mask: linear-gradient(to left, transparent, var(--white));
}

.carousel-fade.next {
    right: -1px;
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
    background-color: rgba(var(--navy-rgb), 0.5);
    backdrop-filter: blur(0.5rem) saturate(2);
}

.carousel-control.prev {
    left: 0;
}

.carousel-control.next {
    right: 0;
}

.carousel-control:hover {
    background-color: rgba(var(--deep-rgb), 0.3);
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
    background-color: rgba(var(--navy-rgb), 0.5);
    backdrop-filter: blur(0.5rem) saturate(2);
    opacity: 0;
    transition: opacity 0.5s;
}

.expand-button:hover,
.unexpand-button:hover {
    background-color: rgba(var(--deep-rgb), 0.3);
}

.expand-button:active,
.unexpand-button:active {
    background-color: rgba(var(--deep-rgb), 0.5);
}

.carousel:hover {

    .carousel-control,
    .carousel-fade,
    .caption,
    .expand-button,
    .unexpand-button {
        opacity: 1;
    }
}

@media (hover: none), (pointer: coarse) {
    .expand-button,
    .unexpand-button {
        opacity: 1;
    }
}
</style>