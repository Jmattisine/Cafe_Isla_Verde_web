// vite.config.js
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// 👇 PON AQUÍ EL NOMBRE EXACTO DEL REPO ENTRE SLASHES
export default defineConfig({
  plugins: [react()],
  base: '/Cafe_Isla_Verde_web/', // <= si tu repo se llama distinto, cámbialo
})
