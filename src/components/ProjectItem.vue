<template>
    <div class="project-item">
        <RouterLink :to="`/projects/${project.id}`">
            <h2>{{ project.name }}</h2>
            <p>{{ project.description }}</p>
            <ul>
                <li v-for="category in project.categories" :key="category">{{ category }}</li>
            </ul>
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
</script>

<style scoped>
.project-item {
    margin-bottom: 1rem;
}
</style>