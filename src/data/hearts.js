// Where the project hearts are counted. Used by src/composables/useHearts.js, scripts/backup-hearts.mjs (the weekly
// backup) and scripts/hearts-admin.mjs (reset/set with admin keys), so it must stay free of Vue and other imports.
export const HEARTS_API = 'https://abacus.jasoncameron.dev'
// the dev server (npm run dev) counts in its own namespace, so testing never changes the live counts
export const HEARTS_NAMESPACES = { live: 'jfladas-hearts', dev: 'jfladas-hearts-dev' }
export const HEARTS_NAMESPACE = import.meta.env?.DEV ? HEARTS_NAMESPACES.dev : HEARTS_NAMESPACES.live
export const HEARTS_BACKUP_URL = 'https://raw.githubusercontent.com/jfladas/portfolio/reactions-data/hearts.json'

export const heartKey = (projectId) => `heart-${projectId}`
