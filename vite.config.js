import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import svgLoader from 'vite-svg-loader'
import path from 'path'

// https://vitejs.dev/config/
export default defineConfig({
  build: {
    outDir: 'distr'
  },

  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
    }
  },
  

  plugins: [
    vue(),
    svgLoader()
  ],

})
