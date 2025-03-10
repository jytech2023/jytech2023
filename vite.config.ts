import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  base: '/jytech2023/',
  css: {
    postcss: './postcss.config.cjs',
  },
})
