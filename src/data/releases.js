// Large downloads (.ppsx, .zip, .dmg) are hosted as assets of a GitHub Release
// instead of being bundled into the site, which keeps GitHub Pages under its 1 GB limit.
// See DEPLOYMENT.md for how to add or replace a file.
const releaseUrl = 'https://github.com/jfladas/portfolio/releases/download/downloads/'

export const releaseFile = (name) => releaseUrl + name
