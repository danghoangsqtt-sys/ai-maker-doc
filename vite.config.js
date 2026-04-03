import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  base: '/ai-maker-doc/', // For Github Pages deployment
  build: {
    outDir: 'dist',
  }
})
