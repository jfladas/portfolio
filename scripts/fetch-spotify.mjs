// Saves what I'm listening to on Spotify to a JSON file: node scripts/fetch-spotify.mjs <output.json>
// Run by .github/workflows/spotify.yml (Cronitor). Needs SPOTIFY_CLIENT_ID, SPOTIFY_CLIENT_SECRET and
// SPOTIFY_REFRESH_TOKEN (repository secrets). The current track while one is playing, otherwise the last one played.
import fs from 'node:fs'

const [output] = process.argv.slice(2)

if (!output) {
    console.error('usage: node scripts/fetch-spotify.mjs <output.json>')
    process.exit(1)
}

const { SPOTIFY_CLIENT_ID, SPOTIFY_CLIENT_SECRET, SPOTIFY_REFRESH_TOKEN } = process.env

if (!SPOTIFY_CLIENT_ID || !SPOTIFY_CLIENT_SECRET || !SPOTIFY_REFRESH_TOKEN) {
    console.error('missing SPOTIFY_CLIENT_ID, SPOTIFY_CLIENT_SECRET or SPOTIFY_REFRESH_TOKEN')
    process.exit(1)
}

// on any problem keep the last good file instead of overwriting it
const request = async (label, url, options) => {
    const response = await fetch(url, { ...options, signal: AbortSignal.timeout(15000) })

    if (response.status === 204) return null

    const text = await response.text()

    if (!response.ok) {
        console.error(`${label} failed: ${response.status} ${text.slice(0, 250)}`)
        process.exit(1)
    }

    return JSON.parse(text)
}

const { access_token } = await request('token refresh', 'https://accounts.spotify.com/api/token', {
    method: 'POST',
    headers: {
        Authorization: `Basic ${Buffer.from(`${SPOTIFY_CLIENT_ID}:${SPOTIFY_CLIENT_SECRET}`).toString('base64')}`,
        'Content-Type': 'application/x-www-form-urlencoded'
    },
    body: new URLSearchParams({ grant_type: 'refresh_token', refresh_token: SPOTIFY_REFRESH_TOKEN })
})
const headers = { Authorization: `Bearer ${access_token}` }

const track = (item) => ({
    name: item.name,
    artist: item.artists?.[0]?.name ?? null,
    link: item.external_urls?.spotify ?? null,
    album_art: item.album?.images?.[0]?.url ?? null
})

// 204: nothing playing right now
const current = await request('currently playing', 'https://api.spotify.com/v1/me/player/currently-playing', { headers })
let data

if (current?.is_playing && current.item) {
    data = { status: 'online', item: track(current.item) }
} else {
    const recent = await request('recently played', 'https://api.spotify.com/v1/me/player/recently-played?limit=1', { headers })
    const last = recent?.items?.[0]?.track
    data = { status: 'offline', item: last ? track(last) : null }
}

fs.writeFileSync(output, JSON.stringify(data, null, 4) + '\n')
console.log(`saved ${data.status}: ${data.item?.name ?? 'nothing'} to ${output}`)
