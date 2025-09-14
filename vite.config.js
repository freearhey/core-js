import { defineConfig } from 'vite'
import { resolve } from 'node:path'

export default defineConfig({
  build: {
    lib: {
      entry: resolve(__dirname, 'dist/index.js'),
      name: '@freearhey/core',
      fileName: 'index'
    },
    outDir: 'dist',
    emptyOutDir: false
  }
})
