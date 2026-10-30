<template>
    <header class="hoverable">
        <router-link to="/">
            <div class="logo"
                :class="{ reverse: $route.path !== '/about', center: $route.path === '/achievements' || $route.path === '/' }">
                jfladas
            </div>
        </router-link>
        <nav>
            <router-link to="/about" class="nav-item left" :class="{ selected: $route.path === '/about' }">
                {{ currentLanguage === 'en' ? 'about' : 'über' }}
            </router-link>
            <router-link to="/projects" class="nav-item right"
                :class="{ selected: $route.path.startsWith('/projects') }">
                {{ currentLanguage === 'en' ? 'projects' : 'projekte' }}
            </router-link>
        </nav>
    </header>
    <div class="more hoverable" :class="{ open: moreVisible }">
        <AppIcon icon="caret-left" class="more-icon tooltip" :tooltip="currentLanguage === 'en' ? 'more' : 'mehr'"
            role="button" tabindex="0" aria-hidden="false" :aria-label="currentLanguage === 'en' ? 'more' : 'mehr'"
            :aria-expanded="moreVisible" @click="moreVisible = !moreVisible" />
        <div class="more-items">
            <div class="more-item tooltip" tooltip="en/de" role="button" :tabindex="moreVisible ? 0 : -1"
                :aria-label="currentLanguage === 'en' ? 'Auf Deutsch wechseln' : 'Switch to English'"
                @click="toggleLanguage">
                <AppIcon icon="language" fixed-width />
            </div>
            <div v-if="!isMobile" class="more-item tooltip" tooltip="cursor" role="button"
                :tabindex="moreVisible ? 0 : -1"
                :aria-label="currentLanguage === 'en' ? 'Toggle custom cursor' : 'Eigenen Cursor umschalten'"
                @click="toggleCursor">
                <AppIcon icon="arrow-pointer" fixed-width />
            </div>
            <div v-if="availableThemes.length > 1" class="more-item tooltip" tooltip="theme" role="button"
                :tabindex="moreVisible ? 0 : -1"
                :aria-label="currentLanguage === 'en' ? 'Change theme' : 'Theme wechseln'" @click="cycleTheme">
                <AppIcon icon="palette" fixed-width />
            </div>
            <div class="more-item tooltip" tooltip="achiev.">
                <router-link to="/achievements" :tabindex="moreVisible ? 0 : -1" aria-label="achievements"
                    @click="moreVisible = !moreVisible">
                    <AppIcon icon="trophy" fixed-width />
                </router-link>
            </div>
        </div>
    </div>
    <router-view />
    <component :is="toast.action?.link ? 'router-link' : 'div'" id="toast"
        v-bind="toast.action?.link ? { to: toast.action.link } : toast.action ? { role: 'button', tabindex: 0 } : { role: 'status' }"
        :class="{ visible: toast.visible, action: toast.action, hoverable: toast.action, 'has-icon': toast.icon }"
        @click="handleToastClick">
        <svg v-if="toast.icon" class="toast-icon" viewBox="0 0 24 24" shape-rendering="crispEdges" aria-hidden="true">
            <path :d="toast.icon" />
        </svg>
        <span v-if="toast.heading" class="toast-text">
            <span class="toast-heading">{{ toast.heading }}</span>
            <span class="toast-message">{{ toast.message }}</span>
        </span>
        <template v-else>{{ toast.message }}</template>
        <span v-if="toast.action" class="toast-action">
            {{ toast.action.label }}
            <AppIcon icon="chevron-right" />
        </span>
    </component>
    <div class="fade-out"></div>
    <footer>
        <p>
            {{ currentLanguage === 'en' ? 'made with ' : 'gemacht mit ' }}
            <AppIcon icon="heart" class="heart hoverable tooltip" :tooltip="currentLanguage === 'en' ? 'love' : 'liebe'"
                role="button" tabindex="0" aria-hidden="false" :aria-label="currentLanguage === 'en' ? 'love' : 'liebe'"
                @click="handleHeartClick" />
            {{ currentLanguage === 'en' ? ' by jfladas' : ' von jfladas' }}
        </p>
        <p>
            <!-- data-umami-event: counted in the visitor stats (Umami, see index.html) -->
            <a href="https://github.com/jfladas/" target="_blank" class="social hoverable tooltip" tooltip="github"
                aria-label="GitHub" data-umami-event="social" data-umami-event-name="github">
                <AppIcon icon="github" />
            </a>
            <a href="https://jfladas.itch.io/" target="_blank" class="social hoverable tooltip" tooltip="itch.io"
                aria-label="itch.io" data-umami-event="social" data-umami-event-name="itch.io">
                <AppIcon icon="itch-io" />
            </a>
            <a href="https://www.linkedin.com/in/jfladas/" target="_blank" class="social hoverable tooltip"
                tooltip="linkedin" aria-label="LinkedIn" data-umami-event="social" data-umami-event-name="linkedin">
                <AppIcon icon="linkedin" />
            </a>
            <a href="https://www.instagram.com/jfladas.exe/" target="_blank" class="social hoverable tooltip"
                tooltip="insta" aria-label="Instagram" data-umami-event="social" data-umami-event-name="instagram">
                <AppIcon icon="instagram" />
            </a>
            <a href="mailto:lukas@jfladas.com" class="social hoverable tooltip" tooltip="email" aria-label="E-Mail"
                data-umami-event="social" data-umami-event-name="email">
                <AppIcon icon="envelope" />
            </a>
        </p>
        <p>
            <router-link to="/about" class="bold hoverable">
                {{ currentLanguage === 'en' ? 'about' : 'über' }}
            </router-link>
            ⬝
            <router-link to="/achievements" class="bold hoverable">
                {{'achievements'}}
            </router-link>
            ⬝
            <router-link to="/projects" class="bold hoverable">
                {{ currentLanguage === 'en' ? 'projects' : 'projekte' }}
            </router-link>
        </p>
        <!-- icon credit: Font Awesome's logos are CC BY 4.0, which asks for it (see src/icons.js) -->
        <div class="copyright">
            <p>
                &copy; {{ currentYear }} jfladas
                ⬝
                <button class="footer-toggle hoverable" :aria-expanded="openPanel === 'credits'" aria-controls="credits"
                    @click="togglePanel('credits')">credits</button>
                ⬝
                <button class="footer-toggle hoverable" :aria-expanded="openPanel === 'privacy'" aria-controls="privacy"
                    @click="togglePanel('privacy')">
                    {{ currentLanguage === 'en' ? 'privacy' : 'datenschutz' }}
                </button>
            </p>
            <div id="credits" class="footer-panel" :class="{ open: openPanel === 'credits' }"
                :inert="openPanel !== 'credits'" @transitionend="revealPanel">
                <p class="footer-panel-inner">
                    icons:
                    <a href="https://remixicon.com" target="_blank" rel="noopener" class="hoverable">Remix Icon</a>,
                    <a href="https://fontawesome.com" target="_blank" rel="noopener" class="hoverable">Font Awesome</a>,
                    <a href="https://pixelarticons.com" target="_blank" rel="noopener"
                        class="hoverable">pixelarticons</a>
                    ⬝
                    fonts:
                    <a href="https://github.com/Dicotype/Funnel" target="_blank" rel="noopener"
                        class="hoverable">Funnel</a>,
                    <a href="https://www.jetbrains.com/lp/mono/" target="_blank" rel="noopener"
                        class="hoverable">JetBrains
                        Mono</a>,
                    <a href="https://fonts.google.com/specimen/DotGothic16" target="_blank" rel="noopener"
                        class="hoverable">DotGothic16</a>
                    ⬝
                    hearts:
                    <a href="https://jasoncameron.dev/abacus" target="_blank" rel="noopener"
                        class="hoverable">Abacus</a>
                    <br>
                    <span v-if="currentLanguage === 'en'">
                        Spotify, Duolingo, Nintendo Switch and other names and logos are trademarks of their owners;
                        this site isn't affiliated with them.
                    </span>
                    <span v-else>
                        Spotify, Duolingo, Nintendo Switch und andere Namen und Logos sind Marken ihrer Inhaber;
                        diese Seite steht in keiner Verbindung zu ihnen.
                    </span>
                </p>
            </div>
            <!-- what the site stores and which other servers it talks to; keep up to date when adding services -->
            <div id="privacy" class="footer-panel" :class="{ open: openPanel === 'privacy' }"
                :inert="openPanel !== 'privacy'" @transitionend="revealPanel">
                <p v-if="currentLanguage === 'en'" class="footer-panel-inner">
                    No cookies. Settings and achievements stay in your browser.
                    <br>
                    Anonymous stats with
                    <a href="https://umami.is/privacy" target="_blank" rel="noopener" class="hoverable">Umami</a>:
                    pages,
                    where you came from, device, country and clicks,
                    no IP addresses stored.
                    <br>
                    Also loads from GitHub, Abacus, Spotify, Nintendo and OneDrive.
                </p>
                <p v-else class="footer-panel-inner">
                    Keine Cookies. Einstellungen und Achievements bleiben in deinem Browser.
                    <br>
                    Anonyme Statistik mit
                    <a href="https://umami.is/privacy" target="_blank" rel="noopener" class="hoverable">Umami</a>:
                    Seiten,
                    woher du kommst, Gerät, Land und Klicks,
                    keine IP-Adressen gespeichert.
                    <br>
                    Lädt auch von GitHub, Abacus, Spotify, Nintendo und OneDrive.
                </p>
            </div>
        </div>
    </footer>
    <div ref="cursor" class="custom-cursor">
        <span ref="tooltip" class="tooltip-container"></span>
    </div>
