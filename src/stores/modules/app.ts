/*
 * @Author: hy
 * @Date: 2022-02-14 00:10:35
 * @LastEditors: hy
 * @Description:
 * @LastEditTime: 2022-02-14 00:13:58
 * @FilePath: /vue3UseCase/src/stores/modules/app.ts
 * Copyright 2022 hy, All Rights Reserved.
 * 仅供学习使用~
 */
import { defineStore } from 'pinia';
type UserInfo = {
  theme: {};
};
export const appStore = defineStore({
  id: 'appInfo',
  state: (): UserInfo => ({
    theme: {},
  }),
  actions: {
    async increment(_theme: any) {
      this.theme = _theme;
    },
  },
  getters: {},
  // 开启数据持久化
  persist: {
    enabled: true,
    strategies: [
      {
        key: 'app',
        storage: localStorage,
        paths: ['theme'],
      },
    ],
  },
});
