import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import path from 'path'
// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve:{
    alias:{
      '@':path.resolve(__dirname,'src'),
      '#':path.resolve(__dirname,'myData')
    }
  }
})

// import path from 'path';

// export default {
//   resolve: {
//     alias: {
//       '@': path.resolve(new URL('.', import.meta.url).pathname, 'src'),
//     },
//   },
// };

// _dirname is a gloabel variable in node.js