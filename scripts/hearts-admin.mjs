// Manages the project heart counters on Abacus with their admin keys.
// The keys file holds secrets: keep it OUTSIDE the repo (e.g. in a password manager or a private folder).
//
//   node scripts/hearts-admin.mjs <keys.json> create <live|dev>   create one counter per project at 0, save the admin keys
//   node scripts/hearts-admin.mjs <keys.json> list <live|dev>     show the current counts
//   node scripts/hearts-admin.mjs <keys.json> reset <live|dev> <projectId|all>
//   node scripts/hearts-admin.mjs <keys.json> set <live|dev> <projectId> <value>
import fs from 'node:fs'
import { HEARTS_API, HEARTS_NAMESPACES, heartKey } from '../src/data/hearts.js'

const [keysFile, command, target, projectArg, valueArg] = process.argv.slice(2)
const namespace = HEARTS_NAMESPACES[target]

if (!keysFile || !command || !namespace) {
    console.error('usage: node scripts/hearts-admin.mjs <keys.json> <create|list|reset|set> <live|dev> [projectId|all] [value]')
    process.exit(1)
}

const wait = (ms) => new Promise((resolve) => setTimeout(resolve, ms))
const source = fs.readFileSync(new URL('../src/data/projects.js', import.meta.url), 'utf8')
const projectIds = [...source.matchAll(/^ {8}id: '([^']+)'/gm)].map((match) => match[1])
const keys = fs.existsSync(keysFile) ? JSON.parse(fs.readFileSync(keysFile, 'utf8')) : {}
keys[namespace] ??= {}
const saveKeys = () => fs.writeFileSync(keysFile, JSON.stringify(keys, null, 2) + '\n')

const admin = async (action, projectId, query = '') => {
    const adminKey = keys[namespace][projectId]

    if (!adminKey) {
        throw new Error(`no admin key for ${namespace}/${projectId}`)
    }

    const response = await fetch(`${HEARTS_API}/${action}/${namespace}/${heartKey(projectId)}${query}`, {
        method: 'POST',
        headers: { Authorization: `Bearer ${adminKey}` }
    })

    if (!response.ok) {
        throw new Error(`${action} ${projectId}: ${response.status} ${await response.text()}`)
    }

    return (await response.json()).value
}

if (command === 'create') {
    for (const id of projectIds) {
        if (keys[namespace][id]) {
            console.log(`${id}: already has a key, skipped`)
            continue
        }

        const response = await fetch(`${HEARTS_API}/create/${namespace}/${heartKey(id)}?initializer=0`)

        if (response.status !== 201) {
            console.error(`${id}: ${response.status} ${await response.text()}`)
            process.exit(1)
        }

        keys[namespace][id] = (await response.json()).admin_key
        saveKeys() // after every counter, so no key is lost if a later one fails
        console.log(`${id}: created`)
        await wait(800) // well below the limit of 30 requests per 10 seconds
    }
} else if (command === 'list') {
    for (const id of projectIds) {
        const response = await fetch(`${HEARTS_API}/get/${namespace}/${heartKey(id)}`)
        console.log(`${id}: ${response.ok ? (await response.json()).value : response.status}`)
        await wait(500)
    }
} else if (command === 'reset') {
    for (const id of projectArg === 'all' ? projectIds : [projectArg]) {
        console.log(`${id}: ${await admin('reset', id)}`)
        await wait(500)
    }
} else if (command === 'set') {
    console.log(`${projectArg}: ${await admin('set', projectArg, `?value=${Number(valueArg)}`)}`)
} else {
    console.error(`unknown command: ${command}`)
    process.exit(1)
}
