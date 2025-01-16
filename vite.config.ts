import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  base: '/portfolio-student/', // Ensure this matches your repository name
  plugins: [react()],
})
