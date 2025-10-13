import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  root: '.', // oder 'src', wenn deine index.html in src/ liegt
  build: {
    outDir: 'dist',
  },
})