</template>

<script setup>
import { computed, ref, onMounted, onUnmounted, watch, watchEffect, provide } from 'vue'
import { useRoute } from 'vue-router'
import { useAchievements, registerAchievementToast } from '@/composables/useAchievements.js'
import { achievementDefinitions } from '@/data/achievements.js'
import { projects } from '@/data/projects.js'
import { localize } from '@/data/localize.js'
import { pageTitle, siteTitle } from '@/data/titles.js'
const route = useRoute()
const {
    unlockAchievement,
    registerSiteVisit,
    registerResponsiveView,
    registerNocturnalVisit,
    registerLanguageSwitch,
    registerCursorTrial,
    registerLinkClick,
    isThemeClaimed
} = useAchievements()

const isMobile = ref(false)

// footer panels (credits, privacy): one open at a time
const openPanel = ref(null)
const togglePanel = (panel) => {
    openPanel.value = openPanel.value === panel ? null : panel
}

// once a panel has finished opening, scroll so it's fully on screen
const revealPanel = (event) => {
    if (event.target === event.currentTarget && event.target.classList.contains('open')) {
        event.target.scrollIntoView({ behavior: 'smooth', block: 'nearest' })
    }
}

const checkIsMobile = () => {
    const userAgent = navigator.userAgent || window.opera
    isMobile.value = /android|iPad|iPhone|iPod/i.test(userAgent) && !window.MSStream
}

