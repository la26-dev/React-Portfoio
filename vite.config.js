import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'


export default defineConfig({
  
  plugins: [react()],
  base: '/React-Portfoio/',
  build: {
    outDir: 'docs',
    assetsDir: 'assets'
  }
})
