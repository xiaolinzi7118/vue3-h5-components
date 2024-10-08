import { fileURLToPath, URL } from 'node:url'
import { resolve } from 'path'

import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

const __dirname = () => {
  const url = new URL('.', import.meta.url)
  return fileURLToPath(url)
}

// https://vitejs.dev/config/
export default defineConfig({
  // vite.config.js
  build: {
    lib: {
      // Could also be a dictionary or array of multiple entry points
      entry: resolve(__dirname(), 'src/index.js'),
      name: 'MyLib',
      // the proper extensions will be added
      fileName: (format) => `my-lib.${format}.js`
    },
    minify: false,
    rollupOptions: {
      // 确保外部化处理那些你不想打包进库的依赖
      external: ['vue'],
      output: {
        // 在 UMD 构建模式下为这些外部化的依赖提供一个全局变量
        globals: {
          vue: 'Vue'
        },
        dir: "libComponent",
      }
    }
  },

  plugins: [vue()],
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url))
    }
  },
  define: {
    'process.env' : {
      NODE_ENV: process.env.NODE_ENV // 将属性转化为全局变量，让代码中可以正常访问
    }
  }
})
