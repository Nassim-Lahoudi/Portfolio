import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

import { cloudflare } from "@cloudflare/vite-plugin";

export default defineConfig({
  plugins: [react(), cloudflare()],
  root: '.', // oder 'src', wenn deine index.html in src/ liegt
  build: {
    outDir: 'dist',
  },
})