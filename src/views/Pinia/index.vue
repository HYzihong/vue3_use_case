<!--
 * @Author: hy
 * @Date: 2022-02-01 02:26:21
 * @LastEditors: hy
 * @Description: 
 * @LastEditTime: 2022-02-01 02:26:21
 * @FilePath: /vue3UseCase/src/views/pinia/index.vue
 * Copyright 2022 hy, All Rights Reserved. 
 * 仅供学习使用~
-->
<template>
  <div>
    {{ name }}_{{ age }}_{{ countAddOne }}
    <div @click="increment">加一</div>
  </div>
</template>
<script lang="ts" setup>
import { useStore } from "@/stores/modules/user";
import { storeToRefs } from "pinia";
import { computed } from "vue";
const userStore = useStore();
const { count, age, countAddOne } = storeToRefs(userStore);
const { increment } = userStore;
const name = computed(() => count);
</script>
<style module scoped></style>
