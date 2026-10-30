<template>
    <component :is="href ? 'a' : 'section'" class="live-card"
        :class="{ active, pulse: active && pulse, hoverable: !!href }" :href="href || undefined" target="_blank"
        rel="noopener noreferrer">
        <p v-if="message" class="live-message">{{ message }}</p>
        <template v-else>
            <slot name="media" />
            <div class="live-info">
                <p class="live-state">{{ state }}</p>
                <p class="live-title">{{ title }}</p>
                <p class="live-detail">{{ detail }}</p>
            </div>
        </template>
    </component>
</template>

<script setup>
// Shared card for the live data on the about page (Spotify, Duolingo, Switch).
// active: playing / practiced today (pink), otherwise last played / not yet (purple); pulse: glows while active.
defineProps({
    href: { type: String, default: '' },
    active: { type: Boolean, default: false },
    pulse: { type: Boolean, default: false },
    state: { type: String, default: '' },
    title: { type: String, default: '' },
    detail: { type: String, default: '' },
    message: { type: String, default: '' }
})
</script>

<style scoped>
@property --live-alpha {
    syntax: '<number>';
    inherits: false;
    initial-value: 0.4;
}

.live-card {
    --live-alpha: 0.4;
    display: flex;
    align-items: center;
    gap: 2rem;
    height: 4rem;
    padding: 1rem;
    margin-bottom: 2rem;
    width: calc(100% - 2rem);
    color: var(--white);
    text-decoration: none;
    background: linear-gradient(to right, rgba(var(--deep-rgb), var(--live-alpha)), var(--navy));
    transition: --live-alpha 0.5s ease, gap 0.5s ease;
}

.live-card.active {
    background: linear-gradient(to right,
            rgba(var(--purple-rgb), var(--live-alpha)),
            var(--navy));
}

.live-card.pulse {
    animation: live-pulse 3s ease-in-out infinite;
}

.live-card.hoverable:hover {
    --live-alpha: 1;
    gap: 1.2rem;
    animation: none;
}

@keyframes live-pulse {
    50% {
        --live-alpha: 0.7;
    }
}

.live-info {
    min-width: 0;
}

.live-state {
    color: var(--sky);
    font-size: 1rem;
    font-weight: 500;
}

.active {
    .live-state {
        color: var(--pink);
    }
}

.live-title {
    font-family: "Funnel Display Variable", sans-serif;
    font-size: 1.2rem;
    font-weight: 700;
    line-height: 1.2;
}

.live-detail,
.live-message {
    font-size: 1rem;
    color: var(--aqua);
}

.live-title,
.live-detail,
.live-message {
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
}

@media (prefers-reduced-motion: reduce) {
    .live-card.pulse {
        animation: none;
    }
}
</style>