const moreVisible = ref(false)
const isCustomCursor = ref(localStorage.getItem('isCustomCursor') === 'true' || false)
// written out in full so Vite bundles only these two files (a path built from a variable bundles all of src/assets)
const customCursorStyle = new URL('/src/assets/custom-cursor.css', import.meta.url).href
const defaultCursorStyle = new URL('/src/assets/default-cursor.css', import.meta.url).href
const currentLanguage = ref(localStorage.getItem('language') || 'en')

provide('currentLanguage', currentLanguage)

const pageNames = {
    about: { en: 'about', de: 'über' },
    projects: { en: 'projects', de: 'projekte' },
    achievements: 'achievements'
}

watchEffect(() => {
    const name = route.name === 'project-detail'
        ? projects.find((project) => project.id === route.params.id)?.name
        : pageNames[route.name]

    // about stands in for the homepage for now (/ redirects there), so it carries the site title (same in project-previews.js)
    document.title = route.name === 'about' ? siteTitle : pageTitle(localize(name, currentLanguage.value))
})

watch(currentLanguage, (language) => {
    document.documentElement.lang = language
}, { immediate: true })

const currentYear = new Date().getFullYear()

const themes = ['default', ...new Set(achievementDefinitions.map((achievement) => achievement.rewardThemeId).filter(Boolean))]
const themeStorageKey = 'themeId'
const themeIndexStorageKey = 'themeIndex'

