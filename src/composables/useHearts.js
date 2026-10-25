import { reactive, computed, watchEffect, toValue } from 'vue'
import { HEARTS_API as API, HEARTS_NAMESPACE as NAMESPACE, HEARTS_BACKUP_URL as BACKUP_URL, heartKey } from '@/data/hearts.js'

// Heart counts per project. Everything that talks to the counter service is in this file, so the service can be
// swapped without touching the heart button. Service settings: src/data/hearts.js
//
// The counts live on Abacus (https://jasoncameron.dev/abacus): free, no account, but it only adds 1 per request and
// allows 30 requests per 10 seconds per visitor. So taps show up instantly and are sent one by one in the background
// from a queue in localStorage, which also keeps taps when the page is left. One tab sends at a time (Web Locks), so
// several tabs never double the rate. After CRACK_AT unsent taps on a project its heart cracks and takes no more taps
// until that project's queue is empty.
// A weekly GitHub Action (.github/workflows/hearts-backup.yml) saves all counts to the reactions-data branch; that
// backup is shown when Abacus can't be reached.
// ms between sent taps: at most 20 per 10 s, leaving room for loading counts on other pages and tabs (the browser
// can't read Abacus's "remaining requests" header, so the pace has to be safe on its own)
const SEND_INTERVAL = 500
const RETRY_DELAY = 10000 // ms to wait after "too many requests" or a network error
// per namespace, so cached counts never carry over to a different set of counters
const STORAGE_KEY = `hearts:${NAMESPACE}` // { queue: { [id]: { pending, cracked } }, counts: { [id]: last confirmed count } }
const IN_FLIGHT_KEY = `heartInFlight:${NAMESPACE}` // project of a tap that was sent but not confirmed yet
export const CRACK_AT = 100

const wait = (ms) => new Promise((resolve) => setTimeout(resolve, ms))

const readStored = () => {
    try {
        const stored = JSON.parse(localStorage.getItem(STORAGE_KEY))
        return { queue: stored?.queue ?? {}, counts: stored?.counts ?? {} }
    } catch {
        return { queue: {}, counts: {} }
    }
}

// counts only ever go up, so the highest value seen (loaded, confirmed by a tap, or from another tab) is the newest
const raise = (id, value) => {
    if (typeof value === 'number' && (state.counts[id] == null || value > state.counts[id])) {
        state.counts[id] = value
    }
}

const stored = readStored()
// counts: newest known saved count per project, starting from the last visit's (null while unknown)
// queue: per project { pending: unsent taps, cracked }
const state = reactive({ counts: { ...stored.counts }, queue: stored.queue })

const save = (change) => {
    // re-read first: another tab may have added taps in the meantime
    const latest = readStored()
    change(latest)

    try {
        localStorage.setItem(STORAGE_KEY, JSON.stringify(latest))
    } catch {
        // without storage the queue still works for this visit
    }

    state.queue = latest.queue
    Object.entries(latest.counts).forEach(([id, value]) => raise(id, value))
}

// taps and confirmations from other tabs
window.addEventListener('storage', (event) => {
    if (event.key === STORAGE_KEY) {
        const latest = readStored()
        state.queue = latest.queue
        Object.entries(latest.counts).forEach(([id, value]) => raise(id, value))
    }
})

let backup = null
const loadBackup = () => {
    backup ??= fetch(BACKUP_URL).then((response) => response.ok ? response.json() : null).catch(() => null)
    return backup
}

const fetchCount = async (projectId, attempt = 0) => {
    try {
        const response = await fetch(`${API}/get/${NAMESPACE}/${heartKey(projectId)}`)

        if (response.status === 404) {
            return 0
        }

        if (response.ok) {
            return (await response.json()).value
        }

        if (response.status === 429 && attempt < 3) {
            await wait(RETRY_DELAY)
            return fetchCount(projectId, attempt + 1)
        }
    } catch {
        // fall through to the backup
    }

    const saved = await loadBackup()
    return saved?.counts?.[projectId] ?? null
}

const sendQueue = async () => {
    // a tap still marked as in flight belongs to a page that was closed while sending; it most likely arrived
    const leftover = localStorage.getItem(IN_FLIGHT_KEY)

    if (leftover) {
        localStorage.removeItem(IN_FLIGHT_KEY)
        save(({ queue }) => {
            if (queue[leftover] && --queue[leftover].pending <= 0) {
                delete queue[leftover]
            }
        })
    }

    for (;;) {
        const { queue } = readStored()
        const projectId = Object.keys(queue).find((id) => queue[id].pending > 0)

        if (!projectId) {
            return
        }

        let delay = SEND_INTERVAL

        try {
            localStorage.setItem(IN_FLIGHT_KEY, projectId)
            const response = await fetch(`${API}/hit/${NAMESPACE}/${heartKey(projectId)}`)

            if (response.ok) {
                const { value } = await response.json()
                localStorage.removeItem(IN_FLIGHT_KEY)
                // one update for both, so the shown total (count + unsent taps) never jumps
                save(({ queue, counts }) => {
                    if (queue[projectId] && --queue[projectId].pending <= 0) {
                        delete queue[projectId]
                    }

                    counts[projectId] = Math.max(counts[projectId] ?? 0, value)
                })
            } else {
                localStorage.removeItem(IN_FLIGHT_KEY)
                delay = RETRY_DELAY
            }
        } catch {
            localStorage.removeItem(IN_FLIGHT_KEY)
            delay = RETRY_DELAY
        }

        await wait(delay)
    }
}

let sending = false

const startSending = () => {
    if (sending) {
        return
    }

    sending = true
    const run = () => sendQueue().finally(() => {
        sending = false
    })

    // only one tab sends at a time; the others wait and find an empty queue
    if (navigator.locks) {
        navigator.locks.request('heart-sender', run)
    } else {
        run()
    }
}

// taps left over from an earlier visit
if (Object.keys(state.queue).length) {
    startSending()
}

const loading = new Set()

// projectId: a plain id, a ref or a getter (the project page is reused when switching projects)
export const useHeart = (projectId) => {
    const id = computed(() => toValue(projectId))

    watchEffect(() => {
        const current = id.value

        if (!loading.has(current)) {
            loading.add(current)
            state.counts[current] ??= null
            // remembered for the next visit, so the number shows right away instead of after loading
            fetchCount(current).then((count) => typeof count === 'number' && save(({ counts }) => {
                if (counts[current] == null || count > counts[current]) counts[current] = count
            }))
        }
    })

    const pending = computed(() => state.queue[id.value]?.pending ?? 0)
    const cracked = computed(() => state.queue[id.value]?.cracked ?? false)
    // saved count plus own unsent taps; null while the count is unknown
    const total = computed(() => state.counts[id.value] == null ? null : state.counts[id.value] + pending.value)

    const tap = () => {
        if (cracked.value) {
            return false
        }

        save(({ queue }) => {
            const entry = queue[id.value] ??= { pending: 0, cracked: false }
            entry.pending++
            entry.cracked = entry.pending >= CRACK_AT
        })
        startSending()
        return true
    }

    return { total, pending, cracked, tap }
}
