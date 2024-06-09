import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    // Define your server options here
    open: true, // Automatically open the browser on server start
    port: 3000, // Specify the port number (default is 3000)

  },
})
