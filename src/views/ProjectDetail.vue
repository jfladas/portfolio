<template>
    <FullOverlay :isOverlayVisible="isOverlayVisible" :overlayType="overlayType" />
    <div class="content">
        <div v-if="project" class="content-left">
            <router-link :to="`/projects#${project.id}`" class="back hoverable tooltip"
                :tooltip="currentLanguage === 'en' ? 'back' : 'zurück'">
                <font-awesome-icon icon="arrow-left-long" />
            </router-link>
            <div v-if="showWipBanner" class="banner">
                <div ref="bannerViewportRef" class="banner-viewport">
                    <div ref="bannerTrackRef" class="banner-track jap"
                        :style="{ transform: `translateX(${bannerOffset}px)` }">
                        <span v-for="(item, index) in renderedBannerItems" :key="`${item}-${index}`"
                            class="banner-item">{{ item }}</span>
                    </div>
                </div>
            </div>
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
import { computed, ref, onMounted, onBeforeUnmount, nextTick, inject } from 'vue'
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
const bannerViewportRef = ref(null)
const bannerTrackRef = ref(null)
const cycleBannerItems = ref([])
const bannerOffset = ref(0)

const wipTranslations = ['work in progress', 'in Entwicklung', '作業中']
const bannerSpeed = 75
let bannerRafId = null
let bannerLastTimestamp = 0
let bannerCycleWidth = 0

const renderedBannerItems = computed(() => [...cycleBannerItems.value, ...cycleBannerItems.value])

const projects = computed(() => currentLanguage.value === 'en' ? enProjects : deProjects)

const project = computed(() => projects.value.find(p => p.id === props.id))
const showWipBanner = computed(() => project.value && ['bachelor', 'had'].includes(project.value.id))

onMounted(() => {
    if (project.value) {
        project.value.sections.forEach((section, index) => {
            if (section.type === 'images') {
                currentIndexes.value[index] = 0
            }
        })
    }

    if (showWipBanner.value) {
        setupBannerTicker()
        window.addEventListener('resize', setupBannerTicker)
    }
})

onBeforeUnmount(() => {
    stopBannerTicker()
    window.removeEventListener('resize', setupBannerTicker)
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

const stopBannerTicker = () => {
    if (bannerRafId) {
        cancelAnimationFrame(bannerRafId)
        bannerRafId = null
    }
}

const animateBanner = (timestamp) => {
    if (!bannerCycleWidth) {
        bannerRafId = requestAnimationFrame(animateBanner)
        return
    }

    if (!bannerLastTimestamp) {
        bannerLastTimestamp = timestamp
    }

    const deltaSeconds = (timestamp - bannerLastTimestamp) / 1000
    bannerLastTimestamp = timestamp
    bannerOffset.value -= bannerSpeed * deltaSeconds

    if (Math.abs(bannerOffset.value) >= bannerCycleWidth) {
        bannerOffset.value += bannerCycleWidth
    }

    bannerRafId = requestAnimationFrame(animateBanner)
}

const setupBannerTicker = async () => {
    stopBannerTicker()
    bannerLastTimestamp = 0
    bannerOffset.value = 0

    if (!bannerViewportRef.value || !showWipBanner.value) {
        return
    }

    cycleBannerItems.value = [...wipTranslations]
    await nextTick()

    const viewportWidth = bannerViewportRef.value.clientWidth
    let safety = 0

    while (bannerTrackRef.value && bannerTrackRef.value.scrollWidth / 2 < viewportWidth && safety < 20) {
        cycleBannerItems.value = [...cycleBannerItems.value, ...wipTranslations]
        await nextTick()
        safety += 1
    }

    bannerCycleWidth = bannerTrackRef.value ? bannerTrackRef.value.scrollWidth / 2 : 0
    bannerRafId = requestAnimationFrame(animateBanner)
}
</script>

<style scoped>
.banner {
    z-index: 10;
    position: fixed;
    top: 4.5rem;
    left: 0;
    right: 0;
    user-select: none;
    background: linear-gradient(60deg,
            var(--purple) 30%,
            var(--pink) 45%,
            var(--white) 50%,
            var(--pink) 55%,
            var(--purple) 70%);
    background-size: 400% 400%;
    animation: shine 5s ease infinite;
}

@keyframes shine {

    0%,
    100% {
        background-position: 100% 50%
    }

    100% {
        background-position: 0% 50%
    }
}

.banner-viewport {
    overflow: hidden;
}

.banner-track {
    display: flex;
    width: max-content;
    align-items: center;
    will-change: transform;
}

.banner-item {
    flex: 0 0 auto;
    white-space: nowrap;
    margin-right: 4rem;
    font-size: 1.5rem;
    color: var(--white);
    padding: 0.1rem 0 0.2rem 0;
}

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

@media (max-width: 600px) {
    .banner {
        top: 3.5rem;
    }

    .banner-item {
        font-size: 1.2rem;
        padding: 0.1rem 0 0.1rem 0;
    }
}
</style>