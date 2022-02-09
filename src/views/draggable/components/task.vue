<!--
 * @Author: hy
 * @Date: 2022-02-09 15:29:39
 * @LastEditors: hy
 * @Description: 
 * @LastEditTime: 2022-02-09 16:35:56
 * @FilePath: /vue3UseCase/src/views/draggable/components/task.vue
 * Copyright 2022 hy, All Rights Reserved. 
 * 仅供学习使用~
-->
<template>
  <div>
    {{ task }}
  </div>
</template>
<script lang="ts" setup>
  import { PropType } from 'vue';

  //  type
  type task = {
    name: string;
  };
  // props
  defineProps({
    task: {
      type: Object as PropType<task | null>,
      default: () => {
        return {
          nn: 1,
        };
      },
    },
  });
</script>