const availableThemes = computed(() => {
    return themes.filter((themeId) => themeId === 'default' || isThemeClaimed(themeId))
})

const getInitialThemeId = () => {
    const storedThemeId = localStorage.getItem(themeStorageKey)

    if (storedThemeId && availableThemes.value.includes(storedThemeId)) {
        return storedThemeId
    }

    const legacyThemeIndex = Number.parseInt(localStorage.getItem(themeIndexStorageKey) ?? '', 10)

    if (Number.isInteger(legacyThemeIndex) && legacyThemeIndex >= 0 && legacyThemeIndex < themes.length) {
        const legacyThemeId = themes[legacyThemeIndex]

        if (legacyThemeId && availableThemes.value.includes(legacyThemeId)) {
            return legacyThemeId
        }
    }

    return availableThemes.value[0] || 'default'
}

const applyTheme = (themeId) => {
    document.documentElement.setAttribute('data-theme', themeId)
    localStorage.setItem(themeStorageKey, themeId)
}

const currentThemeId = ref(getInitialThemeId())
applyTheme(currentThemeId.value)

watch(
    availableThemes,
    () => {
        if (!availableThemes.value.includes(currentThemeId.value)) {
            currentThemeId.value = availableThemes.value[0] || 'default'
            applyTheme(currentThemeId.value)
        }
    },
    { immediate: true }
)

const cycleTheme = () => {
    const claimableThemes = availableThemes.value

    if (!claimableThemes.length) {
        return
    }

    const currentThemeIndex = claimableThemes.findIndex((themeId) => themeId === currentThemeId.value)
    const nextThemeIndex = currentThemeIndex < 0 ? 0 : (currentThemeIndex + 1) % claimableThemes.length

    setTheme(claimableThemes[nextThemeIndex])
}

const setTheme = (themeId) => {
    currentThemeId.value = themeId
    applyTheme(currentThemeId.value)
    localStorage.removeItem(themeIndexStorageKey)
    showToast(currentThemeId.value, null, currentLanguage.value === 'en' ? 'Theme changed' : 'Theme gewechselt')
}

const handleViewportAchievement = () => {
    registerResponsiveView(window.innerWidth)
}

watch(() => route.path, (to, from) => {
    removeCursorHover();
    removeTooltip();
})

const cursor = ref(null)
const tooltip = ref(null)

const updateCursor = (e) => {
    if (cursor.value) {
        cursor.value.style.display = 'block'
        cursor.value.style.left = `${e.clientX}px`
        cursor.value.style.top = `${e.clientY}px`
    }
}

const addCursorHover = () => {
    if (cursor.value) {
        cursor.value.classList.add('hover')
    }
}

const removeCursorHover = () => {
    if (cursor.value) {
        cursor.value.classList.remove('hover')
    }
}

let tooltipTimeout = null;
let toastTimeout = null;

const addTooltip = (text) => {
    if (tooltip.value) {
        tooltip.value.textContent = text
        tooltip.value.style.opacity = 1
    }
}

const removeTooltip = () => {
    clearTimeout(tooltipTimeout);
    if (tooltip.value) {
        tooltip.value.style.opacity = 0
    }
}

// Hover and tooltip state follow whichever .hoverable / .tooltip element is under the pointer.
// Listening on the document also covers elements added later (route changes, v-html content).
let hoveredTooltipElement = null

const handlePointerOver = (event) => {
    const target = event.target instanceof Element ? event.target : null

    if (target?.closest('.hoverable')) {
        addCursorHover()
    } else {
        removeCursorHover()
    }

    const tooltipElement = target?.closest('.tooltip') ?? null

    if (tooltipElement === hoveredTooltipElement) {
        return
    }

    hoveredTooltipElement = tooltipElement
    removeTooltip()

    if (tooltipElement) {
        tooltipTimeout = setTimeout(() => {
            addTooltip(tooltipElement.getAttribute('tooltip'))
        }, isMobile.value ? 0 : 500)
    }
}

