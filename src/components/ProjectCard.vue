<template>
    <article class="project-card hoverable">
        <div :id="project.id" class="anchor"></div>
        <router-link :to="`/projects/${project.id}`">
            <div class="cover-wrap">
                <img v-if="project.cover" :src="project.cover" :alt="project.name" class="cover" loading="lazy" />
                <div v-else class="cover placeholder"></div>
            </div>
            <div class="card-body">
                <h2>{{ project.name }}</h2>
                <p class="description">{{ project.description }}</p>
                <div class="project-icons">
                    <div v-for="category in project.categories" :key="category" class="tooltip" :tooltip="category">
                        <font-awesome-icon :icon="categories[category]" />
                    </div>
                </div>
            </div>
        </router-link>
    </article>
</template>

<script setup>
import { RouterLink } from 'vue-router';
import { categories } from "@/data/projects.js";

const props = defineProps({
    project: {
        type: Object,
        required: true
    }
});
</script>

<style scoped>
.anchor {
    position: relative;
    transform: translate(0, -12rem);
}

.project-card {
    background: linear-gradient(to right,
            var(--sky),
            var(--deep)75%,
            rgba(var(--deep-rgb), 0.5));
    overflow: hidden;
    transition: all 0.5s;
    display: flex;
    flex-direction: column;

    a {
        display: block;
        height: 100%;
    }

    h2 {
        font-family: "Funnel Display", sans-serif;
        font-weight: 800;
        font-size: 1.8rem;
        line-height: 1;
        margin-bottom: 0.25rem;
        color: var(--navy);
        transition: all 0.5s;
    }

    p {
        font-size: 0;
        font-weight: 700;
        color: transparent;
        margin-bottom: 0;
        opacity: 0;
        max-height: 0;
        max-width: 0;
        overflow: hidden;
        transition: all 0.5s;
    }

    .cover-wrap {
        width: 100%;
        aspect-ratio: 4 / 3;
        overflow: hidden;
        transition: aspect-ratio 0.5s ease;
    }

    .cover {
        width: 100%;
        height: 100%;
        margin: 0;
        object-fit: cover;
        transition: all 0.5s;
    }

    .cover.placeholder {
        background: linear-gradient(to right, var(--white), var(--pink), var(--purple));
    }

    .card-body {
        padding: 0.5rem 1rem 0.8rem 1rem;
        overflow: hidden;
    }

    .project-icons {
        color: var(--navy);
        display: flex;
        font-size: 1.2rem;
        margin-top: 0.5rem;
        gap: 0.5rem;
        transition: all 0.5s;
    }
}

@media (min-width: 600px) {

    .project-card:hover {
        background: linear-gradient(to right,
                var(--aqua),
                var(--mint),
                var(--sky),
                var(--deep));

        .cover-wrap {
            aspect-ratio: 16 / 10;
        }

        p {
            font-size: 1.2rem;
            color: var(--deep);
            opacity: 1;
            max-width: 90%;
            max-height: 10rem;
            height: fit-content;
        }

        .project-icons {
            color: var(--deep);
            max-width: 50vw;
        }

        .cover {
            width: calc(100% - 2rem);
            height: calc(100% - 2rem);
            margin: 1rem;
        }

        .description {
            overflow: visible;
        }
    }
}

@media (max-width: 600px) {
    .project-card {
        background: linear-gradient(to right,
                var(--aqua),
                var(--mint),
                var(--sky),
                var(--deep));

        .cover-wrap {
            aspect-ratio: 16 / 10;
        }

        p {
            font-size: 1.2rem;
            color: var(--deep);
            opacity: 1;
            max-width: 90%;
            max-height: 10rem;
            height: fit-content;
        }

        .project-icons {
            color: var(--deep);
            max-width: 50vw;
            font-size: 1rem;
        }

        .cover-wrap {
            aspect-ratio: 4 / 3;
        }

        .cover {
            width: 100%;
            height: 100%;
        }

        h2 {
            font-size: 1.5rem;
            max-width: 100%;
            text-overflow: ellipsis;
            overflow: hidden;
        }

        .description {
            font-size: 1rem;
        }
    }
}
</style>