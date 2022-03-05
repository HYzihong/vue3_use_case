/*
 * @Author: hy
 * @Date: 2022-02-01 01:19:55
 * @LastEditors: hy
 * @Description:
 * @LastEditTime: 2022-03-05 16:21:02
 * @FilePath: /vue3UseCase/vite.config.ts
 * Copyright 2022 hy, All Rights Reserved.
 * 仅供学习使用~
 */
import { defineConfig } from 'vite';
import { resolve } from 'path';
// plugins
import vue from '@vitejs/plugin-vue';
import WindiCSS from 'vite-plugin-windicss';
import jsx from '@vitejs/plugin-vue-jsx';
import AutoImport from 'unplugin-auto-import/vite';
import Components from 'unplugin-vue-components/vite';
import { ElementPlusResolver } from 'unplugin-vue-components/resolvers';
import Icons from 'unplugin-icons/vite';
import IconsResolver from 'unplugin-icons/resolver';
import Pages from 'vite-plugin-pages';

function pathResolve(dir: string) {
  // console.log(resolve(process.cwd(), ".", dir));
  return resolve(process.cwd(), '.', dir);
}

export default defineConfig({
  plugins: [
    vue(),
    WindiCSS(),
    jsx(),
    // 按需引入
    // AutoImport({
    //   resolvers: [ElementPlusResolver()],
    // }),
    // Components({
    //   resolvers: [ElementPlusResolver()],
    // }),
    Components({
      dirs: ['src/components'],
      // extensions: ['vue', 'ts', 'tsx'],
      dts: 'src/types/components.d.ts',
      resolvers: [
        // 自动导入 Element Plus 组件
        ElementPlusResolver({
          importStyle: 'sass',
          directives: true,
          version: '1.3.0-beta.10',
        }),
        // 自动导入Icon
        IconsResolver({
          enabledCollections: ['ep'],
        }),
      ],
    }),
    AutoImport({
      resolvers: [ElementPlusResolver()],
      imports: ['vue', 'vue-router', '@vueuse/core'],
      dts: 'src/types/auto-import.d.ts',
    }),
    Icons({
      autoInstall: true,
    }),
    Pages({
      // default
      pagesDir: 'src/views',
      extensions: ['vue'],
      // extensions: ['vue', 'md'],
      importMode: 'async',
      // 只要包含fruits的路由，就会变为异步懒加载
      // importMode(path) {
      //   return path.includes('fruits') ? 'async' : 'sync'
      // },
      extendRoute(route: any, parent: any) {
        console.log('extendRoute ==>', route, parent);
      },
      // 当识别到的文件路径包含以下字段时，会自动剔除，比如我们的一些特定的小组件
      exclude: ['**/components/*', '**/hooks/*'], // 这里的作用是将src目录下，不将含有component字段的组件生成为页面
      onRoutesGenerated(routes: any[]) {
        console.log('onRoutesGenerated ==>', routes);
      },
      onClientGenerated(clientCode: string) {
        console.log('onClientGenerated ==>', clientCode);
      },
    }),
  ],
  resolve: {
    alias: [
      {
        find: /\@\//,
        replacement: pathResolve('src') + '/',
      },
      {
        find: /\@views\//,
        replacement: pathResolve('src/views') + '/',
      },
      {
        find: /\@types\//,
        replacement: pathResolve('src/types') + '/',
      },
      {
        find: /\@comps\//,
        replacement: pathResolve('src/components') + '/',
      },
      {
        find: /\@utils\//,
        replacement: pathResolve('src/utils') + '/',
      },
    ],
  },
  css: {
    preprocessorOptions: {
      scss: {
        additionalData: `@use "./src/styles/index.scss" as *;`,
        // additionalData: `@use "./src/styles/elementPlus/index.scss" as *;`,
        // additionalData: `@use "./src/styles/index.scss" as *;@use "./src/styles/elementPlus/index.scss" as *;`,
        // additionalData: `@use "./src/styles/index.scss" as *;@use "./src/styles/elementPlus/index.scss" as *;@use 'element-plus/theme-chalk/index.css' as *;`,
        charset: false,
      },
    },
  },
  build: {
    sourcemap: true, // 输出.map文件
    minify: 'esbuild', // 混淆器，terser构建后文件体积更小
    target: 'esnext',
    chunkSizeWarningLimit: 600,
    manifest: true,
    // terserOptions: {
    //   compress: {
    //     drop_console: true,
    //     // drop_debugger: true,
    //   },
    // },
    rollupOptions: {
      output: {
        chunkFileNames: 'static/js/[name]-[hash].js',
        // manualChunks(id) {
        //   if (id.includes('node_modules')) {
        //     return id.toString().split('node_modules/')[1].split('/')[0].toString();
        //   }
        // },
        manualChunks: {
          // 'element-plus': ['element-plus'],
          ui: ['element-plus', 'windicss', 'figlet', 'vue-grid-layout'],
          pnpm: ['dayjs', 'pinia', 'vue', 'vue-router'],
        },
      },
    },
  },
});
