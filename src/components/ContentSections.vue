<template>
    <div>
        <div v-for="(section, index) in sections" :key="index" class="section">
            <p v-if="section.type === 'paragraph'" class="paragraph text" v-html="section.text"></p>
            <h3 v-if="section.type === 'heading'" class="heading">{{ section.text }}</h3>
            <h4 v-if="section.type === 'subheading'" class="subheading">{{ section.text }}</h4>
            <div v-if="section.type === 'bullet'" class="bullet-container">
                <font-awesome-icon icon="minus" class="text-icon bullet" />
                <p v-html="section.text"></p>
            </div>
            <div v-if="section.type === 'iconed'" class="iconed-container">
                <font-awesome-icon :icon="section.icon" fixed-width class="text-icon iconed" />
                <p class="text" v-html="section.text"></p>
            </div>
            <div v-if="section.type === 'quoted'" class="quoted-container">
                <p class="text quoted">
                    <font-awesome-icon icon="quote-left" class="quote-left" />
                    <span class="bottom-corner">
                        <font-awesome-icon icon="quote-right" class="quote-right" />
                    </span>
                <div v-html="section.text"></div>
                </p>
            </div>
            <div v-if="section.type === 'buttons'" class="buttons">
                <a v-for="button in section.buttons" :key="button.text" :href="button.action" class="button-container"
                    target="_blank">
                    <button class="hoverable" :class="'button-' + button.color">
                        {{ button.text }}
                        <font-awesome-icon :icon="button.icon" />
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
                <VideoPlayer :video="section.video" :isOverlayVisible="isOverlayVisible && overlayIndex === index"
                    @toggle-overlay="toggleOverlay('video', index)" />
            </div>
        </div>
    </div>
</template>

<script setup>
import { ref } from 'vue'
import ImageCarousel from '@/components/ImageCarousel.vue'
import VideoPlayer from '@/components/VideoPlayer.vue'

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
.paragraph {
    margin-top: 0.5rem;
}

.bullet-container {
    display: flex;
    margin-top: 0.5rem;
    text-align: left;
}

.iconed-container {
    display: flex;
    margin-top: 0.5rem;
}

.iconed-container .text {
    font-weight: 700;
    color: var(--mint);
}

.bullet {
    margin: 0.15rem 0.5rem 0 1rem;
    color: var(--aqua);
}

.iconed {
    margin: 0.1rem 0.5rem 0 0;
}

.quoted-container {
    display: flex;
}

.quoted {
    height: auto;
}

.quote-left {
    font-size: 2.5rem;
    color: var(--sky);
    margin: 0 0.5rem 0 -0.5rem;
    float: left;
}

.quote-right {
    font-size: 2.5rem;
    color: var(--sky);
    margin: 0 -0.5rem 0 0.5rem;
}

.bottom-corner {
    float: right;
    height: 100%;
    display: flex;
    align-items: flex-end;
    shape-outside: inset(calc(100% - 2.5rem) 0 0);
}

.paragraph,
.subheading,
.bullet-container,
.iconed-container,
.quoted-container,
.buttons,
.images,
.video {
    margin-left: 2rem;
    margin-right: 2rem;
}

.images,
.video {
    margin-top: 1rem;
}

@media (max-width: 1200px) {

    .paragraph,
    .subheading,
    .bullet-container,
    .iconed-container,
    .quoted-container,
    .buttons,
    .images,
    .video {
        margin-left: 0;
        margin-right: 0;
    }
}
</style>