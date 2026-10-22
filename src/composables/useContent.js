import { computed, inject } from 'vue'
import { projects, aboutContent } from '@/data/projects.js'
import { localize } from '@/data/localize.js'

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
