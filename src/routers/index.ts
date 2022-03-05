/*
 * @Author: hy
 * @Date: 2022-02-01 01:40:46
 * @LastEditors: hy
 * @Description:
 * @LastEditTime: 2022-03-05 16:43:30
 * @FilePath: /vue3UseCase/src/routers/index.ts
 * Copyright 2022 hy, All Rights Reserved.
 * 仅供学习使用~
 */

import type { App } from 'vue';

import { createRouter, createWebHistory } from 'vue-router';
import routes from 'virtual:generated-pages';

const router = createRouter({
  history: createWebHistory(),
  // history: createWebHistory(import.meta.env.VITE_BASE_URL as string),
  routes,
});

export default router;

export function setupRouter(app: App<Element>) {
  app.use(router);
}
