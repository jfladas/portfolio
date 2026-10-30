<template>
    <LiveCard v-if="game" :href="game.link" :active="playingNow" pulse :state="stateLabel" :title="game.name"
        :detail="currentLanguage === 'en' ? 'on Nintendo Switch 2' : 'auf der Nintendo Switch 2'">
        <template #media>
            <img v-if="game.image" :src="game.image" alt="" class="switch-cover" loading="lazy" />
        </template>
    </LiveCard>
</template>

<script setup>
import { computed, inject, onMounted, ref } from 'vue'
import LiveCard from '@/components/LiveCard.vue'

// preview: sample data instead of the live file, for the dev-only preview page (src/views/LiveCardsPreview.vue)
const props = defineProps({ preview: { type: Object, default: null } })

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
    if (props.preview) {
        data.value = props.preview
        return
    }

    try {
        const response = await fetch(`${DATA_URL}?t=${Date.now()}`, { cache: 'no-store' })
        if (response.ok) data.value = await response.json()
    } catch {
        // no data, no card
    }
})
</script>

<style scoped>
.switch-cover {
    height: 100%;
    aspect-ratio: 1 / 1;
    object-fit: cover;
    transform: scale(1.5);
    transition: transform 0.5s ease;
}

.live-card.hoverable:hover {
    .switch-cover {
        transform: scale(1.2);
    }
}
</style>
