/*
 * @Author: hy
 * @Date: 2022-02-01 01:19:55
 * @LastEditors: hy
 * @Description:
 * @FilePath: /vue3UseCase/vite.config.ts
 * Copyright 2022 hy, All Rights Reserved.
 * 仅供学习使用~
 */
import { defineConfig } from 'vite';
import { resolve } from 'path';
import path from 'path';
// plugins
import vue from '@vitejs/plugin-vue';
import VueI18n from '@intlify/vite-plugin-vue-i18n';
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
    // https://github.com/intlify/bundle-tools/tree/main/packages/vite-plugin-vue-i18n
    VueI18n({
      runtimeOnly: true,
      compositionOnly: true,
      include: [path.resolve(__dirname, 'locales/**')],
    }),
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
      imports: ['vue', 'vue-router', 'vue-i18n', '@vueuse/core'],
      dts: 'src/types/auto-import.d.ts',
    }),
    Icons({
      autoInstall: true,
    }),
    // https://github.com/hannoeru/vite-plugin-pages
    Pages({
      // default
      pagesDir: 'src/views',
      extensions: ['vue', 'ts', 'tsx'],
      // extensions: ['vue', 'md'],
      importMode: 'async',
      // 只要包含fruits的路由，就会变为异步懒加载
      // importMode(path) {
      //   return path.includes('fruits') ? 'async' : 'sync'
      // },
      extendRoute(route: any, parent: any) {
        // 可以获取到每个单个路由对象，可以增加字段
        // console.log('extendRoute ==>', route);
        console.log('extendRoute ==>', route, parent);
        // return {
        //   ...route,
        //   meta: { layout: 'layout' },
        // };
      },
      // 自动剔除不要被注册到路由的
      exclude: ['**/components/**/*.vue', '**/*.d.ts', '**/hooks/*.ts'],
      // onRoutesGenerated(routes: any[]) {
      // TODO 路由守卫在哪里写 这里，还是src/routers/index.ts
      // TODO 路由重定向
      //   // 可以获取到完整的route[]，通过循环遍历获取之后对route进行处理
      //   console.log('onRoutesGenerated ==>', routes);
      //   routes.forEach((route) => {
      //     console.log('path ==>', route.path);
      //     return {
      //       ...route,
      //       meta: { layout: 'layout' },
      //     };
      //   });
      // },
      // onClientGenerated(clientCode: string) {
      //   // 能够完整获取到我们实际生成string格式的(客户端)路由的完整代码
      //   // 可以通过正则对这个方法进行替换，或者各种字符串骚操作进行替换???
      //   console.log('onClientGenerated ==>', clientCode);
      // },
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
