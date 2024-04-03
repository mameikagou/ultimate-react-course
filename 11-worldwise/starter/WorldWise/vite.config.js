import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { resolve } from 'path'
// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve:{
    alias:{
      '@':resolve(__dirname,'src'),
      '@css':resolve(__dirname,'src/css'),
      '@pages':resolve(__dirname,'src/pages'),
      '@components':resolve(__dirname,'src/components'),
      '@utils':resolve(__dirname,'src/utils'),
      '@assets':resolve(__dirname,'src/assets'),
      '@store':resolve(__dirname,'src/store'),
      '@hooks':resolve(__dirname,'src/hooks'),
      '@router':resolve(__dirname,'src/router'),
    }
  },
})
