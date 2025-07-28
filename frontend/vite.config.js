import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    react(),
    tailwindcss({
      theme: {
        extend: {
          transitionTimingFunction: {
            'custom': 'cubic-bezier(0.4, 0, 0.2, 1)',
          }
        },
      },
    }),
  ],
})