const handlePointerLeaveWindow = (event) => {
    if (!event.relatedTarget) {
        hoveredTooltipElement = null
        removeCursorHover()
        removeTooltip()
    }
}

const handleCopyClick = (event) => {
    const copyElement = event.target.closest?.('.copy')

    if (copyElement) {
        toClipboard(copyElement.textContent)
    }
}

// Lets keyboard users activate elements marked role="button" with Enter or Space, like real buttons.
const handleButtonKeydown = (event) => {
    const target = event.target

    if ((event.key !== 'Enter' && event.key !== ' ') || target.getAttribute?.('role') !== 'button' || target.tagName === 'BUTTON') {
        return
    }

    event.preventDefault()
    target.dispatchEvent(new MouseEvent('click', { bubbles: true }))
}

const toggleLanguage = () => {
    currentLanguage.value = currentLanguage.value === 'en' ? 'de' : 'en';
    localStorage.setItem('language', currentLanguage.value);
    let newLanguage = currentLanguage.value;
    setTimeout(() => {
        if (currentLanguage.value === newLanguage) {
            registerLanguageSwitch()
        }
    }, 5000);
    showToast(currentLanguage.value === 'en' ? 'English' : 'Deutsch', null,
        currentLanguage.value === 'en' ? 'Language switched' : 'Sprache gewechselt');
    moreVisible.value = false;
}

const toggleCursor = () => {
    removeTooltip();
    isCustomCursor.value = !isCustomCursor.value;
    localStorage.setItem('isCustomCursor', isCustomCursor.value);
    const existingLink = document.getElementById('cursor-style');
    if (existingLink) {
        existingLink.remove();
    }
    const link = document.createElement('link');
    link.id = 'cursor-style';
    link.rel = 'stylesheet';
    link.href = isCustomCursor.value ? customCursorStyle : defaultCursorStyle;
    document.head.appendChild(link);

    let newCursor = isCustomCursor.value;
    setTimeout(() => {
        if (isCustomCursor.value === newCursor) {
            registerCursorTrial(isCustomCursor.value)
        }
    }, 5000);

    showToast(currentLanguage.value === 'en' ? (isCustomCursor.value ? 'custom' : 'default') : (isCustomCursor.value ? 'eigener' : 'Standard'),
        null, currentLanguage.value === 'en' ? 'Cursor changed' : 'Cursor gewechselt');
    moreVisible.value = false;
}

const toast = ref({ message: '', heading: null, action: null, icon: null, visible: false })

// action: optional { label, link } (opens a route) or { label, run } (calls run); the whole toast becomes tappable,
// shows the label with a chevron and stays a bit longer.
// heading: optional small line above the message (the message is then shown bold)
// icon: optional pixel icon path (24×24 grid, like the achievement icons) shown left of the text
const showToast = (message, action = null, heading = null, icon = null) => {
    toast.value = { message, heading, action, icon, visible: toast.value.visible };
    if (toastTimeout) {
        clearTimeout(toastTimeout);
    }
    setTimeout(() => {
        toast.value.visible = true;
    }, 100);
    toastTimeout = setTimeout(hideToast, action ? 5000 : 3000);
};

const hideToast = () => {
    toast.value.visible = false;
};

const handleToastClick = () => {
    const run = toast.value.action?.run
    hideToast()
    run?.()
};

registerAchievementToast((achievement) => {
    if (achievement?.isReset) {
        const message = currentLanguage.value === 'en' ? 'All achievements reset' : 'Alle Achievements zurückgesetzt'
        showToast(message)
    } else if (achievement?.isThemeClaimed) {
        const themeId = achievement?.themeId || ''
        showToast(themeId, {
            label: currentLanguage.value === 'en' ? 'apply' : 'anwenden',
            run: () => setTheme(themeId)
        }, currentLanguage.value === 'en' ? 'Theme unlocked' : 'Theme freigeschaltet')
    } else {
        showToast(achievement?.title || '', route.path === '/achievements' ? null : {
            label: currentLanguage.value === 'en' ? 'view' : 'ansehen',
            link: '/achievements'
        }, currentLanguage.value === 'en' ? 'Achievement unlocked' : 'Achievement freigeschaltet', achievement?.svg)
    }
})

