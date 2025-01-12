<template>
    <div>
        <h3>Links & Downloads</h3>
        <a v-for="link in links" :href="link.url" class="link hoverable" target="_blank" :key="link.text">
            <font-awesome-icon :icon="link.icon" fixed-width />
            {{ link.text }}
        </a>
        <a v-for="download in downloads" :href="download.url" class="download hoverable" download :key="download.text">
            <font-awesome-icon :icon="download.icon" fixed-width />
            {{ download.text }}
        </a>
    </div>
</template>

<script setup>
const props = defineProps({
    links: {
        type: Array,
        required: true
    },
    downloads: {
        type: Array,
        required: true
    }
})
</script>

<style scoped>
.link,
.download {
    position: relative;
    font-size: 1.2rem;
    font-weight: 400;
    color: white;
    background: transparent;
    padding: 0.5rem 1rem;
    margin-bottom: 0.5rem;
    width: 100%;
    display: flex;
    align-items: center;
    gap: 1rem;
    transition: font-weight 1s;
}

.link:hover,
.download:hover {
    color: white;
    font-weight: 700;
}

.link::before,
.download::before {
    position: absolute;
    content: "";
    inset: 0;
    background: linear-gradient(to right, var(--deep), var(--navy));
    z-index: -1;
    opacity: 0;
    transition: opacity 1s;
}

.download::before {
    background: linear-gradient(to right, rgba(var(--purple-rgb), 0.8), var(--navy));
}

.link:hover::before,
.download:hover::before {
    opacity: 1;
}

.link:active,
.download:active {
    color: white;
    background: linear-gradient(to right, var(--sky), var(--deep), var(--navy));
}

.download:active {
    background: linear-gradient(to right, rgba(var(--pink-rgb), 0.8), rgba(var(--purple-rgb), 0.8), var(--navy));
}

@media (max-width: 1200px) {

    .link,
    .download {
        font-size: 1.2rem;
        width: 40vw;
    }
}

@media (max-width: 600px) {

    .link,
    .download {
        width: 75vw;
    }
}
</style>