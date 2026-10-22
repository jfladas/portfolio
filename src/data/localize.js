// Replaces every { en, de } pair in the content tree with the text for one language.
// Also used at build time by scripts/project-previews.js, so it must stay free of Vue and other imports.
export const localize = (value, language) => {
    if (Array.isArray(value)) {
        return value.map((item) => localize(item, language))
    }

    if (value && typeof value === 'object') {
        const keys = Object.keys(value)

        if (keys.length === 2 && 'en' in value && 'de' in value) {
            return value[language]
        }

        return Object.fromEntries(keys.map((key) => [key, localize(value[key], language)]))
    }

    return value
}
