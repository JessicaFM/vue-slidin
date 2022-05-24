import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
const path = require('path')

export default defineConfig({
  build: {
    lib: {
      entry: path.resolve(__dirname, 'src/components/index.js'),
      name: 'VueSlidin',
      fileName: (format) => `vue-slidin.${format}.js`,
    },
    rollupOptions: {
      external: ['vue'],
      output:{
        globals: {
          vue: 'Vue'
        }
      }
    }
  },
  plugins: [vue()]
})
