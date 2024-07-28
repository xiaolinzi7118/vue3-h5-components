import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import styleImport, { VantResolve } from 'vite-plugin-style-import';

// https://vitejs.dev/config/
export default defineConfig((command) => {
  console.log('command: ', command);
  const config = {
    plugins: [
      vue(),
      styleImport({
        resolves: [VantResolve()],
        libs: [
          {
            libraryName: 'vant',
            esModule: true,
            resolveStyle: name => `../es/${name}/style`
          }
        ]
      })
    ],
    css: {
      preprocessorOptions: {
        less: {
          charset: false,
          additionalData: '@import "./src/assets/css/global.less";' // 加载全局样式，使用less特性
        }
      }
    }
  }
  if (command.mode === 'components') {
    // 打包组件
    config.build = {
      //打包后文件目录
      outDir: "es",
      //压缩
      minify: false,
      rollupOptions: {
        //忽略打包vue文件
        external: ["vue"],
        //input: ["index.ts"],
        output: {
          globals: {
            vue: "Vue",
          },
          dir: "libComponents",
        },
      },
      lib: {
        entry: "./index.js",
        name: "myComponent",
        fileName: "myComponent",
        formats: ["es", "umd", "cjs"],
      },
    }
  }
  return config
})
