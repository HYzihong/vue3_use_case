/*
 * @Author: hy
 * @Date: 2022-02-01 01:40:46
 * @LastEditors: hy
 * @Description:
 * @LastEditTime: 2022-02-14 22:43:25
 * @FilePath: /vue3UseCase/src/routers/index.ts
 * Copyright 2022 hy, All Rights Reserved.
 * 仅供学习使用~
 */

import type { App } from 'vue';

import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router';

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    name: 'home',
    component: () => import('@/views/home/index.vue'),
  },
  {
    path: '/store',
    name: 'Pinia',
    component: () => import('@/views/Pinia/index.vue'),
  },
  {
    path: '/ascii',
    name: 'Ascii',
    component: () => import('@/views/ascii/index.vue'),
  },
  {
    path: '/template',
    name: 'Template',
    component: () => import('@/views/comps/index.vue'),
  },
  {
    path: '/qrcode',
    name: 'Qrcode',
    component: () => import('@/views/qrcode/index.vue'),
  },
  {
    path: '/draggable',
    name: 'Draggable',
    component: () => import('@/views/draggable/index.vue'),
  },
  {
    path: '/grid-layout',
    name: 'GridLayout',
    component: () => import('@/views/grid-layout/index.vue'),
  },
  {
    path: '/dayjs',
    name: 'Dayjs',
    component: () => import('@/views/dayjs/index.vue'),
  },
  {
    path: '/element-plus',
    name: 'ElementPlus',
    component: () => import('@/views/elementPlus/index.vue'),
  },
];

const router = createRouter({
  history: createWebHistory(),
  // history: createWebHistory(import.meta.env.VITE_BASE_URL as string),
  routes,
});

export default router;

export function setupRouter(app: App<Element>) {
  app.use(router);
}
