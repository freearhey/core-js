import { defineConfig } from 'vite'
import { resolve } from 'node:path'

export default defineConfig({
  build: {
    lib: {
      entry: resolve(__dirname, 'dist/index.browser.js'),
      name: '@freearhey/core',
      fileName: 'index.browser'
    },
    outDir: 'dist',
    emptyOutDir: false
  }
})
