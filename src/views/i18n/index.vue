<!--
 * @Author: hy
 * @Date: 2022-03-03 23:40:36
 * @LastEditors: hy
 * @Description: 
 * @LastEditTime: 2022-03-06 18:25:11
 * @FilePath: /vue3UseCase/src/views/i18n/index.vue
 * Copyright 2022 hy, All Rights Reserved. 
 * 仅供学习使用~
-->
<template>
  <div>
    <!-- {{ t('message.link') }}
    {{ t('message.hello', 'zhangsan') }} -->
    {{ t('link') }}
    {{ t('hello', 'zhangsan') }}
  </div>
</template>
<script lang="ts" setup>
  const { t } = useI18n();
</script>
