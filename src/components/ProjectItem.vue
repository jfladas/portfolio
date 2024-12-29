<template>
    <div class="project-item hoverable">
        <router-link :to="`/projects/${project.id}`">
            <h2>{{ project.name }}</h2>
            <p>{{ project.description }}</p>
            <p v-for="c in project.context">{{ c }}</p>
            <div class="project-icons">
                <div v-for="category in project.categories" class="tooltip" :tooltip="category" :key="category">
                    <font-awesome-icon :icon="categories[category]" />
                </div>
            </div>
        </router-link>
    </div>
</template>

<script setup>
import { RouterLink } from 'vue-router'
import { categories } from "@/data/projects.js";
defineProps({
    project: {
        type: Object,
        required: true
    }
})

</script>

<style scoped>
.project-item {
    padding: 0.5rem 1rem;
    background: linear-gradient(to right,
            var(--deep),
            rgba(var(--navy-rgb), 0));
}

.project-item h2 {
    font-family: "Funnel Display", sans-serif;
    font-size: 1.5rem;
    margin-bottom: 0.25rem;
    color: var(--navy);
    transition: all 0.5s;
}

.project-item p {
    font-size: 0;
    color: var(--deep);
    margin-bottom: 0;
    opacity: 0;
    transition: all 0.5s;
}

.project-item p:first-of-type {
    font-weight: 700;
}

.project-icons {
    color: var(--navy);
    display: flex;
    gap: 0.5rem;
    transition: all 0.5s;
}

.project-item:hover {
    padding: 1rem 1.5rem;
    background: linear-gradient(to right,
            var(--aqua),
            var(--mint),
            var(--sky),
            var(--deep),
            rgba(var(--navy-rgb), 0));

    h2 {
        font-size: 2.5rem;
        max-width: 60vw;
    }

    p {
        font-size: 1.5rem;
        opacity: 1;
        max-width: 50vw;
    }

    .project-icons {
        font-size: 1.5rem;
        color: var(--deep);
        margin-top: 1rem;
        gap: 1rem;
        max-width: 50vw;
    }
}

.project-item:active {
    background: linear-gradient(to right,
            white,
            var(--aqua),
            var(--mint),
            var(--sky),
            var(--deep),
            rgba(var(--navy-rgb), 0));
}
</style>