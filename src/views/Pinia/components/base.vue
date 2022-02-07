<!--
 * @Author: hy
 * @Date: 2022-02-01 21:50:37
 * @LastEditors: hy
 * @Description:
 * @LastEditTime: 2022-02-01 22:14:38
 * @FilePath: /vue3UseCase/src/views/Pinia/components/base.vue
 * Copyright 2022 hy, All Rights Reserved.
 * 仅供学习使用~
-->
<template>
  <div>
    {{ name }}_{{ age }}_{{ countAddOne }}
    <el-button @click="increment">加一</el-button>
  </div>
</template>
<script lang="ts" setup>
import { storeToRefs } from 'pinia';
import { computed } from 'vue';
import { useUserStore } from '@/stores/modules/user';

const UserInfo = useUserStore();
const { count, age, countAddOne } = storeToRefs(UserInfo);
const { increment } = UserInfo;
const name = computed(() => count);
</script>
<style module scoped></style>