const toClipboard = (text) => {
    navigator.clipboard.writeText(text);
    showToast(currentLanguage.value === 'en' ? 'Copied to clipboard' : 'In die Zwischenablage kopiert');
}

const handleAchievementLinkClick = (event) => {
    const link = event.target.closest?.('a')

    if (!link) {
        return
    }

    registerLinkClick(link.getAttribute('href') || '')
}

const handleHeartClick = () => {
    unlockAchievement('i-love-love')
}

const handleTouchMove = (e) => {
    if (cursor.value) {
        cursor.value.style.display = 'none';
    }
}

let cursorTimeout = null;

const handleTouchStart = (e) => {
    clearTimeout(cursorTimeout);
    removeTooltip();
    if (cursor.value) {
        cursor.value.style.animation = '';
        cursor.value.style.opacity = 1;
    }
}

const handleTouchEnd = (e) => {
    if (cursor.value) {
        cursorTimeout = setTimeout(() => {
            removeTooltip();
            cursor.value.style.animation = 'fadeout 0.5s forwards';
        }, 1000);
    }
}

onMounted(() => {

    checkIsMobile()
    registerSiteVisit()
    registerNocturnalVisit()
    handleViewportAchievement()

    window.addEventListener('mousemove', updateCursor);
    window.addEventListener('touchmove', handleTouchMove, { passive: false });
    window.addEventListener('touchstart', handleTouchStart, { passive: false });
    window.addEventListener('touchend', handleTouchEnd, { passive: false });
    window.addEventListener('resize', handleViewportAchievement);
    document.addEventListener('mouseover', handlePointerOver);
    document.addEventListener('mouseout', handlePointerLeaveWindow);
    document.addEventListener('keydown', handleButtonKeydown);

    const link = document.createElement('link');
    link.id = 'cursor-style';
    link.rel = 'stylesheet';
    link.href = isCustomCursor.value ? customCursorStyle : defaultCursorStyle;
    document.head.appendChild(link);

    const handleClickOutside = (event) => {
        const moreMenu = document.querySelector('.more');
        if (moreMenu && !moreMenu.contains(event.target)) {
            moreVisible.value = false;
        }
    };

    document.addEventListener('click', handleClickOutside);
    document.addEventListener('click', handleAchievementLinkClick);
    document.addEventListener('click', handleCopyClick);

    onUnmounted(() => {
        window.removeEventListener('touchstart', handleTouchStart)
        window.removeEventListener('touchend', handleTouchEnd)
        window.removeEventListener('touchmove', handleTouchMove)
        window.removeEventListener('mousemove', updateCursor)
        window.removeEventListener('resize', handleViewportAchievement)
        document.removeEventListener('mouseover', handlePointerOver)
        document.removeEventListener('mouseout', handlePointerLeaveWindow)
        document.removeEventListener('keydown', handleButtonKeydown)
        document.removeEventListener('click', handleClickOutside);
        document.removeEventListener('click', handleAchievementLinkClick);
        document.removeEventListener('click', handleCopyClick);
    })
})
</script>

<style scoped>
header {
    background-color: rgba(var(--navy-rgb), 0.7);
    backdrop-filter: blur(1rem) saturate(2);
    position: fixed;
    top: 0;
    left: 0;
    width: 100vw;
    z-index: 10;
}

nav {
    display: flex;
    justify-content: space-between;
    align-items: center;
}

.nav-item {
    width: 50vw;
    font-family: 'Funnel Sans Variable', sans-serif;
    font-weight: 700;
    font-size: 1.2rem;
    color: var(--sky);
    text-align: center;
    padding: 1.5rem 0;
}

.nav-item.left {
    margin-right: 6rem;
}

.nav-item.right {
    margin-left: 6rem;
}

.nav-item:hover {
    color: var(--aqua);
}

.nav-item.left:hover {
    background: linear-gradient(to right, var(--deep) 0%, rgba(var(--navy-rgb), 0) 50%);
}

