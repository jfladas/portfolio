<template>
    <FullOverlay :isOverlayVisible="isOverlayVisible" :overlayType="overlayType" />
    <div class="content">
        <div v-if="project" class="content-left">
            <router-link :to="`/projects#${project.id}`" class="back hoverable tooltip"
                :tooltip="currentLanguage === 'en' ? 'back' : 'zurück'">
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
            <ContentSections :sections="project.sections" :currentIndexes="currentIndexes"
                :isOverlayVisible="isOverlayVisible" :overlayIndex="overlayIndex" @toggle-overlay="toggleOverlay"
                @next-slide="nextSlide" @prev-slide="prevSlide" />
            <div class="left-bottom">
                <router-link :to="`/projects#${project.id}`" class="back hoverable tooltip"
                    :tooltip="currentLanguage === 'en' ? 'back' : 'zurück'">
                    <font-awesome-icon icon="arrow-left-long" />
                </router-link>
                <router-link to="#" class="to-top hoverable tooltip"
                    :tooltip="currentLanguage === 'en' ? 'to top' : 'rauf'" @click.prevent="scrollToTop">
                    <font-awesome-icon icon="angle-up" />
                </router-link>
            </div>
        </div>
        <div v-else class="disclaimer">
            <h3>
                project not found
                <font-awesome-icon icon="face-frown-open" />
            </h3>
            <p>please check the project id or try again later</p>
            <div class="left-bottom">
                <router-link :to="`/projects`" class="back hoverable tooltip"
                    :tooltip="currentLanguage === 'en' ? 'back' : 'zurück'">
                    <font-awesome-icon icon="arrow-left-long" />
                </router-link>
            </div>
        </div>
        <div v-if="project" class="content-right">
            <div class="right-container">
                <LinksDownloads :links="project.links" :downloads="project.downloads" />
            </div>
        </div>
    </div>
</template>

<script setup>
import { computed, ref, onMounted, inject } from 'vue'
import { projects as enProjects, categories } from '@/data/projects.js'
import { projekte as deProjects } from '@/data/projekte.js'
import ContentSections from '@/components/ContentSections.vue'
import LinksDownloads from '@/components/LinksDownloads.vue'
import FullOverlay from '@/components/FullOverlay.vue'

const props = defineProps(['id'])
const currentLanguage = inject('currentLanguage')

const isOverlayVisible = ref(false)
const overlayType = ref('')
const overlayIndex = ref(null)
const currentIndexes = ref([])

const projects = computed(() => currentLanguage.value === 'en' ? enProjects : deProjects)

const project = computed(() => projects.value.find(p => p.id === props.id))

onMounted(() => {
    if (project.value) {
        project.value.sections.forEach((section, index) => {
            if (section.type === 'images') {
                currentIndexes.value[index] = 0
            }
        })
    }
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
    transform: translate(-50%, 0);
    color: var(--deep);
    transition: all 0.5s;
    font-size: 3rem;
}

.to-top:hover {
    transform: translate(-50%, -1rem);
    color: var(--sky);
}

@media (max-width: 1200px) {

    .categories {
        font-size: 1.2rem;
        gap: 0.7rem;
    }

    .back {
        transform: translate(-1.5rem, 0.5rem);
    }

    .back:hover {
        transform: translate(-1.5rem, 0.5rem);
    }

    .to-top {
        transform: translate(-50%, -4rem);
    }

    .to-top:hover {
        transform: translate(-50%, -5rem);
    }
}
</style>