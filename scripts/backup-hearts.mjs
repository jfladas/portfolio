// Saves the heart count of every project to a JSON file: node scripts/backup-hearts.mjs <output.json>
// Run weekly by .github/workflows/hearts-backup.yml. The site shows this backup when the counter service is down,
// and reading every counter also keeps it alive (Abacus deletes counters that nobody reads for 6 months).
import fs from 'node:fs'
import { HEARTS_API, HEARTS_NAMESPACE, heartKey } from '../src/data/hearts.js'

const output = process.argv[2]

if (!output) {
    console.error('usage: node scripts/backup-hearts.mjs <output.json>')
    process.exit(1)
}

// project ids, read straight from the data file (it can't be imported here, it uses Vite's import.meta.glob)
const source = fs.readFileSync(new URL('../src/data/projects.js', import.meta.url), 'utf8')
const projectIds = [...source.matchAll(/^ {8}id: '([^']+)'/gm)].map((match) => match[1])
const wait = (ms) => new Promise((resolve) => setTimeout(resolve, ms))

const counts = {}

for (const id of projectIds) {
    const response = await fetch(`${HEARTS_API}/get/${HEARTS_NAMESPACE}/${heartKey(id)}`)

    if (response.status === 404) {
        counts[id] = 0
    } else if (response.ok) {
        counts[id] = (await response.json()).value
    } else {
        // keep the last good backup instead of overwriting it with gaps
        console.error(`could not read ${id}: ${response.status}`)
        process.exit(1)
    }

    await wait(500) // well below the service's limit of 30 requests per 10 seconds
}

fs.writeFileSync(output, JSON.stringify({ updated: new Date().toISOString(), counts }, null, 2) + '\n')
console.log(`saved ${projectIds.length} heart counts to ${output}`)
