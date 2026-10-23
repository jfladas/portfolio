// fonts are served from the site itself; the two main ones are also preloaded in index.html (see vite.config.js)
import '@fontsource-variable/funnel-sans'
import '@fontsource-variable/funnel-display'
import '@fontsource-variable/jetbrains-mono'
import '@fontsource/dotgothic16'
import './assets/base.css'

import { createApp } from 'vue'
import App from './App.vue'
import router from './router'

import './icons.js'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

const app = createApp(App)

app.component('font-awesome-icon', FontAwesomeIcon)

app.use(router)

// wait briefly for the two main fonts before showing any text, so it never jumps from a fallback font to the real one
// (they're preloaded, so this is usually instant; after 600 ms the page shows anyway)
const mainFonts = ['16px "Funnel Sans Variable"', '800 16px "Funnel Display Variable"']
const fontsReady = Promise.all(mainFonts.map((font) => document.fonts.load(font))).catch(() => {})
const fontTimeout = new Promise((resolve) => setTimeout(resolve, 600))

Promise.race([fontsReady, fontTimeout]).then(() => app.mount('#app'))