.nav-item.right:hover {
    background: linear-gradient(to left, var(--deep) 0%, rgba(var(--navy-rgb), 0) 50%);
}

.nav-item.selected {
    color: var(--white);
}

.nav-item.left.selected {
    background: linear-gradient(to right,
            var(--aqua) 0%,
            var(--mint) 10%,
            var(--sky) 20%,
            var(--deep) 35%,
            rgba(var(--navy-rgb), 0));
}

.nav-item.right.selected {
    background: linear-gradient(to left,
            var(--aqua) 0%,
            var(--mint) 10%,
            var(--sky) 20%,
            var(--deep) 35%,
            rgba(var(--navy-rgb), 0) 100%);
}

.nav-item:active {
    color: var(--white);
}

.nav-item.left:active {
    background: linear-gradient(to right,
            var(--white),
            var(--aqua) 10%,
            var(--mint) 20%,
            var(--sky) 30%,
            var(--deep) 45%,
            rgba(var(--navy-rgb), 0));
}

.nav-item.right:active {
    background: linear-gradient(to left,
            var(--white),
            var(--aqua) 10%,
            var(--mint) 20%,
            var(--sky) 30%,
            var(--deep) 45%,
            rgba(var(--navy-rgb), 0) 100%);
}

.logo {
    font-family: 'Funnel Display Variable', sans-serif;
    font-weight: 800;
    font-size: 2.5rem;
    background: linear-gradient(to right, var(--aqua), var(--mint), var(--sky), var(--deep));
    background-clip: text;
    -webkit-background-clip: text;
    color: transparent;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    transition: all 0.5s;
}

.logo.reverse {
    background: linear-gradient(to left, var(--aqua), var(--mint), var(--sky), var(--deep));
    background-clip: text;
    -webkit-background-clip: text;
}

.logo.center {
    background: linear-gradient(to left, var(--deep), var(--sky), var(--mint), var(--sky), var(--deep));
    background-clip: text;
    -webkit-background-clip: text;
}

.logo:hover {
    transform: translate(-50%, -50%) scale(1.1);
}

.more {
    position: fixed;
    bottom: 2rem;
    right: 0;
    width: fit-content;
    transform: translate(calc(100% - 4rem), 0);
    height: 2.5rem;
    overflow: hidden;
    display: flex;
    align-items: center;
    gap: 2rem;
    padding: 0.5rem 5rem 0.5rem 0.5rem;
    font-size: 2rem;
    background-color: rgba(var(--deep-rgb), 0.5);
    backdrop-filter: blur(1rem) saturate(2);
    color: var(--sky);
    z-index: 10;
    transition: all 0.5s;
}

.more-icon {
    padding: 0.5rem;
    transform: rotate(0);
    cursor: pointer;
    transition: transform 0.5s;
}

.more.open {
    transform: translate(2rem, 0);
    background-color: rgba(var(--deep-rgb), 0.5);

    .more-icon {
        transform: rotate(-180deg);
    }

    .more-item {
        opacity: 1;
    }
}

.more:hover {
    background-color: rgba(var(--deep-rgb), 0.7);
}

.more:has(.more-icon:nth-of-type(1):hover) {
    transform: translate(calc(100% - 5rem), 0);
}

.more.open:has(.more-icon:nth-of-type(1):hover) {
    transform: translate(3rem, 0);
}

.more-items {
    display: flex;
    gap: 1.5rem;
}

.more-item {
    font-size: 1.5rem;
    color: var(--sky);
    opacity: 0;
    cursor: pointer;
    transition: opacity 0.5s;
}

.more-icon:hover,
.more-item:hover {
    color: var(--aqua);
}

.more-icon:active,
.more-item:active {
    color: var(--mint);
}

#toast {
    position: fixed;
    bottom: 2rem;
    left: 50%;
    transform: translate(-50%, 0) translateY(2rem);
    padding: 1rem 2rem;
    text-align: center;
    background: rgba(var(--deep-rgb), 0.5);
    backdrop-filter: blur(1rem) saturate(2);
    color: var(--white);
    z-index: 1000;
    pointer-events: none;
    opacity: 0;
    transition: all 0.5s ease;
}

