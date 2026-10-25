<template>
    <LiveCard v-if="loading" :message="currentLanguage === 'en' ? 'Loading Spotify...' : 'Spotify wird geladen...'" />
    <LiveCard v-else-if="error" :message="currentLanguage === 'en' ? 'Spotify data unavailable.' : 'Spotify-Daten nicht verfügbar.'" />
    <LiveCard v-else-if="trackName && artistName" :href="trackLink" :active="isOnline" pulse :state="statusLabel"
        :title="trackName" :detail="`${currentLanguage === 'en' ? 'by' : 'von'} ${artistName}`">
        <template #media>
            <img v-if="albumCover" :src="albumCover" alt="Album cover" class="spotify-cover" loading="lazy" />
        </template>
    </LiveCard>
    <LiveCard v-else :message="currentLanguage === 'en' ? 'No Spotify track data yet.' : 'Noch keine Spotify-Trackdaten.'" />
</template>

<script setup>
import { onMounted, ref, inject, computed } from 'vue'
import LiveCard from '@/components/LiveCard.vue'

// preview: sample data instead of the live file, for the dev-only preview page (src/views/LiveCardsPreview.vue);
// besides the file's contents it can be 'loading' or 'error'
const props = defineProps({ preview: { type: [Object, String], default: null } })

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
const spotifyDataUrl =
    import.meta.env.VITE_SPOTIFY_DATA_URL ??
    'https://raw.githubusercontent.com/jfladas/portfolio/spotify-data/spotify.json'

const buildCacheBustedUrl = (url) => {
    try {
        const finalUrl = new URL(url, window.location.href)
        finalUrl.searchParams.set('t', Date.now().toString())
        return finalUrl.toString()
    } catch {
        console.warn(`Unable to build URL via URL API for "${url}", using string fallback.`)
        const separator = url.includes('?') ? '&' : '?'
        return `${url}${separator}t=${Date.now()}`
    }
}

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
        let response = await fetch(buildCacheBustedUrl(spotifyDataUrl), { cache: 'no-store' })
        if (!response.ok) {
            console.warn(
                `Primary Spotify data fetch failed (${response.status} ${response.statusText}), using local fallback.`
            )
            response = await fetch(buildCacheBustedUrl('./spotify.json'), { cache: 'no-store' })
        }

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
    if (!props.preview) {
        loadSpotifyData()
    } else if (props.preview !== 'loading') {
        loading.value = false
        error.value = props.preview === 'error'
        if (!error.value) applySpotifyData(props.preview)
    }
})
</script>

<style scoped>
.spotify-cover {
    height: 100%;
    aspect-ratio: 1 / 1;
    object-fit: cover;
    transform: scale(1.5);
    transition: transform 0.5s ease;
}

.live-card.hoverable:hover .spotify-cover {
    transform: scale(1.2);
}
</style>
