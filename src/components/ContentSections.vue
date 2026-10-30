<template>
    <template v-for="(section, index) in sections" :key="index">
        <div v-if="isSectionVisible(section)" class="section">
            <p v-if="section.type === 'paragraph'" class="paragraph text" v-html="section.text"></p>
            <h3 v-if="section.type === 'heading' && !section.collapsible" class="heading">{{ section.text }}</h3>
            <h3 v-if="section.type === 'heading' && section.collapsible" class="heading collapsible hoverable"
                role="button" tabindex="0" :aria-expanded="isGroupOpen(section.group)"
                @click="toggleGroup(section.group)">
                <span>{{ section.text }}</span>
                <AppIcon icon="angle-up" class="arrow" :class="{ 'rotated': isGroupOpen(section.group) }" />
            </h3>
            <h4 v-if="section.type === 'subheading'" class="subheading">{{ section.text }}</h4>
            <div v-if="section.type === 'bullet'" class="bullet-container">
                <AppIcon icon="minus" class="bullet" />
                <p v-html="section.text"></p>
            </div>
            <div v-if="section.type === 'iconed'" class="iconed-container">
                <AppIcon :icon="section.icon" fixed-width class="iconed" />
                <p class="text" v-html="section.text"></p>
            </div>
            <div v-if="section.type === 'quoted'" class="quoted-container">
                <div class="text quoted">
                    <svg v-for="mark in quoteMarks" :key="mark.kind" :class="['quote-mark', `quote-${mark.kind}`]"
                        viewBox="2 4 10 8" aria-hidden="true">
                        <defs>
                            <linearGradient :id="`${uid}-${index}-${mark.kind}`" x1="0" x2="0" y1="0" y2="1">
                                <stop offset="0" class="quote-fade-start" />
                                <stop offset="1" class="quote-fade-end" />
                            </linearGradient>
                        </defs>
                        <path :d="mark.path" :fill="`url(#${uid}-${index}-${mark.kind})`" />
                    </svg>
                    <p v-html="section.text"></p>
                </div>
            </div>
            <div v-if="section.type === 'buttons'" class="buttons">
                <!-- icon-only buttons (empty text) name themselves through `label` -->
                <a v-for="button in section.buttons" :key="button.action" :href="button.action" class="button-container"
                    :target="button.same ? '_self' : '_blank'" :aria-label="button.label || undefined">
                    <button class="hoverable" :class="'button-' + button.color" tabindex="-1">
                        {{ button.text }}
                        <AppIcon v-if="button.icon" :icon="button.icon" />
                    </button>
                </a>
            </div>
            <div v-if="section.type === 'images'" class="images">
                <ImageCarousel :images="section.images" :currentIndex="currentIndexes[index]"
                    :isOverlayVisible="isOverlayVisible && overlayIndex === index"
                    @toggle-overlay="toggleOverlay('images', index)" @next-slide="nextSlide(index)"
                    @prev-slide="prevSlide(index)" />
            </div>
            <div v-if="section.type === 'video'" class="video">
                <VideoPlayer :video="section.video" :sound="section.sound"
                    :isOverlayVisible="isOverlayVisible && overlayIndex === index"
                    @toggle-overlay="toggleOverlay('video', index)" />
            </div>
            <div v-if="section.type === 'presentation'" class="presentation">
                <PresentationPlayer :src="section.src" :title="section.title || 'PowerPoint Viewer'"
                    :isOverlayVisible="isOverlayVisible && overlayIndex === index"
                    @toggle-overlay="toggleOverlay('presentation', index)" />
            </div>
        </div>
    </template>
</template>

<script setup>
import { ref, useId } from 'vue'
import ImageCarousel from '@/components/ImageCarousel.vue'
import PresentationPlayer from '@/components/PresentationPlayer.vue'
import VideoPlayer from '@/components/VideoPlayer.vue'

// big pixel quote marks behind the quote text, cut out of pixelarticons' quote-text-inline (the closing one turned
// around); both fade out from top to bottom
const uid = useId()
const quoteMarks = [
    { kind: 'open', path: 'M2 8h4v4H2zm6 0h4v4H8zM2 6h2v2H2zm6 0h2v2H8zM4 4h2v2H4zm6 0h2v2h-2z' },
    { kind: 'close', path: 'M8 4h4v4H8zM2 4h4v4H2zm8 4h2v2h-2zM4 8h2v2H4zm4 2h2v2H8zM2 10h2v2H2z' }
]

const props = defineProps({
    sections: {
        type: Array,
        required: true
    },
    currentIndexes: {
        type: Array,
        default: () => []
    },
    isOverlayVisible: {
        type: Boolean,
        default: false
    },
    overlayIndex: {
        type: Number,
        default: null
    }
})

