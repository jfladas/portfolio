// Saves what I'm playing on the Switch to a JSON file: node scripts/fetch-switch.mjs <friend-nsa-id> <file.json>
// Run by .github/workflows/switch.yml. nxapi logs in to the Nintendo Switch Online app API as a second account that
// is friends with mine and reads my presence from its friend list. Unofficial: it can break with app updates.
// The session token of the second account comes from NA_SESSION_TOKEN; without it nxapi uses its locally saved login.
// The file keeps the last game that was seen being played, so "last played" survives turning the console off.
import { execFileSync } from 'node:child_process'
import fs from 'node:fs'

const [friendId, file] = process.argv.slice(2)

if (!friendId || !file) {
    console.error('usage: node scripts/fetch-switch.mjs <friend-nsa-id> <file.json>')
    process.exit(1)
}

const args = ['nso', 'friends', '--json']
if (process.env.NA_SESSION_TOKEN) args.push('--token', process.env.NA_SESSION_TOKEN)
if (process.env.NXAPI_DATA_PATH) args.push('--data-path', process.env.NXAPI_DATA_PATH)

let friends

try {
    const output = execFileSync('nxapi', args, {
        encoding: 'utf8',
        shell: process.platform === 'win32', // nxapi is a .cmd file there
        env: {
            ...process.env,
            NXAPI_USER_AGENT: 'jfladas-portfolio/1.0 (+https://www.jfladas.com)',
            NXAPI_SKIP_UPDATE_CHECK: '1',
            NXAPI_DEBUG_FILE: '0'
        }
    })
    friends = JSON.parse(output)
} catch (error) {
    // keep the last good file instead of overwriting it
    console.error(`nxapi failed: ${error.message}`)
    process.exit(1)
}

const presence = friends.find((friend) => friend.nsaId === friendId)?.presence

if (!presence) {
    console.error('friend not found in the friend list')
    process.exit(1)
}

let previous = {}
try {
    previous = JSON.parse(fs.readFileSync(file, 'utf8'))
} catch {
    // first run
}

const playing = ['ONLINE', 'PLAYING'].includes(presence.state) && presence.game?.name
const game = playing
    ? { name: presence.game.name, image: presence.game.imageUri, link: presence.game.shopUri }
    : null
const now = new Date().toISOString()

const data = {
    checked: now,
    // playing: in a game, online: console on but no game open, offline: console off or not connected
    status: playing ? 'playing' : presence.state === 'OFFLINE' ? 'offline' : 'online',
    game,
    lastPlayed: game ? { ...game, at: now } : previous.lastPlayed ?? null
}

fs.writeFileSync(file, JSON.stringify(data, null, 2) + '\n')
console.log(`${data.status}${game ? `: ${game.name}` : ''}, saved to ${file}`)
