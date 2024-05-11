import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  base: "/portfolio/",
  assetsInclude: ['**/*.glb'],
  plugins: [react()],
})
