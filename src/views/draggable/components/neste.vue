<!--
 * @Author: hy
 * @Date: 2022-02-08 23:31:43
 * @LastEditors: hy
 * @Description: 
 * @LastEditTime: 2022-02-09 15:19:46
 * @FilePath: /vue3UseCase/src/views/draggable/components/neste.vue
 * Copyright 2022 hy, All Rights Reserved. 
 * 仅供学习使用~
-->
<template>
  <div>
    <draggable
      class="drag-area"
      tag="ul"
      :list="tasks"
      v-bind="dragOptions"
      :group="{ name: 'g1' }"
      item-key="name"
    >
      <template #item="{ element }">
        <li>
          <p>{{ element.name }}</p>
          <neste :tasks="element.tasks" />
        </li>
      </template>
    </draggable>
  </div>
</template>
<script lang="ts" setup>
  import { computed } from 'vue';
  import draggable from 'vuedraggable';
  //props
  defineProps({
    tasks: {
      required: true,
      type: Array,
    },
  });
  const dragOptions = computed(() => {
    return {
      animation: 200,
      group: 'description',
      disabled: false,
      ghostClass: 'ghost',
    };
  });
</script>

<style scoped>
  .drag-area {
    min-height: 50px;
    outline: 1px dashed;
  }
</style>
