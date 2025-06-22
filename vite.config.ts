import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  base: '/', // ✅ THIS LINE IS CRUCIAL
  plugins: [react()],
})
