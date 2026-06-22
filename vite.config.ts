import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// GitHub Pages project site: https://nitin-7477.github.io/nitin-portfolio/
// Use relative paths (./) so assets resolve correctly on any subdirectory.
const base = process.env.VITE_BASE_PATH ?? '/'

export default defineConfig({
  plugins: [react()],
  base,
})
