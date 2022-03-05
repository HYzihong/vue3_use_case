<!--
 * @Author: hy
 * @Date: 2022-03-03 23:40:36
 * @LastEditors: hy
 * @Description: 
 * @LastEditTime: 2022-03-03 23:41:56
 * @FilePath: /vue3UseCase/src/views/i18n/index.vue
 * Copyright 2022 hy, All Rights Reserved. 
 * 仅供学习使用~
-->
<template>
  <div>
    {{ t('link.go') }}
  </div>
</template>
<script lang="ts" setup>
  const { t } = useI18n();

  // import { ref } from 'vue';
</script>
