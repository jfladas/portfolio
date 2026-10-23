// Browser tab titles. Also used at build time by scripts/project-previews.js, so it must stay free of Vue and other imports.
export const siteTitle = 'jfladas ▪ Lukas Bucher'

export const pageTitle = (page) => page ? `${page} ▪ jfladas` : siteTitle
