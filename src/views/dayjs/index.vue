<!--
 * @Author: hy
 * @Date: 2022-02-11 23:02:00
 * @LastEditors: hy
 * @Description: 
 * @LastEditTime: 2022-02-11 23:47:51
 * @FilePath: /vue3UseCase/src/views/dayjs/index.vue
 * Copyright 2022 hy, All Rights Reserved. 
 * 仅供学习使用~
-->
<template>
  <div class="m-5">
    <h1>dayjs</h1>
    <el-table :data="date">
      <el-table-column prop="title" label="title" />
      <el-table-column prop="script" label="script" />
      <el-table-column prop="result" label="result" />
    </el-table>
  </div>
</template>
<script lang="ts" setup>
  import dayjs from '@/plugins/dayjs/index';
  import { ref } from 'vue';
  type dayData = {
    title: string;
    script: string;
    result: string;
  };
  const date = ref<dayData[]>([
    { title: '当前时间', script: 'dayjs()', result: `${dayjs()}` },
    {
      title: '当前时间（带格式）',
      script: `dayjs().format('YYYY-MM-DD HH:mm:ss')`,
      result: dayjs().format('YYYY-MM-DD HH:mm:ss'),
    },
    {
      title: '当前时间（自定义格式）',
      script: `dayjs().format('[hy] YYYY-MM-DDTHH:mm:ssZ[Z]`,
      result: dayjs().format('[hy] YYYY-MM-DDTHH:mm:ssZ[Z]'),
    },
    {
      title: '当前距1997-01-01过了几年了',
      script: `dayjs().from(dayjs('1997-01-01'))`,
      // result: dayjs().from(dayjs('1997-01-01')),
      result: dayjs().from(dayjs('1997-01-01'), true),
    },
    {
      title: '今年距2025-01-01年还有几年',
      script: `dayjs('2025-01-01').fromNow(true)`,
      result: dayjs('2025-01-01').fromNow(true),
    },
  ]);
  console.log(dayjs('2025-01-01').fromNow(true).split(' '));
</script>
