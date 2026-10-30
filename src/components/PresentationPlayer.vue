<template>
    <div class="presentation-player hoverable" :class="{ overlayed: isOverlayVisible }">
        <LoadingOverlay v-if="!isLoaded" label="Loading presentation" />
        <div v-if="isPdf" class="pdf-image-frame" :class="{ hidden: !isLoaded, 'loading-placeholder': !isLoaded }"
            role="button" tabindex="0" :aria-label="isOverlayVisible ? 'Exit fullscreen' : 'Show fullscreen'"
            @click="handlePdfFrameClick" @touchstart="onPdfTouchStart" @touchmove="onPdfTouchMove"
            @touchend="onPdfTouchEnd">
            <img v-if="currentPdfPageImage" class="pdf-page-image" :src="currentPdfPageImage"
                :alt="`${title} page ${pdfPage}`" />
        </div>
        <iframe v-else :key="iframeKey" class="presentation-frame" :class="{ hidden: !isLoaded }" :src="src"
            :title="title" frameborder="0" @load="handleLoaded">
            This is an embedded <a target="_blank" href="https://office.com">Microsoft Office</a>
            presentation, powered by <a target="_blank" href="https://office.com/webapps">Office</a>.
        </iframe>
        <div v-if="isPdf && hasMultiplePdfPages && canGoPrev" class="pdf-fade prev"></div>
        <div v-if="isPdf && hasMultiplePdfPages && canGoNext" class="pdf-fade next"></div>
        <button v-if="isPdf && hasMultiplePdfPages && canGoPrev" class="pdf-control prev" aria-label="Previous PDF page"
            @click="goToPrevPage">
            <AppIcon icon="chevron-left" />
        </button>
        <button v-if="isPdf && hasMultiplePdfPages && canGoNext" class="pdf-control next" aria-label="Next PDF page"
            @click="goToNextPage">
            <AppIcon icon="chevron-right" />
        </button>
        <button class="replay-button" aria-label="Reload presentation" @click="reloadPresentation">
            <AppIcon icon="rotate-right" />
        </button>
        <button v-if="!isOverlayVisible" class="expand-button" aria-label="Expand" @click="$emit('toggle-overlay')">
            <AppIcon icon="up-right-and-down-left-from-center" />
        </button>
        <button v-if="isOverlayVisible" class="unexpand-button" aria-label="Collapse" @click="$emit('toggle-overlay')">
            <AppIcon icon="down-left-and-up-right-to-center" />
        </button>
    </div>
</template>

<script>
import { isTouchScreen, isOnMedia } from '@/composables/fullscreenMedia.js'
import LoadingOverlay from '@/components/LoadingOverlay.vue'

export default {
    components: { LoadingOverlay },
    props: {
        src: {
            type: String,
            required: true
        },
        title: {
            type: String,
            default: 'PowerPoint Viewer'
        },
        isOverlayVisible: {
            type: Boolean,
            default: false
        }
    },
    emits: ['toggle-overlay'],
    data() {
        return {
            isLoaded: false,
            iframeKey: 0,
            pdfPage: 1,
            pdfPages: [],
            renderRunId: 0,
            touchStartX: 0,
            touchEndX: 0,
            suppressNextTap: false
        }
    },
    computed: {
        normalizedSrc() {
            return (this.src || '').split('#')[0].split('?')[0].toLowerCase()
        },
        isPdf() {
            return this.normalizedSrc.endsWith('.pdf')
        },
        currentPdfPageImage() {
            return this.pdfPages[this.pdfPage - 1] || ''
        },
        hasMultiplePdfPages() {
            return this.pdfPages.length > 1
        },
        canGoPrev() {
            return this.pdfPage > 1
        },
        canGoNext() {
            return this.pdfPage < this.pdfPages.length
        }
    },
    watch: {
        src() {
            this.initializeContent()
        },
        // expanded, the arrow keys turn PDF pages
        isOverlayVisible: {
            handler(visible) {
                if (visible && this.isPdf) {
                    window.addEventListener('keydown', this.onKeydown)
                } else {
                    window.removeEventListener('keydown', this.onKeydown)
                }
            },
            immediate: true
        }
    },
    mounted() {
        this.initializeContent()
    },
    beforeUnmount() {
        window.removeEventListener('keydown', this.onKeydown)
    },
    methods: {
        onKeydown(event) {
            if (event.key === 'ArrowLeft') {
                this.goToPrevPage()
            } else if (event.key === 'ArrowRight') {
                this.goToNextPage()
            }
        },
        async initializeContent() {
            this.pdfPage = 1

            if (this.isPdf) {
                await this.renderPdfPages()
                return
            }

            this.pdfPages = []
            this.resetIframe()
        },
        resetIframe() {
            this.isLoaded = false
            this.iframeKey += 1
        },
        handleLoaded() {
            this.isLoaded = true
        },
        async renderPdfPages() {
            this.isLoaded = false
            this.pdfPages = []
            const currentRunId = ++this.renderRunId

            const pdfjsLib = await import('pdfjs-dist')
            const pdfWorkerUrl = await import('pdfjs-dist/build/pdf.worker.min.mjs?url')
            pdfjsLib.GlobalWorkerOptions.workerSrc = pdfWorkerUrl.default

            const loadingTask = pdfjsLib.getDocument(this.src)
            const pdfDocument = await loadingTask.promise

            // Pages are shown as soon as they are rendered, so the first page appears without waiting for the rest
            for (let i = 1; i <= pdfDocument.numPages; i += 1) {
                const page = await pdfDocument.getPage(i)
                const viewport = page.getViewport({ scale: 2 })
                const canvas = document.createElement('canvas')
                const context = canvas.getContext('2d')

                canvas.width = Math.floor(viewport.width)
                canvas.height = Math.floor(viewport.height)

                await page.render({
                    canvasContext: context,
                    viewport
                }).promise

                if (currentRunId !== this.renderRunId) {
                    return
                }

                this.pdfPages.push(canvas.toDataURL('image/png'))
                this.isLoaded = true
            }
        },
        goToPrevPage() {
            if (this.pdfPage <= 1) {
                return
            }

            this.pdfPage -= 1
        },
        goToNextPage() {
            if (this.pdfPage >= this.pdfPages.length) {
                return
            }

            this.pdfPage += 1
        },
        // opens fullscreen; closes it again, except for a tap on the page on touch screens (only shows the controls)
        handlePdfFrameClick(event) {
            if (this.suppressNextTap) {
                this.suppressNextTap = false
                return
            }

            if (this.isOverlayVisible && isTouchScreen() && isOnMedia(event)) {
                return
            }

            this.$emit('toggle-overlay')
        },
        onPdfTouchStart(event) {
            this.touchStartX = event.changedTouches[0].screenX
            this.touchEndX = event.changedTouches[0].screenX
        },
        onPdfTouchMove(event) {
            this.touchEndX = event.changedTouches[0].screenX
        },
        onPdfTouchEnd() {
            const deltaX = this.touchEndX - this.touchStartX

            if (Math.abs(deltaX) < 50) {
                return
            }

            this.suppressNextTap = true
            window.setTimeout(() => {
                this.suppressNextTap = false
            }, 300)

            if (deltaX < 0) {
                this.goToNextPage()
            } else {
                this.goToPrevPage()
            }
        },
        reloadPresentation() {
            this.initializeContent()
        }
    }
}
</script>

