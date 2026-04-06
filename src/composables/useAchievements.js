import { computed, reactive } from 'vue'
import { achievementDefinitions } from '@/data/achievements.js'

const storageKey = 'achievements'
const viewedProjectsKey = 'achievementViewedProjects'
const siteVisitsKey = 'achievementSiteVisits'
const responsiveStateKey = 'achievementResponsiveState'
const claimedThemesKey = 'achievementClaimedThemes'
let achievementToast = null

export const registerAchievementToast = (callback) => {
    achievementToast = callback
}

const createEmptyState = () => {
    return achievementDefinitions.reduce((state, achievement) => {
        state[achievement.id] = {
            unlocked: false
        }
        return state
    }, {})
}

const isAchievementUnlocked = (savedAchievement) => {
    if (typeof savedAchievement === 'boolean') {
        return savedAchievement
    }

    if (savedAchievement && typeof savedAchievement === 'object') {
        return Boolean(savedAchievement.unlocked)
    }

    return false
}

const getAchievementRewardThemeId = (achievementId) => {
    const achievement = achievementDefinitions.find((entry) => entry.id === achievementId)
    return achievement?.rewardThemeId || null
}

const loadClaimedThemes = () => {
    if (typeof window === 'undefined') {
        return {}
    }

    try {
        const savedState = JSON.parse(window.localStorage.getItem(claimedThemesKey))

        if (!savedState || typeof savedState !== 'object') {
            return {}
        }

        return Object.keys(savedState).reduce((state, themeId) => {
            state[themeId] = Boolean(savedState[themeId])
            return state
        }, {})
    } catch {
        return {}
    }
}

const normalizeSavedState = (savedState) => {
    const state = createEmptyState()

    if (!savedState || typeof savedState !== 'object') {
        return state
    }

    achievementDefinitions.forEach((achievement) => {
        const savedAchievement = savedState[achievement.id]
        state[achievement.id] = {
            unlocked: isAchievementUnlocked(savedAchievement)
        }
    })

    return state
}

const loadAchievements = () => {
    if (typeof window === 'undefined') {
        return createEmptyState()
    }

    try {
        const savedState = JSON.parse(window.localStorage.getItem(storageKey))
        return normalizeSavedState(savedState)
    } catch {
        return createEmptyState()
    }
}

const achievementsState = reactive(loadAchievements())
const claimedThemesState = reactive(loadClaimedThemes())

const loadNumber = (key) => {
    if (typeof window === 'undefined') {
        return 0
    }

    const rawValue = window.localStorage.getItem(key)
    const parsedValue = Number.parseInt(rawValue || '0', 10)
    return Number.isNaN(parsedValue) ? 0 : parsedValue
}

const loadResponsiveState = () => {
    if (typeof window === 'undefined') {
        return {
            seenDesktop: false,
            seenMobile: false
        }
    }

    try {
        const savedState = JSON.parse(window.localStorage.getItem(responsiveStateKey))

        return {
            seenDesktop: Boolean(savedState?.seenDesktop),
            seenMobile: Boolean(savedState?.seenMobile)
        }
    } catch {
        return {
            seenDesktop: false,
            seenMobile: false
        }
    }
}

let siteVisits = loadNumber(siteVisitsKey)
let responsiveState = loadResponsiveState()

const loadViewedProjects = () => {
    if (typeof window === 'undefined') {
        return new Set()
    }

    try {
        const savedState = JSON.parse(window.localStorage.getItem(viewedProjectsKey))
        if (!Array.isArray(savedState)) {
            return new Set()
        }
        return new Set(savedState.filter((projectId) => typeof projectId === 'string'))
    } catch {
        return new Set()
    }
}

const viewedProjects = loadViewedProjects()

const saveAchievements = () => {
    if (typeof window === 'undefined') {
        return
    }

    window.localStorage.setItem(storageKey, JSON.stringify(achievementsState))
}

const saveViewedProjects = () => {
    if (typeof window === 'undefined') {
        return
    }

    window.localStorage.setItem(viewedProjectsKey, JSON.stringify([...viewedProjects]))
}

const saveSiteVisits = () => {
    if (typeof window === 'undefined') {
        return
    }

    window.localStorage.setItem(siteVisitsKey, String(siteVisits))
}

const saveResponsiveState = () => {
    if (typeof window === 'undefined') {
        return
    }

    window.localStorage.setItem(responsiveStateKey, JSON.stringify(responsiveState))
}

const saveClaimedThemes = () => {
    if (typeof window === 'undefined') {
        return
    }

    window.localStorage.setItem(claimedThemesKey, JSON.stringify(claimedThemesState))
}

const unlockAchievement = (achievementId) => {
    const achievement = achievementDefinitions.find((entry) => entry.id === achievementId)

    if (!achievementsState[achievementId] || achievementsState[achievementId].unlocked) {
        return false
    }

    achievementsState[achievementId] = {
        unlocked: true
    }
    saveAchievements()

    if (typeof achievementToast === 'function' && achievement) {
        achievementToast(achievement)
    }

    return true
}