const emit = defineEmits(['toggle-overlay', 'next-slide', 'prev-slide'])
// collapsible groups start open, except on narrower screens where the side content moves below the text
const startOpen = !window.matchMedia('(max-width: 1200px)').matches
const openGroups = ref(Object.fromEntries(props.sections.filter((section) => section.collapsible).map((section) => [section.group, startOpen])))

const isGroupOpen = (group) => Boolean(openGroups.value[group])

const isSectionVisible = (section) => !section.group || section.collapsible || isGroupOpen(section.group)

const toggleGroup = (group) => {
    openGroups.value[group] = !isGroupOpen(group)
}

const toggleOverlay = (type, index) => {
    emit('toggle-overlay', type, index)
}

const nextSlide = (index) => {
    emit('next-slide', index)
}

const prevSlide = (index) => {
    emit('prev-slide', index)
}
</script>

<style scoped>
.heading {
    margin-bottom: 0.2rem;
}

.collapsible {
    cursor: pointer;
    display: flex;
    align-items: center;
    gap: 0.5rem;

    .arrow {
        color: var(--deep);
        font-size: 3rem;
        transform: rotate(90deg);
        transition: all 0.3s ease;
    }

    .arrow.rotated {
        transform: rotate(180deg);
    }
}


.collapsible:hover {
    .arrow {
        color: var(--sky);
        transform: rotate(110deg);
    }

    .arrow.rotated {
        transform: rotate(180deg);
    }
}

.paragraph {
    margin-top: 0.5rem;
}

.bullet-container {
    display: flex;
    margin-top: 0.5rem;
    text-align: left;

    p {
        width: 100%;
    }
}

.iconed-container {
    display: flex;
    margin-top: 0.5rem;
    color: var(--sky);
}

.iconed-container .text {
    font-weight: 700;
}

.bullet {
    margin: 0.15rem 0.5rem 0 1rem;
    color: var(--white);
}

.iconed {
    margin: 0.1rem 0.5rem 0 0;
}

.quoted-container {
    display: flex;
    margin: 0.5rem 0 0.5rem 0;
}

.quoted {
    position: relative;
    isolation: isolate;
    padding: 1rem 0;
}

.quoted p {
    position: relative;
    font-family: 'Funnel Display Variable', sans-serif;
    font-weight: 500;
    font-size: 1.15rem;
    line-height: 1.55;
}

.quote-mark {
    position: absolute;
    z-index: -1;
    width: 7.5rem;
    height: auto;
    shape-rendering: crispEdges;
}

/* the text lines up with the other text, the marks stick out on both sides by the same amount */
.quote-open {
    left: -2rem;
    top: -0.5rem;
}

.quote-close {
    right: -2rem;
    bottom: -0.5rem;
}

.quote-fade-start {
    stop-color: var(--deep);
}

.quote-fade-end {
    stop-color: var(--deep);
    stop-opacity: 0;
}

.paragraph,
.subheading,
.bullet-container,
.iconed-container,
.quoted-container,
.buttons,
.images,
.video,
.presentation {
    margin-left: 2rem;
    margin-right: 2rem;
}

.images,
.video,
.presentation {
    margin-top: 1rem;
}

.presentation {
    position: relative;
    width: calc(100% - 1.5rem);
    transform: translateX(-1.5rem);
    overflow: hidden;
}

.presentation:has(.presentation-player.overlayed) {
    width: 100%;
    transform: none;
    overflow: visible;
}

.presentation:has(.pdf-image-frame) {
    width: auto;
    transform: none;
}

.section:has(.video) {
    width: 100%;
}

.section:has(.presentation) {
    width: 100%;
}

@media (max-width: 1200px) {

    .paragraph,
    .subheading,
    .bullet-container,
    .iconed-container,
    .quoted-container,
    .buttons,
    .images,
    .video,
    .presentation {
        margin-left: 0;
        margin-right: 0;
    }

    .quote-mark {
        width: 5.5rem;
    }

    .quote-open {
        left: -1.25rem;
    }

    .quote-close {
        right: -1.25rem;
    }

    .presentation {
        width: calc(100% + 3rem);
    }

    .presentation:has(.presentation-player.overlayed),
    .presentation:has(.pdf-image-frame) {
        width: 100%;
    }

    .collapsible {
        gap: 0.5rem;

        .arrow {
            font-size: 2rem;
        }
    }
}

@media (max-width: 600px) {

    .collapsible:hover {
        .arrow {
            color: var(--deep);
            transform: rotate(90deg);
        }
    }

    .collapsible:active {
        .arrow {
            color: var(--sky);
        }
    }
}
</style>