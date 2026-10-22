import { fileURLToPath, URL } from 'node:url'

import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import vueDevTools from 'vite-plugin-vue-devtools'

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