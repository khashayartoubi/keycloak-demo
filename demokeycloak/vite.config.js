import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  // server: {
  //   proxy: {
  //     "/document": "http://localhost:5000/document"
  //   }
  // },
  plugins: [react()],
})
