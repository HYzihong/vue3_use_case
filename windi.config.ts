/*
 * @Author: hy
 * @Date: 2022-02-01 03:57:30
 * @LastEditors: hy
 * @Description:
 * @LastEditTime: 2022-02-01 21:16:15
 * @FilePath: /vue3UseCase/windi.config.ts
 * Copyright 2022 hy, All Rights Reserved.
 * 仅供学习使用~
 */
import { defineConfig } from 'windicss/helpers';
// import { defineConfig } from 'vite-plugin-windicss';

export default defineConfig({
  darkMode: 'class',
  extract: {
    include: ['./src/**/*.vue', './src/**/*.jsx', './src/**/*.tsx'],
  },
  theme: {
    extend: {
      //     min-width
      minWidth: {
        '1/5': '20%',
        '1/4': '25%',
        '1/2': '50%',
        '3/4': '75%',
        full: '100%',
      },
      screens: {
        sm: '576px',
        md: '768px',
        lg: '992px',
        xl: '1200px',
        '2xl': '1600px',
      },
    },
  },
  plugins: [],
  // alias: {},
});