#toast.visible {
    opacity: 1;
    transform: translate(-50%, 0) translateY(0);
}

#toast.has-icon {
    display: flex;
    align-items: center;
    gap: 1rem;
    padding-left: 1.25rem;
}

#toast.action {
    display: flex;
    align-items: last baseline;
    gap: 1rem;
    padding-right: 1.25rem;
    text-decoration: none;
}

#toast.action.visible {
    pointer-events: auto;
    cursor: pointer;
}

#toast.action::before {
    content: '';
    position: absolute;
    inset: 0;
    z-index: -1;
    background: linear-gradient(to right, transparent, rgba(var(--sky-rgb), 0.5) 150%);
    opacity: 0;
    transition: opacity 0.3s;
}

#toast.action:hover::before {
    opacity: 1;
}

.toast-icon {
    flex: none;
    align-self: center;
    width: 2.5rem;
    height: 2.5rem;
    fill: var(--aqua);
}

.toast-text {
    display: flex;
    flex-direction: column;
    text-align: left;
}

.toast-heading {
    color: var(--aqua);
}

.toast-message {
    font-weight: 700;
}

.toast-action {
    display: flex;
    align-items: center;
    gap: 0.4rem;
    font-weight: 700;
    color: var(--mint);
    white-space: nowrap;

    svg {
        font-size: 1.2rem;
        transition: transform 0.3s;
    }
}

#toast.action:hover {
    .toast-action {
        color: var(--white);

        svg {
            transform: translateX(0.2rem);
        }
    }
}

/* reaches below the screen: Safari on iOS 26 shows the page behind its see-through toolbar */
.fade-out {
    position: fixed;
    bottom: -10rem;
    left: 0;
    width: 100%;
    height: 16rem;
    pointer-events: none;
    backdrop-filter: blur(1rem);
    mask: linear-gradient(to bottom, transparent, var(--white) 6rem);
    z-index: 10;
}

footer {
    position: absolute;
    left: 0;
    width: 100%;
    text-align: center;
    color: var(--mint);
    background: linear-gradient(to bottom, var(--deep), transparent 75%);
    padding-top: 1.2rem;
    padding-bottom: 1.5rem;
    display: flex;
    flex-direction: column;
    gap: 1.2rem;
}

.heart {
    color: var(--pink);
    transition: color 0.5s ease, transform 0.05s ease-out;
}

.heart:hover {
    color: var(--white);
}

.heart:active {
    transform: scale(1.2);
}

.social {
    font-size: 1.2rem;
    color: var(--mint);
    margin: 1rem 0.5rem;
    filter: drop-shadow(0 0 0 var(--navy));
    transition: all 0.5s ease;
}

.social:hover {
    color: var(--white);
    filter: drop-shadow(0 0 0.5rem var(--mint));
}

.copyright {
    font-weight: 700;
    color: var(--deep);

    .footer-toggle {
        display: inline;
        width: auto;
        height: auto;
        padding: 0;
        font: inherit;
        color: inherit;
        background: none;
        transition: color 0.5s;
    }

    .footer-toggle:hover,
    .footer-panel a:hover {
        color: var(--sky);
    }

    .footer-panel {
        display: grid;
        grid-template-rows: 0fr;
        font-weight: 400;
        transition: grid-template-rows 0.5s;
    }

    .footer-panel.open {
        grid-template-rows: 1fr;
    }

    .footer-panel-inner {
        min-height: 0;
        overflow: hidden;
        padding: 0 1rem;
    }

    .footer-panel-inner::before {
        content: '';
        display: block;
        height: 0.6rem;
    }
}

/* keeps the toast above the "more" menu where they would overlap */
@media (max-width: 1000px) {
    #toast {
        bottom: 6.25rem;
        width: max-content;
        max-width: calc(100vw - 2rem);
        box-sizing: border-box;
    }
}

@media (max-width: 600px) {
    .nav-item {
        font-size: 1rem;
        padding: 1.2rem 0;
    }

    .nav-item.left {
        margin-right: 2rem;
    }

    .nav-item.right {
        margin-left: 2rem;
    }

    .logo {
        font-size: 2rem;
    }
}
</style>