<template>
    <div v-show="isOverlayVisible" class="overlay">
        <div class="overlay-content">
            <div v-show="overlayType === 'images'" id="images-teleport"></div>
            <div v-show="overlayType === 'video'" id="video-teleport"></div>
        </div>
    </div>
    <div class="content">
        <div class="content-left">
            <router-link to="/projects" class="back hoverable tooltip" tooltip="back">
                <font-awesome-icon icon="arrow-left-long" />
            </router-link>
            <h1 class="title">{{ project.name }}</h1>
            <h2 class="subtitle">{{ project.description }}</h2>
            <div class="categories hoverable">
                <font-awesome-icon v-for="category in project.categories" :icon="categories[category]" :key="category"
                    class="category tooltip" :tooltip="category" />
            </div>
            <div class="context hoverable">
                <font-awesome-icon :icon="project.context.icon" class="context-icon tooltip"
                    :tooltip="project.context.tooltip" />
                <a :href="project.context.url" class="bold" target="_blank">
                    <p v-for="c in project.context.lines">{{ c }}</p>
                </a>
            </div>
            <div v-for="(section, index) in project.sections" :key="index" class="section">
                <p v-if="section.type === 'paragraph'" class="paragraph text">{{ section.text }}</p>
                <h3 v-if="section.type === 'heading'" class="heading">{{ section.text }}</h3>
                <h4 v-if="section.type === 'subheading'" class="subheading">{{ section.text }}</h4>
                <div v-if="section.type === 'bullet'" class="bullet-container">
                    <font-awesome-icon icon="minus" class="text-icon bullet" />
                    <p>{{ section.text }}</p>
                </div>
                <div v-if="section.type === 'iconed'" class="iconed-container">
                    <font-awesome-icon :icon="section.icon" fixed-width class="text-icon iconed" />
                    <p class="text">{{ section.text }}</p>
                </div>
                <div v-if="section.type === 'quoted'" class="quoted-container">
                    <p class="text quoted">
                        <font-awesome-icon icon="quote-left" class="quote-left" />
                        <span class="bottom-corner">
                            <font-awesome-icon icon="quote-right" class="quote-right" />
                        </span>
                        {{ section.text }}
                    </p>
                </div>
                <div v-if="section.type === 'buttons'" class="buttons">
                    <a v-for="button in section.buttons" :key="button.text" :href="button.action"
                        class="button-container" target="_blank">
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
            <div class="left-bottom">
                <router-link to="/projects" class="back hoverable tooltip" tooltip="back">
                    <font-awesome-icon icon="arrow-left-long" />
                </router-link>
                <router-link to="#" class="to-top hoverable tooltip" tooltip="to top" @click.prevent="scrollToTop">
                    <font-awesome-icon icon="angle-up" />
                </router-link>
            </div>
        </div>
        <div class="content-right">
            <div class="right-container">
                <h3>Links & Downloads</h3>
                <a v-for="link in project.links" :href="link.url" class="link hoverable" target="_blank">
                    <font-awesome-icon :icon="link.icon" />
                    {{ link.text }}
                </a>
                <a v-for="download in project.downloads" :href="download.url" class="download hoverable" download>
                    <font-awesome-icon :icon="download.icon" />
                    {{ download.text }}
                </a>
            </div>
        </div>
    </div>
</template>

<script setup>
import ImageCarousel from '@/components/ImageCarousel.vue'
import VideoPlayer from '@/components/VideoPlayer.vue'
import { categories } from '@/data/projects.js'
import { computed, ref, onMounted } from 'vue'
import { projects } from '@/data/projects.js'

const props = defineProps(['id'])

const isOverlayVisible = ref(false)
const overlayType = ref('')
const overlayIndex = ref(null)
const currentIndexes = ref([])

const project = computed(() => projects.find(p => p.id === props.id))

onMounted(() => {
    project.value.sections.forEach((section, index) => {
        if (section.type === 'images') {
            currentIndexes.value[index] = 0
        }
    })
})

const nextSlide = (index) => {
    currentIndexes.value[index] = (currentIndexes.value[index] + 1) % project.value.sections[index].images.length
}

const prevSlide = (index) => {
    currentIndexes.value[index] = (currentIndexes.value[index] - 1 + project.value.sections[index].images.length) % project.value.sections[index].images.length
}

const toggleOverlay = (type, index) => {
    overlayType.value = type
    overlayIndex.value = index
    isOverlayVisible.value = !isOverlayVisible.value
}

const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
}

</script>

<style scoped>
.subtitle {
    font-weight: 700;
    font-size: 2rem;
    color: var(--aqua);
}

.categories {
    font-size: 1.5rem;
    color: var(--aqua);
    height: 2rem;
    display: flex;
    gap: 1rem;
    list-style: none;
    padding: 1rem 0;
}

.context {
    display: flex;
    flex-direction: row;
    align-items: center;
    margin-bottom: 3rem;
}

.context-icon {
    font-size: 1.5rem;
    color: var(--mint);
    margin-right: 0.75rem;
}

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

.bullet {
    margin: 0.15rem 0.5rem 0 1rem;
    color: var(--aqua);
}

.iconed {
    margin: 0.1rem 0.5rem 0 0;
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
}

.images,
.video {
    margin-top: 1rem;
}

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

.close-button {
    position: absolute;
    top: 10px;
    right: 10px;
    background: none;
    border: none;
    color: white;
    font-size: 20px;
    cursor: pointer;
}

.full-screen-image {
    width: 100%;
    height: auto;
}

.left-bottom {
    position: relative;
    width: 100%;
    height: 6rem;
}

.back {
    position: absolute;
    transform: translate(-2rem, 1rem);
    color: var(--deep);
    transition: all 0.5s;
    display: flex;
    align-items: center;
    gap: 0.5rem;
    white-space: nowrap;
    font-size: 3rem;
}

.back:hover {
    transform: translate(-3rem, 1rem);
    color: var(--sky);
}

.back:active {
    color: var(--mint);
    transition: none;
}

.to-top {
    position: absolute;
    left: 50%;
    top: 100%;
    transform: translate(0, 0);
    color: var(--deep);
    transition: all 0.5s;
    font-size: 3rem;
}

.to-top:hover {
    transform: translate(0, -1rem);
    color: var(--sky);
}

.right-container {
    position: sticky;
    top: 6rem;
}
</style>