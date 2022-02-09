/**
 * @Author: hy
 * @Date: 2022-02-01 03:18:45
 * @LastEditors: hy
 * @Description:
 * @LastEditTime: 2022-02-09 22:25:47
 * @FilePath: /vue3UseCase/stylelint.config.js
 * @Copyright 2022 hy, All Rights Reserved.
 * @仅供学习使用~
 * */
module.exports = {
  extends: [
    'stylelint-config-standard',
    'stylelint-config-standard-scss',
    'stylelint-config-css-modules',
    // 'stylelint-config-recommended-vue',
    'stylelint-config-recommended-vue/scss',
  ],
  customSyntax: 'postcss-scss',
  customSyntax: 'postcss-html',
  rules: {
    'string-quotes': 'single', // 单引号
    // 'rule-empty-line-before': 'always',
    //   'at-rule-no-unknown': [
    //     true,
    //     {
    //       ignoreAtRules: [
    //         'tailwind',
    //         'windicss',
    //         'windi',
    //         'layer',
    //         'apply',
    //         'variants',
    //         'responsive',
    //         'screen',
    //       ],
    //     },
    //   ],
  },
};
