/*
 * @Author: hy
 * @Date: 2022-02-01 01:19:55
 * @LastEditors: hy
 * @Description:
 * @LastEditTime: 2022-02-08 00:46:47
 * @FilePath: /vue3UseCase/src/main.ts
 * Copyright 2022 hy, All Rights Reserved.
 * 仅供学习使用~
 */
import { createApp } from 'vue';
import App from './App.vue';
// css
// import "./styles/index.scss";
import 'virtual:windi.css';
import 'element-plus/theme-chalk/index.css';
// plugins
import { setupStore } from './stores';
import { setupRouter } from './routers';
import { setupUICpmps } from './plugins/elements-plus';

const APP = createApp(App);

// plugins
setupStore(APP);
setupRouter(APP);
setupUICpmps(APP);

APP.mount('#app');
