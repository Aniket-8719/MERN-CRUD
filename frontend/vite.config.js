import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  server: {
    proxy: {
      '/api': {
        target: 'http://127.0.0.1:5000', // Your backend server address
        changeOrigin: true,
        rewrite: (path) => path.replace(/^\/api/, "api"), // Optional if your backend doesn't use the `/api` prefix
      },
      // Add other proxy rules here if needed
    },
  },
  plugins: [react()],
})
