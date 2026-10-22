import { computed, inject } from 'vue'
import { projects, aboutContent } from '@/data/projects.js'

// Replaces every { en, de } pair in the content tree with the text for one language.
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

const localizedContent = {}

const getLocalizedContent = (language) => {
    localizedContent[language] ??= {
        projects: localize(projects, language),
        aboutContent: localize(aboutContent, language)
    }

    return localizedContent[language]
}

export const useContent = () => {
    const currentLanguage = inject('currentLanguage')

    return {
        projects: computed(() => getLocalizedContent(currentLanguage.value).projects),
        aboutContent: computed(() => getLocalizedContent(currentLanguage.value).aboutContent)
    }
}
