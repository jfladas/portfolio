<template>
    <div ref="projectItem" class="project-item hoverable">
        <div :id="project.id" class="anchor"></div>
        <router-link :to="`/projects/${project.id}`">
            <h2>{{ project.name }}</h2>
            <p>{{ project.description }}</p>
            <p v-for="c in project.context.lines">{{ c }}</p>
            <div class="project-icons">
                <div v-for="category in project.categories" class="tooltip" :tooltip="category" :key="category">
                    <font-awesome-icon :icon="categories[category]" />
                </div>
            </div>
        </router-link>
    </div>
</template>

<script setup>
import { onMounted, onUnmounted, ref } from 'vue';
import { RouterLink } from 'vue-router';
import { categories } from "@/data/projects.js";

const props = defineProps({
    project: {
        type: Object,
        required: true
    }
});

const projectItem = ref(null);

const handleScroll = () => {
    const projectItems = document.querySelectorAll('.project-item');
    let closestItem = null;
    let closestDistance = Infinity;

    projectItems.forEach(item => {
        const rect = item.getBoundingClientRect();
        const distance = Math.abs(rect.top);

        if (distance < closestDistance && rect.top >= window.innerHeight / 6) {
            closestDistance = distance;
            closestItem = item;
        }
    });

    projectItems.forEach(item => {
        item.classList.remove('in-view');
    });

    if (closestItem) {
        closestItem.classList.add('in-view');
    }
};

onMounted(() => {
    window.addEventListener('scroll', handleScroll);
    handleScroll();
});

onUnmounted(() => {
    window.removeEventListener('scroll', handleScroll);
});
</script>

<style scoped>
.anchor {
    position: relative;
    transform: translate(0, -12rem);
}

.project-item {
    padding: 0.5rem 1rem;
    background: linear-gradient(to right,
            var(--sky),
            var(--deep),
            rgba(var(--navy-rgb), 0));
    transition: all 0.5s;
}

.project-item h2 {
    font-family: "Funnel Display", sans-serif;
    font-weight: 800;
    font-size: 1.5rem;
    margin-bottom: 0.25rem;
    color: var(--navy);
    transition: all 0.5s;
}

.project-item p {
    font-size: 0;
    color: transparent;
    margin-bottom: 0;
    opacity: 0;
    max-height: 0;
    overflow: hidden;
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
        color: var(--deep);
        opacity: 1;
        max-width: 50vw;
        max-height: 10rem;
        height: fit-content;
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
            var(--white),
            var(--aqua),
            var(--mint),
            var(--sky),
            var(--deep),
            rgba(var(--navy-rgb), 0));
}

@media (max-width: 1200px) {
    .project-item p {
        max-width: 0vw;
    }

    .project-item h2 {
        line-height: 1.5rem;
        margin: 0.2rem 2rem 0.5rem 0;
    }

    .project-item:hover,
    .project-item.in-view {
        padding: 1rem 1.5rem;
        background: linear-gradient(to right,
                var(--aqua) 50%,
                var(--mint),
                var(--sky),
                var(--deep),
                rgba(var(--navy-rgb), 0));

        h2 {
            font-size: 2rem;
            line-height: 2rem;
            max-width: 60vw;
        }

        p {
            font-size: 1.2rem;
            color: var(--deep);
            opacity: 1;
            max-width: 60vw;
            max-height: 10rem;
            height: fit-content;
        }

        .project-icons {
            font-size: 1.2rem;
            color: var(--deep);
            margin-top: 0.8rem;
            gap: 0.8rem;
            max-width: 60vw;
        }
    }
}
</style>