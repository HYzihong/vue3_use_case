/*
 * @Author: hy
 * @Date: 2022-02-01 21:37:02
 * @LastEditors: hy
 * @Description:
 * @LastEditTime: 2022-02-01 21:50:01
 * @FilePath: /vue3UseCase/src/stores/modules/setup.ts
 * Copyright 2022 hy, All Rights Reserved.
 * 仅供学习使用~
 */
import { defineStore } from 'pinia';
import { ref } from 'vue';
type UserInfo = {
  count: number;
  _age: number;
  name: string;
};
export const useSetupStore = defineStore('setup', () => {
  const userInfo = ref<UserInfo>({
    count: 1,
    name: 'hy',
    _age: 18,
  });
  function increment() {
    userInfo.value.count++;
  }

  function doubleCount() {
    return userInfo.value.count * 2;
  }
  return {
    userInfo,
    increment,
    doubleCount,
  };
});
