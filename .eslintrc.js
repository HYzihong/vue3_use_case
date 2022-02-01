/**
 * @Author: hy
 * @Date: 2022-02-01 03:53:27
 * @LastEditors: hy
 * @Description:
 * @LastEditTime: 2022-02-01 21:13:16
 * @FilePath: /vue3UseCase/.eslintrc.js
 * @Copyright 2022 hy, All Rights Reserved.
 * @仅供学习使用~
 * */
module.exports = {
  root: true,
  env: {
    browser: true,
    node: true,
    es6: true,
  },
  parser: 'vue-eslint-parser',
  parserOptions: {
    parser: '@typescript-eslint/parser',
    ecmaVersion: 2020,
    sourceType: 'module',
    jsxPragma: 'React',
    ecmaFeatures: {
      jsx: true,
    },
  },
  settings: {
    // @路径引入的文件也需要校验
    // eslint-import-resolver-typescript
    'import/resolver': {
      alias: {
        map: [
          ['@', './src'],
          ['@views', './src/views'],
          ['@types', './src/types'],
          ['@comps', './src/comps'],
          ['@utils', './src/utils'],
        ],
        extensions: ['.ts', '.js', '.jsx', '.tsx', '.json', '.vue'],
      },
    },
  },
  plugins: ['vue'],
  extends: [
    'plugin:@typescript-eslint/recommended',
    'plugin:vue/vue3-recommended',
    'plugin:prettier/recommended',
    'prettier',
    'airbnb-base',
  ],
};
