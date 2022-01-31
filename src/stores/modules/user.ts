/*
 * @Author: hy
 * @Date: 2022-02-01 01:47:25
 * @LastEditors: hy
 * @Description:
 * @LastEditTime: 2022-02-01 02:27:24
 * @FilePath: /vue3UseCase/src/stores/modules/user.ts
 * Copyright 2022 hy, All Rights Reserved.
 * 仅供学习使用~
 */
// store.js
import { defineStore } from "pinia";
type UserInfo = {
  count: number;
  _age: number;
  name: string;
};
export const useStore = defineStore({
  id: "userInfo",
  state: (): UserInfo => ({
    count: 1,
    name: "hy",
    _age: 18,
  }),
  actions: {
    async increment() {
      await this.count++;
    },
  },
  getters: {
    age: (state) => `${state._age}岁`,
    countAddOne(): number {
      return this.count + 1;
    },
  },
  // 开启数据持久化
  persist: {
    enabled: true,
    strategies: [
      {
        key: "userInfo",
        storage: localStorage,
        paths: ["name", "_age"],
      },
    ],
  },
});
