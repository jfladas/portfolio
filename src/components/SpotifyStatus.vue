<template>
    <component :is="trackLink ? 'a' : 'section'" class="spotify hoverable" :class="{ clickable: !!trackLink }"
        :href="trackLink || undefined" target="_blank" rel="noopener noreferrer">

        <p v-if="loading" class="spotify-message">
            {{ currentLanguage === 'en' ? 'Loading Spotify...' : 'Spotify wird geladen...' }}</p>

        <p v-else-if="error" class="spotify-message">
            {{ currentLanguage === 'en' ? 'Spotify data unavailable.' : 'Spotify-Daten nicht verfügbar.' }}</p>

        <div v-else-if="trackName && artistName" class="spotify-track-wrap">
            <img v-if="albumCover" :src="albumCover" alt="Album cover" class="spotify-cover" loading="lazy" />
            <div class="spotify-info">
                <div class="spotify-state-row">
                    <span class="spotify-indicator" :class="{ online: isOnline }"></span>
                    <p class="spotify-state">{{ statusLabel }}</p>
                </div>
                <p class="spotify-track">{{ trackName }}</p>
                <p class="spotify-artist">{{ currentLanguage === 'en' ? 'by' : 'von' }} {{ artistName }}</p>
            </div>
        </div>

        <p v-else class="spotify-message">
            {{ currentLanguage === 'en' ? 'No Spotify track data yet.' : 'Noch keine Spotify-Trackdaten.' }}</p>
    </component>
</template>

<script setup>
import { onMounted, ref, inject, computed } from 'vue'

const currentLanguage = inject('currentLanguage')
const loading = ref(true)
const error = ref(false)
const isOnline = ref(false)

const statusLabel = computed(() =>
    isOnline.value
        ? (currentLanguage.value === 'en' ? 'now playing' : 'aktuell spielt')
        : (currentLanguage.value === 'en' ? 'last played' : 'zuletzt gespielt')
)
const trackName = ref('')
const artistName = ref('')
const trackLink = ref('')
const albumCover = ref('')

const applySpotifyData = (data) => {
    const item = data?.item ?? {}

    isOnline.value = data?.status === 'online'
    trackName.value = item?.name ?? ''
    artistName.value = item?.artists?.[0]?.name ?? item?.artist ?? ''
    trackLink.value = item?.external_urls?.spotify ?? item?.link ?? ''
    albumCover.value = item?.album?.images?.[0]?.url ?? item?.album_art ?? ''
}

const loadSpotifyData = async () => {
    loading.value = true
    error.value = false

    try {
        const response = await fetch('./spotify.json?t=' + Date.now())

        if (!response.ok) {
            throw new Error('Spotify response was not ok')
        }

        const data = await response.json()
        applySpotifyData(data)
    } catch {
        error.value = true
    } finally {
        loading.value = false
    }
}

onMounted(() => {
    loadSpotifyData()
})
</script>

<style scoped>
.spotify {
    display: block;
    padding: 1rem;
    width: calc(100% - 2rem);
    color: var(--white);
    background: linear-gradient(to right, rgba(var(--deep-rgb), 0.5), var(--navy));
    transition: all 0.5s ease;
    text-decoration: none;
}

.spotify.clickable {
    cursor: pointer;
}

.spotify.clickable:hover {
    background: linear-gradient(to right, rgba(var(--deep-rgb), 1), var(--navy));

    .spotify-cover {
        transform: scale(1.2);
    }

    .spotify-track-wrap {
        gap: 1.2rem;
    }
}

.spotify-state-row {
    display: flex;
    align-items: center;
    gap: 0.5rem;
}

.spotify-track-wrap {
    display: flex;
    align-items: center;
    gap: 2rem;
    height: 4rem;
    transition: all 0.5s ease;
}

.spotify-info {
    min-width: 0;
}

.spotify-cover {
    height: 100%;
    aspect-ratio: 1 / 1;
    object-fit: cover;
    transform: scale(1.5);
    transition: all 0.5s ease;
}

.spotify-indicator {
    width: 0.5rem;
    height: 0.5rem;
    border-radius: 50%;
    background: rgba(var(--white-rgb), 0.25);
}

.spotify-indicator.online {
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

.spotify-state {
    color: var(--pink);
    font-size: 1rem;
    font-weight: 400;
    margin-bottom: 0.1rem;
}

.spotify-track {
    font-family: "Funnel Display", sans-serif;
    font-size: 1.2rem;
    font-weight: 700;
    line-height: 1.2;
    color: var(--white);
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
}

.spotify-artist,
.spotify-message {
    font-size: 1rem;
    color: var(--aqua);
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
}
</style>
