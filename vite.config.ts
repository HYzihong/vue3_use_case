/*
 * @Author: hy
 * @Date: 2022-02-01 01:19:55
 * @LastEditors: hy
 * @Description:
 * @LastEditTime: 2022-02-14 22:41:57
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

function pathResolve(dir: string) {
  // console.log(resolve(process.cwd(), ".", dir));
  return resolve(process.cwd(), '.', dir);
}

export default defineConfig({
  plugins: [vue(), WindiCSS(), jsx()],
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
});