<style scoped>
.presentation-player {
    position: relative;
    width: 100%;
    overflow: hidden;
    clip-path: inset(1px 1.5rem 1.6rem 1.5rem);
    background: var(--navy);
}

/* sized and shifted so that the part the clip-path leaves (1.5rem off left/right, 1.6rem off the bottom)
   reaches the screen edges */
.presentation-player.overlayed {
    position: fixed;
    top: 50%;
    left: 50%;
    transform: translate(-50%, calc(-50% + 0.8rem));
    width: min(100vw + 3rem, (100dvh + 1.6rem) * 16 / 9);
    z-index: 101;

    .pdf-image-frame {
        height: 100%;
        background: none;
    }

    .pdf-page-image {
        height: 100%;
        object-fit: contain;
    }
}

.presentation-player.overlayed:has(.pdf-image-frame) {
    top: 0;
    left: 0;
    transform: none;
    width: 100vw;
    height: 100dvh;
    background: none;
}

.presentation-player:has(.pdf-image-frame) {
    clip-path: none;

    .expand-button,
    .unexpand-button {
        right: 0;
        bottom: 0;
    }

    .replay-button {
        left: 0;
        bottom: 0;
    }
}

.presentation-frame {
    display: block;
    width: 100%;
    max-width: 100%;
    aspect-ratio: 16 / 9;
    height: auto;
    border: 0;
    clip-path: inset(1px 1.5rem 1.6rem 1.5rem);
    background: linear-gradient(to top, rgba(var(--deep-rgb), 0.2), rgba(var(--deep-rgb), 0));
}

.pdf-image-frame {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    height: auto;
    background: linear-gradient(to top, rgba(var(--deep-rgb), 0.2), rgba(var(--deep-rgb), 0));
    cursor: pointer;
}

.pdf-image-frame.loading-placeholder {
    aspect-ratio: 16 / 9;
}

.pdf-page-image {
    width: 100%;
    height: auto;
    display: block;
}

.presentation-frame.hidden {
    visibility: hidden;
}

.pdf-fade {
    position: absolute;
    top: 0;
    background-color: rgba(var(--navy-rgb), 0.5);
    height: 100%;
    width: 2rem;
    backdrop-filter: blur(1rem);
    opacity: 0;
    transition: opacity 0.5s;
    pointer-events: none;
}

.pdf-fade.prev {
    left: -1px;
    mask: linear-gradient(to left, transparent, var(--white));
}

.pdf-fade.next {
    right: -1px;
    mask: linear-gradient(to right, transparent, var(--white));
}

.pdf-control {
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

.pdf-control.prev {
    left: 0;
}

.pdf-control.next {
    right: 0;
}

.pdf-control:hover {
    background-color: rgba(var(--deep-rgb), 0.3);
}

.pdf-control:active {
    background-color: rgba(var(--deep-rgb), 0.5);
}

.expand-button,
.replay-button,
.unexpand-button {
    position: absolute;
    bottom: calc(1.6rem - 1px);
    right: 1.5rem;
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

.replay-button {
    right: auto;
    left: 1.5rem;
}

.expand-button:hover,
.replay-button:hover,
.unexpand-button:hover {
    background-color: rgba(var(--deep-rgb), 0.3);
}

.expand-button:active,
.replay-button:active,
.unexpand-button:active {
    background-color: rgba(var(--deep-rgb), 0.5);
}

.presentation-player:hover {

    .expand-button,
    .replay-button,
    .unexpand-button,
    .pdf-control,
    .pdf-fade {
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
