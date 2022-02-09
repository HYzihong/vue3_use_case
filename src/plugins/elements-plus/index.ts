/*
 * @Author: hy
 * @Date: 2022-02-01 02:36:02
 * @LastEditors: hy
 * @Description:
 * @LastEditTime: 2022-02-09 23:17:25
 * @FilePath: /vue3UseCase/src/plugins/elements-plus/index.ts
 * Copyright 2022 hy, All Rights Reserved.
 * 仅供学习使用~
 */

import type { App } from 'vue';
import ElementPlus from 'element-plus';

export function setupUICpmps(app: App<Element>) {
  app.use(ElementPlus);
}
