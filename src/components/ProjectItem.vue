<template>
    <div class="project-item">
        <RouterLink :to="`/projects/${project.id}`">
            <h2>{{ project.name }}</h2>
            <p>{{ project.description }}</p>
            <font-awesome-icon v-for="category in project.categories" :icon="categoryIcons[category]" :key="category" />
        </RouterLink>
    </div>
</template>

<script setup>
import { RouterLink } from 'vue-router'
defineProps({
    project: {
        type: Object,
        required: true
    }
})

const categoryIcons = {
    'solo': 'user',
    'team': 'users',
    'web': 'globe',
    'game': 'gamepad',
    'ux': 'circle-user',
    'design': 'pen-nib',
    'story': 'scroll',
    '3d': 'cube',
    'video': 'video',
}
</script>

<style scoped>
.project-item {
    margin-bottom: 1rem;
}
</style>