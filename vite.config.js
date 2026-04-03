import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  base: './', // Relative base for both GitHub Pages and Surge deployment
  build: {
    outDir: 'dist',
  }
})
