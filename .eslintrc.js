/**
 * @Author: hy
 * @Date: 2022-02-01 03:53:27
 * @LastEditors: hy
 * @Description:
 * @LastEditTime: 2022-02-07 23:12:23
 * @FilePath: /vue3UseCase/.eslintrc.js
 * @Copyright 2022 hy, All Rights Reserved.
 * @仅供学习使用~
 * */

// copy by vue-vben-admin
const { defineConfig } = require('eslint-define-config');
// import { defineConfig } from 'eslint-define-config';
module.exports = defineConfig({
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
  extends: [
    'plugin:vue/vue3-recommended',
    'plugin:@typescript-eslint/recommended',
    'prettier',
    'plugin:prettier/recommended',
    // 'plugin:jest/recommended',
  ],
  rules: {
    'vue/script-setup-uses-vars': 'error',
    '@typescript-eslint/ban-ts-ignore': 'off',
    '@typescript-eslint/explicit-function-return-type': 'off',
    '@typescript-eslint/no-explicit-any': 'off',
    '@typescript-eslint/no-var-requires': 'off',
    '@typescript-eslint/no-empty-function': 'off',
    'vue/custom-event-name-casing': 'off',
    'no-use-before-define': 'off',
    '@typescript-eslint/no-use-before-define': 'off',
    '@typescript-eslint/ban-ts-comment': 'off',
    '@typescript-eslint/ban-types': 'off',
    '@typescript-eslint/no-non-null-assertion': 'off',
    '@typescript-eslint/explicit-module-boundary-types': 'off',
    '@typescript-eslint/no-unused-vars': [
      'error',
      {
        argsIgnorePattern: '^_',
        varsIgnorePattern: '^_',
      },
    ],
    'no-unused-vars': [
      'error',
      {
        argsIgnorePattern: '^_',
        varsIgnorePattern: '^_',
      },
    ],
    'space-before-function-paren': 'off',

    'vue/attributes-order': 'off',
    'vue/one-component-per-file': 'off',
    'vue/html-closing-bracket-newline': 'off',
    'vue/max-attributes-per-line': 'off',
    'vue/multiline-html-element-content-newline': 'off',
    'vue/singleline-html-element-content-newline': 'off',
    'vue/attribute-hyphenation': 'off',
    'vue/require-default-prop': 'off',
    'vue/require-explicit-emits': 'off',
    'vue/html-self-closing': [
      'error',
      {
        html: {
          void: 'always',
          normal: 'never',
          component: 'always',
        },
        svg: 'always',
        math: 'always',
      },
    ],
    'vue/multi-word-component-names': 'off',
  },
});

// module.exports = {
//   root: true,
//   env: {
//     browser: true,
//     node: true,
//     es6: true,
//   },
//   parser: 'vue-eslint-parser',
//   parserOptions: {
//     parser: '@typescript-eslint/parser',
//     ecmaVersion: 2020,
//     sourceType: 'module',
//     jsxPragma: 'React',
//     ecmaFeatures: {
//       jsx: true,
//     },
//   },
//   settings: {
//     // @路径引入的文件也需要校验
//     // eslint-import-resolver-typescript
//     'import/resolver': {
//       alias: {
//         map: [
//           ['@', './src'],
//           ['@views', './src/views'],
//           ['@types', './src/types'],
//           ['@comps', './src/comps'],
//           ['@utils', './src/utils'],
//         ],
//         extensions: ['.ts', '.js', '.jsx', '.tsx', '.json', '.vue'],
//       },
//     },
//   },
//   plugins: ['vue'],
//   rules: {
//     // 自己配置的规则
//     // 1 代表更为严格的抛出错误
//     // 2 代表警告

//     'import/no-absolute-path': 'off', // 关闭不能使用绝对路径导入模块
//     'import/no-unresolved': 'off',
//     'import/extensions': 'off',
//     'import/no-extraneous-dependencies': 'off',

//     'no-await-in-loop': 2, // 循环中不能出现await
//     'no-unused-vars': 'off',

//     '@typescript-eslint/no-unused-vars': 'off',
//     '@typescript-eslint/explicit-module-boundary-types': 'off',

//     'vue/multi-word-component-names': 'off',
//     'vue/script-setup-uses-vars': 'error',
//   },
//   extends: [
//     'plugin:@typescript-eslint/recommended',
//     'plugin:vue/vue3-recommended',
//     'plugin:prettier/recommended',
//     'prettier',
//     'airbnb-base',
//   ],
// };
//
