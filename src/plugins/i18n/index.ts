/*
 * @Author: hy
 * @Date: 2022-03-03 23:27:08
 * @LastEditors: hy
 * @Description:
 * @LastEditTime: 2022-03-06 18:24:58
 * @FilePath: /vue3UseCase/src/plugins/i18n/index.ts
 * Copyright 2022 hy, All Rights Reserved.
 * 仅供学习使用~
 */
// see by vitesse

import type { App } from 'vue';
import { createI18n } from 'vue-i18n';

// Import i18n resources
// https://vitejs.dev/guide/features.html#glob-import
//
// Don't need this? Try vitesse-lite: https://github.com/antfu/vitesse-lite
// const messages = Object.fromEntries(
//   Object.entries(import.meta.globEager('../../locales/*.y(a)?ml')).map(([key, value]) => {
//     const yaml = key.endsWith('.yaml');
//     console.log(yaml);

//     return [key.slice(14, yaml ? -5 : -4), value.default];
//   }),
// );

const messages = {
  en: {
    // message: {
    link: 'lisi',
    hello: '{0} hello world',
    // },
  },
  'zh-CN': {
    // message: {
    link: 'zhangsan',
    hello: '{0} ,你好',
    // },
  },
};

export function setupLocales(app: App<Element>) {
  const i18n = createI18n({
    legacy: false,
    locale: 'zh-CN',
    messages,
  });
  app.use(i18n);
}
