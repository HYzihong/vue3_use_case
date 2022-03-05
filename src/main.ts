/*
 * @Author: hy
 * @Date: 2022-02-01 01:19:55
 * @LastEditors: hy
 * @Description:
 * @LastEditTime: 2022-03-03 23:44:23
 * @FilePath: /vue3UseCase/src/main.ts
 * Copyright 2022 hy, All Rights Reserved.
 * 仅供学习使用~
 */
import { createApp } from 'vue';
import App from './App.vue';
// css
import 'virtual:windi.css';
import './styles/elementPlus/index.scss';
// import 'element-plus/theme-chalk/index.css';
// plugins
import { setupStore } from './stores';
import { setupRouter } from './routers';
import { setupUICpmps } from './plugins/elements-plus';
import { setupLocales } from './plugins/i18n';

// @ts-ignore
import VueGridLayout from 'vue-grid-layout';

const APP = createApp(App);

// use plugins
setupStore(APP);
setupRouter(APP);
setupUICpmps(APP);
setupLocales(APP);

// use components
APP.use(VueGridLayout);

APP.mount('#app');
