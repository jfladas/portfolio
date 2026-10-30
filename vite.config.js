import { fileURLToPath, URL } from 'node:url'

import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import vueDevTools from 'vite-plugin-vue-devtools'
import { imagetools } from 'vite-imagetools'
import Icons from 'unplugin-icons/vite'
import { FileSystemIconLoader } from 'unplugin-icons/loaders'
import { projectPreviews } from './scripts/project-previews.js'

// Shrinks images at build time; the source files keep full size.
// - project covers: 1200px wide, since they double as link-preview images (og:image), so they stay JPEG/PNG
// - the photos of me on the about page: 1000px wide, WebP
// - gallery images of projects and the about page: at most 2000px wide (still sharp in fullscreen), WebP
//   (PNG screenshots barely shrink otherwise)
// Not touched: GIFs (animated) and the solarsystem renders, which are also offered as full-size downloads.
const resizedImages = /\/src\/(assets\/me(_\w+)?\.jpg|assets\/about\/[^/]+\.(jpe?g|png)|projects\/(?!solarsystem\/)[^/]+\/[^/]+\.(jpe?g|png))$/i
const resizedImageDirectives = (url) => {
  if (/\/projects\/[^/]+\/cover\.\w+$/.test(url.pathname)) {
    return new URLSearchParams({ w: '1200', quality: '80', progressive: 'true' })
  }

  if (/\/assets\/me(_\w+)?\.jpg$/.test(url.pathname)) {
    return new URLSearchParams({ w: '1000', quality: '80', format: 'webp' })
  }

  return new URLSearchParams({ w: '2000', quality: '82', format: 'webp' })
}

// Preloads the two main fonts and DotGothic16 for the heart counts (Latin only, the part that text needs). The page's
// text only appears once Vue has rendered, and browsers only fetch a font once text uses it, so without this the text
// first shows in a fallback font and then jumps when the real one arrives.
const preloadedFonts = /\/(funnel-(sans|display)-latin-wght|dotgothic16-latin-400)-normal\.woff2$/
const preloadFonts = () => ({
  name: 'preload-fonts',
  apply: 'build',
  transformIndexHtml(html, { bundle }) {
    return Object.values(bundle)
      .filter((file) => preloadedFonts.test(`/${file.fileName}`))
      .map((file) => ({
        tag: 'link',
        attrs: { rel: 'preload', as: 'font', type: 'font/woff2', href: `/${file.fileName}`, crossorigin: '' },
        injectTo: 'head-prepend',
      }))
  },
})

// Keyboard focus (Tab) shows the same styles as mouse hover. For every rule with `X:hover`, adds copies where
// X is focused itself (X:focus-visible), X contains the focused element (X:has(:focus-visible)),
// or X sits directly inside the focused element (:focus-visible > X, e.g. a styled <button> inside a link).
// Each copy is a separate rule, so a variant a browser can't parse never disables the original hover rule.
const focusLikeHover = () => ({
  postcssPlugin: 'focus-like-hover',
  Rule(rule) {
    if (!rule.selector.includes(':hover')) {
      return
    }

    const variants = new Set()

    for (const selector of rule.selectors) {
      const index = selector.indexOf(':hover')

      if (index < 0) {
        continue
      }

      // find where the compound selector containing :hover starts, and whether :hover sits inside parentheses
      let depth = 0
      let start = 0

      for (let i = index - 1; i >= 0; i--) {
        const char = selector[i]

        if (char === ')') depth++
        else if (char === '(') {
          if (depth === 0) { start = -1; break }
          depth--
        } else if (depth === 0 && ' >+~'.includes(char)) { start = i + 1; break }
      }

      const compound = selector.slice(Math.max(start, 0), index)

      if (compound.includes('::')) {
        continue
      }

      variants.add(selector.replaceAll(':hover', ':focus-visible'))

      if (start >= 0) {
        const before = selector.slice(0, start)
        const after = selector.slice(index + ':hover'.length)
        variants.add(`${before}${compound}:has(:focus-visible)${after}`)
        variants.add(`${before}:focus-visible > ${compound}${after}`)
      }
    }

    for (const selector of [...variants].reverse()) {
      rule.cloneAfter({ selector })
    }
  }
})

// https://vite.dev/config/
export default defineConfig({
  base: "/",
  plugins: [
    vue(),
    vueDevTools(),
    imagetools({
      include: resizedImages,
      defaultDirectives: resizedImageDirectives,
    }),
    preloadFonts(),
    projectPreviews(),
    // icons are compiled into the bundle at build time, so nothing loads from Iconify at runtime (map: src/icons.js)
    Icons({
      compiler: 'vue3',
      scale: 1,
      customCollections: {
        // the pixel hearts in src/assets/icons/pixel, drawn on the pixelarticons grid
        pixel: FileSystemIconLoader('./src/assets/icons/pixel'),
      },
    }),
  ],
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url))
    },
  },
  css: {
    postcss: {
      plugins: [focusLikeHover()],
    },
  },
  assetsInclude: ['**/*.zip', '**/*.ppsx', '**/*.apk', '**/*.exe', '**/*.dmg'],
  build: {
    rollupOptions: {
      output: {
        // hash goes in the folder so downloaded files keep their original names
        assetFileNames: 'assets/[hash]/[name][extname]',
      },
    },
  },
})