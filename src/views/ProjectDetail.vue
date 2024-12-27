<template>
    <div class="content">
        <div class="content-left">
            <router-link to="/projects" class="back hoverable">
                <font-awesome-icon icon="arrow-left-long" size="3x" class="icon" />
            </router-link>
            <h1 class="title">{{ project.name }}</h1>
            <h2 class="subtitle">{{ project.description }}</h2>
            <div class="categories hoverable">
                <font-awesome-icon v-for="category in project.categories" :icon="categories[category]" :key="category"
                    class="category tooltip" :tooltip="category" />
            </div>
            <div v-for="section in project.sections" :key="section.title">
                <p v-if="section.type === 'paragraph'">{{ section.text }}</p>
                <h3 v-if="section.type === 'heading'">{{ section.text }}</h3>
                <div v-if="section.type === 'quoted'" class="quoted-container">
                    <p class="text quoted">
                        <font-awesome-icon icon="quote-left" class="quote-left" />
                        <span class="bottom-corner">
                            <font-awesome-icon icon="quote-right" class="quote-right" />
                        </span>
                        {{ section.text }}
                    </p>
                </div>
            </div>
        </div>
        <div class="content-right">
            <h3>links & downloads</h3>
            <a v-for="link in project.links" :href="link.url" class="link hoverable" target="_blank">
                <font-awesome-icon :icon="link.icon" />
                {{ link.text }}
            </a>
            <a v-for="download in project.downloads" :href="download.url" class="download hoverable" target="_blank">
                <font-awesome-icon :icon="download.icon" />
                {{ download.text }}
            </a>
        </div>
    </div>
</template>

<script setup>
import { categories } from '@/data/projects.js'
import { computed } from 'vue'
import { useRoute } from 'vue-router'
import { projects } from '@/data/projects.js'

const route = useRoute()
const project = computed(() => projects.find(p => p.id === route.params.id))
</script>

<style scoped>
.back {
    position: absolute;
    transform: translate(-2rem, 1rem);
    color: var(--deep);
    transition: all 0.5s;
}

.back:hover {
    transform: translate(-3rem, 1rem);
    color: var(--sky);
}

.back:active {
    color: var(--mint);
    transition: none;
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

.images {
    margin-top: 2rem;
}

.project-image {
    width: 100%;
    max-width: 600px;
    margin-bottom: 1rem;
}

.links,
.downloads {
    margin-top: 2rem;
}
</style>