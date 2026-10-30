<template>
    <router-link :to="`/projects/${project.id}`">
        <div class="project-item hoverable">
            <div :id="project.id" class="anchor"></div>
            <h2>{{ project.name }}</h2>
            <div class="details">
                <div class="details-inner">
                    <p>{{ project.description }}</p>
                    <p v-for="c in project.context.lines">{{ c }}</p>
                </div>
            </div>
            <div class="project-icons">
                <div v-for="category in project.categories" class="tooltip" :tooltip="category" :key="category">
                    <font-awesome-icon :icon="categories[category]" />
                </div>
            </div>
        </div>
    </router-link>
</template>

<script setup>
import { RouterLink } from 'vue-router';
import { categories } from "@/data/projects.js";

// The .in-view highlight is set by ProjectsView, which tracks scrolling for the whole list.
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

.project-item {
    padding: 0.5rem 1rem;
    background: linear-gradient(to right,
            var(--sky),
            var(--deep),
            rgba(var(--navy-rgb), 0));
    transition: all 0.5s;

    h2 {
        font-family: "Funnel Display Variable", sans-serif;
        font-weight: 800;
        font-size: 1.5rem;
        margin-bottom: 0.25rem;
        color: var(--navy);
        transition: all 0.5s;
    }

    p {
        font-size: 0;
        color: transparent;
        margin-bottom: 0;
        opacity: 0;
        max-height: 0;
        max-width: 0vw;
        overflow: hidden;
        transition: all 0.5s;
    }

    p:first-of-type {
        font-weight: 700;
    }

    .project-icons {
        color: var(--navy);
        display: flex;
        gap: 0.5rem;
        transition: all 0.5s;
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

    p {
        max-width: 60vw;
    }
}

@media (max-width: 1200px) {

    /* the text is laid out at its final size the whole time and scaled up from the top left, which looks like the
       growing font size and width on wide screens: growing the text itself made some phones wrap it differently
       mid-way, then jump at the end. The box grows at the same pace as the scale, so nothing gets cut off */
    .project-item .details {
        display: grid;
        grid-template-rows: 0fr;
        overflow: hidden;
        transition: grid-template-rows 0.5s;
    }

    .project-item .details-inner {
        min-height: 0;
        transform: scale(0);
        transform-origin: top left;
        transition: transform 0.5s;
    }

    .project-item p {
        font-size: 1.25rem;
        color: var(--deep);
        max-width: 60vw;
        max-height: none;
        transition: opacity 0.5s;
    }

    /* the title's width grows in step with its font size (1.5rem to 2.5rem, up to 60vw), so it wraps the same
       way the whole time instead of breaking differently mid-way */
    .project-item h2 {
        max-width: calc(60vw * 1.5 / 2.5);
    }

    .project-item:hover {
        background: linear-gradient(to right,
                var(--sky),
                var(--deep),
                rgba(var(--navy-rgb), 0));
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

    .project-item.in-view {
        padding: 1rem 1.5rem;
        background: linear-gradient(to right,
                var(--aqua) 50%,
                var(--mint),
                var(--sky),
                var(--deep),
                rgba(var(--navy-rgb), 0));

        /* same sizes as the hover state on wide screens */
        h2 {
            font-size: 2.5rem;
            line-height: 2.5rem;
            max-width: 60vw;
        }

        .details {
            grid-template-rows: 1fr;
        }

        .details-inner {
            transform: none;
        }

        p {
            opacity: 1;
        }

        .project-icons {
            font-size: 1.25rem;
            color: var(--deep);
            margin-top: 0.5rem;
            gap: 0.75rem;
            max-width: 60vw;
        }
    }
}

@media (max-width: 600px) {

    /* same as above for the smaller expanded title (2rem) */
    .project-item h2 {
        max-width: calc(60vw * 1.5 / 2);
    }

    .project-item.in-view h2 {
        font-size: 2rem;
        line-height: 2rem;
    }
}

@media (min-width: 1200px) {
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
            line-height: 2.5rem;
            max-width: 60vw;
        }

        p {
            font-size: 1.25rem;
            color: var(--deep);
            opacity: 1;
            max-width: 50vw;
            max-height: 10rem;
            height: fit-content;
        }

        .project-icons {
            font-size: 1.25rem;
            color: var(--deep);
            margin-top: 0.5rem;
            gap: 0.75rem;
            max-width: 50vw;
        }
    }
}

@media (prefers-reduced-motion: reduce) {

    .project-item,
    .project-item h2,
    .project-item p,
    .project-item .details,
    .project-item .details-inner,
    .project-item .project-icons,
    .project-icons,
    .project-item:hover,
    .project-item:active,
    .project-item.in-view {
        transition: none;
    }
}
</style>