<template>
    <component :is="game.link ? 'a' : 'section'" v-if="game" class="switch hoverable" :class="{ clickable: !!game.link }"
        :href="game.link || undefined" target="_blank" rel="noopener noreferrer">
        <img v-if="game.image" :src="game.image" alt="" class="switch-cover" loading="lazy" />
        <div class="switch-info">
            <div class="switch-state-row">
                <span class="switch-indicator" :class="{ online: playingNow }"></span>
                <p class="switch-state">{{ stateLabel }}</p>
            </div>
            <p class="switch-game">{{ game.name }}</p>
            <p class="switch-console">{{ currentLanguage === 'en' ? 'on Nintendo Switch 2' : 'auf der Nintendo Switch 2' }}</p>
        </div>
    </component>
</template>

<script setup>
import { computed, inject, onMounted, ref } from 'vue'

// written by .github/workflows/switch.yml (triggered by Cronitor); `npm run dev` reads a local copy (`npm run switch`)
const DATA_URL = import.meta.env.DEV
    ? '/switch.json'
    : 'https://raw.githubusercontent.com/jfladas/portfolio/switch-data/switch.json'
// "now playing" older than this means the updates stopped, so it's shown as "last played" instead
const STALE_AFTER = 60 * 60 * 1000

const currentLanguage = inject('currentLanguage')
const data = ref(null)

const playingNow = computed(() =>
    data.value?.status === 'playing' && Date.now() - Date.parse(data.value.checked) < STALE_AFTER
)
const game = computed(() => (playingNow.value ? data.value.game : data.value?.lastPlayed) ?? null)
const stateLabel = computed(() =>
    playingNow.value
        ? (currentLanguage.value === 'en' ? 'now playing' : 'spielt gerade')
        : (currentLanguage.value === 'en' ? 'last played' : 'zuletzt gespielt')
)

onMounted(async () => {
    try {
        const response = await fetch(`${DATA_URL}?t=${Date.now()}`, { cache: 'no-store' })
        if (response.ok) data.value = await response.json()
    } catch {
        // no data, no card
    }
})
</script>

<style scoped>
.switch {
    display: flex;
    align-items: center;
    gap: 2rem;
    height: 4rem;
    padding: 1rem;
    margin-bottom: 2rem;
    width: calc(100% - 2rem);
    color: var(--white);
    background: linear-gradient(to right, rgba(var(--deep-rgb), 0.5), var(--navy));
    text-decoration: none;
    transition: all 0.5s ease;
}

.switch.clickable:hover {
    gap: 1.2rem;
    background: linear-gradient(to right, rgba(var(--deep-rgb), 1), var(--navy));

    .switch-cover {
        transform: scale(1.2);
    }
}

.switch-cover {
    height: 100%;
    aspect-ratio: 1 / 1;
    object-fit: cover;
    transform: scale(1.5);
    transition: all 0.5s ease;
}

.switch-info {
    min-width: 0;
}

.switch-state-row {
    display: flex;
    align-items: center;
    gap: 0.5rem;
}

.switch-indicator {
    width: 0.5rem;
    height: 0.5rem;
    border-radius: 50%;
    background: rgba(var(--white-rgb), 0.25);
}

.switch-indicator.online {
    background: var(--pink);
    animation: blink 2s infinite;
}

@keyframes blink {

    0%,
    100% {
        opacity: 1;
    }

    50% {
        opacity: 0.5;
    }
}

.switch-state {
    color: var(--pink);
    font-size: 1rem;
    margin-bottom: 0.1rem;
}

.switch-game {
    font-family: "Funnel Display Variable", sans-serif;
    font-size: 1.2rem;
    font-weight: 700;
    line-height: 1.2;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
}

.switch-console {
    font-size: 1rem;
    color: var(--aqua);
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
}
</style>
