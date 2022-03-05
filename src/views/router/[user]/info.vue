<!--
 * @Author: hy
 * @Date: 2022-03-05 16:36:19
 * @LastEditors: hy
 * @Description: 
 * @LastEditTime: 2022-03-05 16:37:22
 * @FilePath: /vue3UseCase/src/views/router/[user]/info.vue
 * Copyright 2022 hy, All Rights Reserved. 
 * 仅供学习使用~
-->
<template>
  <div>user {{ route.params.user }} - info page</div>
</template>
<script lang="ts" setup>
  const route = useRoute();
  const router = useRouter();
  console.log(router);
  console.log(route.params);
</script>
