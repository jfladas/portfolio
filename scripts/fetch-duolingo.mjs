// Saves the Duolingo streak to a JSON file: node scripts/fetch-duolingo.mjs <username> <output.json>
// Run every hour by .github/workflows/duolingo.yml. Uses Duolingo's public profile endpoint (unofficial, no login),
// which doesn't allow requests from other websites, so the site reads this file instead.
import fs from 'node:fs'

const [username, output] = process.argv.slice(2)

if (!username || !output) {
    console.error('usage: node scripts/fetch-duolingo.mjs <username> <output.json>')
    process.exit(1)
}

const response = await fetch(`https://www.duolingo.com/2017-06-30/users?username=${encodeURIComponent(username)}`, {
    headers: { 'User-Agent': 'Mozilla/5.0 (jfladas.com streak widget)' }
})

// on any problem keep the last good file instead of overwriting it
if (!response.ok) {
    console.error(`request failed: ${response.status}`)
    process.exit(1)
}

const user = (await response.json()).users?.[0]
const current = user?.streakData?.currentStreak

if (!user || typeof user.streak !== 'number') {
    console.error('no streak in the response')
    process.exit(1)
}

const data = {
    username: user.username,
    streak: user.streak,
    // last day with a finished lesson (YYYY-MM-DD, Duolingo's own day), null when there is no streak
    lastPracticed: current?.endDate ?? null
}

fs.writeFileSync(output, JSON.stringify(data, null, 2) + '\n')
console.log(`saved streak of ${data.streak} days (last practiced ${data.lastPracticed}) to ${output}`)
