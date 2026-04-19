import { execSync } from 'node:child_process'
import { existsSync, mkdirSync, writeFileSync } from 'node:fs'
import { dirname, resolve } from 'node:path'

const outputPath = resolve('dist', 'spotify.json')

try {
    execSync('git fetch origin gh-pages', { stdio: 'pipe' })
    const content = execSync('git show origin/gh-pages:spotify.json', {
        encoding: 'utf8',
        stdio: ['ignore', 'pipe', 'pipe'],
    })

    mkdirSync(dirname(outputPath), { recursive: true })
    writeFileSync(outputPath, content, 'utf8')
    console.log('Preserved spotify.json from origin/gh-pages.')
} catch (error) {
    if (existsSync(outputPath)) {
        console.log('Using existing dist/spotify.json fallback.')
    } else {
        console.warn('Could not preserve spotify.json from gh-pages and no dist fallback exists.')
    }
}
