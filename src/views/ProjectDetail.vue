<template>
    <div>
        <router-link to="/projects" class="hoverable">
            <font-awesome-icon icon="arrow-left-long" size="3x" class="icon" />
        </router-link>
        <h1>{{ project.name }}</h1>
        <h2>{{ project.description }}</h2>
        <ul>
            <li v-for="category in project.categories" :key="category">{{ category }}</li>
        </ul>
        <div v-html="project.text"></div>
        <div v-if="project.images.length">
            <h3>Images</h3>
            <img v-for="image in project.images" :src="image" :alt="project.name" :key="image" />
        </div>
        <div v-if="project.links.length">
            <h3>Links</h3>
            <ul>
                <li v-for="link in project.links" :key="link.url">
                    <a :href="link.url" target="_blank" class="hoverable">{{ link.name }}</a>
                </li>
            </ul>
        </div>
        <div v-if="project.downloads.length">
            <h3>Downloads</h3>
            <ul>
                <li v-for="download in project.downloads" :key="download.url">
                    <a :href="download.url" target="_blank" class="hoverable">{{ download.name }}</a>
                </li>
            </ul>
        </div>
    </div>
</template>

<script setup>
import { computed } from 'vue'
import { useRoute } from 'vue-router'
import { projects } from '@/data/projects.js'

const route = useRoute()
const project = computed(() => projects.find(p => p.id === route.params.id))
</script>