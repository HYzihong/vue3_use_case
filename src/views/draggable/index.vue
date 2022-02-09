<!--
 * @Author: hy
 * @Date: 2022-02-08 23:32:16
 * @LastEditors: hy
 * @Description: 
 * @LastEditTime: 2022-02-09 23:26:45
 * @FilePath: /vue3UseCase/src/views/draggable/index.vue
 * Copyright 2022 hy, All Rights Reserved. 
 * 仅供学习使用~
-->
<template>
  <div class="flex">
    <Neste :tasks="list" />
    <Neste :tasks="list1" />
  </div>
</template>
<script lang="ts" setup>
  import { ref } from 'vue';
  import Neste from './components/neste.vue';
  // data
  const list = ref([
    {
      name: 'task 1',
      tasks: [
        {
          name: 'task 2',
          tasks: [],
        },
      ],
    },
    {
      name: 'task 3',
      tasks: [
        {
          name: 'task 4',
          tasks: [],
        },
      ],
    },
    {
      name: 'task 5',
      tasks: [],
    },
  ]);
  const list1 = ref([
    {
      name: 'task 1',
      tasks: [
        {
          name: 'task 2',
          tasks: [],
        },
      ],
    },
    {
      name: 'task 3',
      tasks: [
        {
          name: 'task 4',
          tasks: [],
        },
      ],
    },
    {
      name: 'task 5',
      tasks: [],
    },
  ]);
</script>
