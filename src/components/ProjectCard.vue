<template>
    <article class="project-card hoverable">
        <div :id="project.id" class="anchor"></div>
        <!-- invisible copy of the closed card that sets its height, so opening it on hover doesn't make it taller -->
        <div class="card-sizer" aria-hidden="true">
            <div class="cover-wrap"></div>
            <div class="card-body">
                <div class="title">{{ project.name }}</div>
                <div class="project-icons">
                    <div v-for="category in project.categories" :key="category">
                        <AppIcon :icon="categories[category]" />
                    </div>
                </div>
            </div>
        </div>
        <router-link :to="`/projects/${project.id}`">
            <div class="cover-wrap">
                <img v-if="project.cover" :src="project.cover" :alt="project.name" class="cover"
                    :loading="lazy ? 'lazy' : 'eager'" />
                <div v-else class="cover placeholder"></div>
            </div>
            <div class="card-body">
                <h2>{{ project.name }}</h2>
                <p class="description">{{ project.description }}</p>
                <div ref="iconRow" class="project-icons">
                    <div v-for="category in shownCategories" :key="category" class="tooltip" :tooltip="category">
                        <AppIcon :icon="categories[category]" />
                    </div>
                    <div v-if="hiddenCategories.length" class="tooltip" :tooltip="hiddenCategories.join(', ')">
                        <AppIcon icon="ellipsis" />
                    </div>
                </div>
            </div>
        </router-link>
    </article>
</template>

<script setup>
import { ref, computed, nextTick, onMounted, onUnmounted } from 'vue';
import { RouterLink } from 'vue-router';
import { categories } from "@/data/projects.js";

const props = defineProps({
    project: {
        type: Object,
        required: true
    },
    // off where the covers are preloaded anyway (projects page), so they show without a lazy-loading delay
    lazy: {
        type: Boolean,
        default: true
    }
});

// Category icons that don't fully fit on one line are swapped for a "more" icon (listing them in its tooltip).
// It takes the place of the first icon that doesn't fit, or the one before if it doesn't fit there either.
const iconRow = ref(null)
const shownIconCount = ref(props.project.categories.length)
const shownCategories = computed(() => props.project.categories.slice(0, shownIconCount.value))
const hiddenCategories = computed(() => props.project.categories.slice(shownIconCount.value))

const fitIcons = async () => {
    const row = iconRow.value

    // not laid out (e.g. hidden): nothing to measure, it runs again once the row gets a size
    if (!row?.clientWidth) {
        return
    }

    const lastIconOverflows = () => row.lastElementChild.getBoundingClientRect().right > row.getBoundingClientRect().right + 0.5

    // all of this runs before the next paint, so the steps in between never show
    shownIconCount.value = props.project.categories.length
    await nextTick()

    while (shownIconCount.value > 0 && lastIconOverflows()) {
        shownIconCount.value--
        await nextTick()
    }
}

// fires once right away and again whenever the card's width changes
const iconRowObserver = new ResizeObserver(fitIcons)

onMounted(() => {
    iconRowObserver.observe(iconRow.value)
})

onUnmounted(() => {
    iconRowObserver.disconnect()
})
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

    h2,
    .title {
        font-family: "Funnel Display Variable", sans-serif;
        font-weight: 800;
        font-size: 1.8rem;
        line-height: 1;
        margin-bottom: 0;
        padding-bottom: 0.25rem;
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
        font-size: 1rem;
        margin-top: 0.5rem;
        gap: 0.5rem;
        transition: all 0.5s;
    }

    .card-sizer {
        display: none;
    }
}

@media (min-width: 600px) {
    .project-card {
        position: relative;

        .card-sizer {
            display: block;
            visibility: hidden;
        }

        a {
            position: absolute;
            inset: 0;
            display: flex;
            flex-direction: column;

            .cover-wrap {
                flex: 1 1 0;
                min-height: 0;
                aspect-ratio: auto;
            }
        }
    }

    .project-card:hover {
        background: linear-gradient(to right,
                var(--aqua),
                var(--mint),
                var(--sky),
                var(--deep));

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