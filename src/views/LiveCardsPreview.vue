<template>
    <!-- Dev-only page (npm run dev → /dev/live-cards): every live card on the about page in every state, with sample data -->
    <div class="preview">
        <h1>live cards</h1>
        <p class="note">Sample data, not the live files. Hover a card for its hover state. States where a card is
            hidden on the about page (no data, outdated) aren't listed.</p>
        <div class="columns">
            <section v-for="column in columns" :key="column.name" class="column" :style="{ width: column.width }">
                <h2>{{ column.name }}</h2>
                <div v-for="card in cards" :key="card.label" class="state">
                    <p class="label">{{ card.label }}</p>
                    <component :is="card.component" :preview="card.preview" />
                </div>
            </section>
        </div>
    </div>
</template>

<script setup>
import SpotifyStatus from '@/components/SpotifyStatus.vue'
import DuolingoStreak from '@/components/DuolingoStreak.vue'
import SwitchStatus from '@/components/SwitchStatus.vue'

const today = new Intl.DateTimeFormat('en-CA', { timeZone: 'Europe/Zurich' }).format(new Date())
const yesterday = new Intl.DateTimeFormat('en-CA', { timeZone: 'Europe/Zurich' }).format(new Date(Date.now() - 86400000))
const now = new Date().toISOString()

const track = {
    name: 'Kerosene',
    artist: 'NMIXX',
    link: 'https://open.spotify.com/track/42jwUTLbBKXTkyQRyxnJxn',
    album_art: 'https://i.scdn.co/image/ab67616d0000b273f6d5b4cb596df033b99759ea'
}
const game = {
    name: 'Mario Kart World',
    image: 'https://atum-img-lp1.cdn.nintendo.net/i/c/e1def375c7254d669bcd65ff10170151_1024',
    link: 'https://ec.nintendo.com/apps/0400c3f00006e000/CH'
}

const cards = [
    { label: 'Spotify · now playing', component: SpotifyStatus, preview: { status: 'online', item: track } },
    { label: 'Spotify · last played', component: SpotifyStatus, preview: { status: 'offline', item: track } },
    { label: 'Spotify · loading', component: SpotifyStatus, preview: 'loading' },
    { label: 'Spotify · data unavailable', component: SpotifyStatus, preview: 'error' },
    { label: 'Spotify · no track yet', component: SpotifyStatus, preview: { status: 'offline', item: {} } },
    { label: 'Duolingo · practiced today', component: DuolingoStreak, preview: { username: 'jfladas', streak: 2017, lastPracticed: today } },
    { label: 'Duolingo · not practiced yet today', component: DuolingoStreak, preview: { username: 'jfladas', streak: 2016, lastPracticed: yesterday } },
    { label: 'Switch · now playing', component: SwitchStatus, preview: { checked: now, status: 'playing', game, lastPlayed: { ...game, at: now } } },
    { label: 'Switch · last played', component: SwitchStatus, preview: { checked: now, status: 'offline', game: null, lastPlayed: { ...game, at: now } } }
]

// the about page's right column on wide screens, and a phone
const columns = [
    { name: 'about column (30vw)', width: '30vw' },
    { name: 'phone (358px)', width: '358px' }
]
</script>

<style scoped>
.preview {
    padding: 6rem 5%;
}

.note {
    color: var(--aqua);
    margin-bottom: 3rem;
    max-width: 60ch;
}

.columns {
    display: flex;
    flex-wrap: wrap;
    gap: 4rem;
    align-items: flex-start;
}

.column {
    flex: none;
    max-width: 100%;
}

.column h2 {
    margin-bottom: 2rem;
}

.label {
    font-family: "JetBrains Mono Variable", monospace;
    font-size: 0.8rem;
    color: var(--sky);
    margin-bottom: 0.5rem;
}
</style>
