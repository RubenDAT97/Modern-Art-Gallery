import { defineConfig } from 'vite'

export default defineConfig({
  base: '/Modern-Art-Gallery/',
  build: {
    rollupOptions: {
      input: {
        main: 'index.html',
        direction: 'direction.html'
      }
    }
  }
})