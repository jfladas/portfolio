import { fileURLToPath, URL } from 'node:url'

import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import vueDevTools from 'vite-plugin-vue-devtools'

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