const resetAchievements = () => {
    achievementDefinitions.forEach((achievement) => {
        achievementsState[achievement.id] = {
            unlocked: false
        }
    })

    saveAchievements()
    viewedProjects.clear()
    saveViewedProjects()

    siteVisits = 0
    saveSiteVisits()

    responsiveState = {
        seenDesktop: false,
        seenMobile: false
    }
    saveResponsiveState()

    Object.keys(claimedThemesState).forEach((themeId) => {
        delete claimedThemesState[themeId]
    })
    saveClaimedThemes()

    if (achievementToast) {
        achievementToast({ isReset: true })
    }
}

const claimAchievementTheme = (achievementId) => {
    const rewardThemeId = getAchievementRewardThemeId(achievementId)

    if (!rewardThemeId || !achievementsState[achievementId]?.unlocked || claimedThemesState[rewardThemeId]) {
        return false
    }

    claimedThemesState[rewardThemeId] = true
    saveClaimedThemes()

    if (typeof achievementToast === 'function') {
        achievementToast({ isThemeClaimed: true, achievementId, themeId: rewardThemeId })
    }

    return true
}

const registerSiteVisit = () => {
    siteVisits += 1
    saveSiteVisits()

    if (siteVisits >= 5) {
        unlockAchievement('you-again')
    }
}

const registerResponsiveView = (width) => {
    if (width <= 600) {
        responsiveState = {
            ...responsiveState,
            seenMobile: true
        }
    } else {
        responsiveState = {
            ...responsiveState,
            seenDesktop: true
        }
    }

    saveResponsiveState()

    if (responsiveState.seenDesktop && responsiveState.seenMobile) {
        unlockAchievement('yes-its-responsive')
    }
}

const registerNocturnalVisit = (date = new Date()) => {
    const hour = date.getHours()

    if (hour >= 0 && hour < 3) {
        unlockAchievement('nocturnal')
    }
}

const registerLanguageSwitch = () => {
    unlockAchievement('bilingual')
}

const registerCursorTrial = (isCustomCursorEnabled) => {
    if (isCustomCursorEnabled) {
        unlockAchievement('cursor-connaisseur')
    }
}

const registerLinkClick = (href) => {
    if (!href) {
        return
    }

    if (href.startsWith('mailto:')) {
        unlockAchievement('get-in-touch')
    }

    if (href.includes('duolingo.com/profile/')) {
        unlockAchievement('owl-fan')
    }
}

const registerTokyoReveal = () => {
    unlockAchievement('tokyo-stories')
}

const registerGameFilter = (selectedFilters) => {
    if (Array.isArray(selectedFilters) && selectedFilters.includes('game')) {
        unlockAchievement('gamer')
    }
}

const registerInvalidProject = () => {
    unlockAchievement('404')
}

const registerHorseFan = (isOverlayVisible, type, imageCaption) => {
    if (isOverlayVisible && type === 'images' && (imageCaption || '').trim() === 'Illustration Mr. Horse') {
        unlockAchievement('horse-fan')
    }
}

const registerProjectView = (projectId, totalProjectCount) => {
    if (typeof projectId !== 'string' || !projectId) {
        return
    }

    const initialSize = viewedProjects.size
    viewedProjects.add(projectId)

    if (viewedProjects.size !== initialSize) {
        saveViewedProjects()
    }

    if (viewedProjects.size >= 10) {
        unlockAchievement('explorer')
    }

    if (typeof totalProjectCount === 'number' && totalProjectCount > 0 && viewedProjects.size >= totalProjectCount) {
        unlockAchievement('completionist')
    }
}

const isThemeClaimed = (themeId) => Boolean(claimedThemesState[themeId])

export const useAchievements = () => {
    const achievements = computed(() => {
        return achievementDefinitions.map((achievement) => ({
            ...achievement,
            ...achievementsState[achievement.id]
        }))
    })

    const unlockedAchievements = computed(() => achievements.value.filter((achievement) => achievement.unlocked))

    const unlockedCount = computed(() => unlockedAchievements.value.length)

    const isUnlocked = (achievementId) => Boolean(achievementsState[achievementId]?.unlocked)

    return {
        achievements,
        unlockedAchievements,
        unlockedCount,
        unlockAchievement,
        registerSiteVisit,
        registerResponsiveView,
        registerNocturnalVisit,
        registerLanguageSwitch,
        registerCursorTrial,
        registerLinkClick,
        registerTokyoReveal,
        registerGameFilter,
        registerInvalidProject,
        registerHorseFan,
        registerProjectView,
        resetAchievements,
        claimAchievementTheme,
        getAchievementRewardThemeId,
        isThemeClaimed,
        isUnlocked
    }
}

export {
    claimAchievementTheme,
    getAchievementRewardThemeId,
    isThemeClaimed
}