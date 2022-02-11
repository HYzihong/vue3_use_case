/*
 * @Author: hy
 * @Date: 2022-02-01 01:40:46
 * @LastEditors: hy
 * @Description:
 * @LastEditTime: 2022-02-09 23:41:55
 * @FilePath: /vue3UseCase/src/stores/index.ts
 * Copyright 2022 hy, All Rights Reserved.
 * 仅供学习使用~
 */
import type { App } from 'vue';
import { createPinia } from 'pinia';
// import { createPinia, PiniaPlugin } from 'pinia';
import piniaPluginPersist from 'pinia-plugin-persist'; // 数据持久化
const store = createPinia();
store.use(piniaPluginPersist);
export function setupStore(app: App<Element>) {
  app.use(store);
  // app.use(PiniaPlugin); // 添加 devtools 支持
}

export { store };
