<!--
 * @Author: hy
 * @Date: 2022-03-05 10:21:06
 * @LastEditors: hy
 * @Description:
 * @LastEditTime: 2022-03-05 16:35:35
 * @FilePath: /vue3UseCase/src/routers/readme.md
 * Copyright 2022 hy, All Rights Reserved.
 * 仅供学习使用~
-->

# 路由

### 类似 Nuxt 的路由处理方式

> 为了不在编写复杂的路由文件配置，来组织映射路由结构系统

#### [`vue-plugin-pages`](https://www.npmjs.com/package/vite-plugin-pages) 基于文件系统的路由生成器

> 根据 `pages/views` 文件夹下的文件组织结构自动会生成一个路由数组，注入到`Vue Router`实例中，所以我们用文件组件结构决定路由层级结构，所以我每次在 `pages/views` 目录下新增一个`.vue` 文件后，就会自动创建新的路由，无需再次进行路由的配置

##### 一些路由匹配规则

```js
// 基础路由映射
`src/views/home.vue`; // --> /home
// 默认索引路由
`src/views/index.vue`; //-> /
`src/views/home/index.vue`; // --> /home
// 动态路由
`src/views/user/[id].vue`; // -> /user/:id   {"id":"qwertyuiop123456789"}
`src/views/[user]/info.vue`; // -> /:user/info
// 捕获所有路由
`src/pages/[…all].vue`; //-> /* (/non-existent-page)
```
