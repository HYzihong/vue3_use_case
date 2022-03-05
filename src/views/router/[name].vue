<!--
 * @Author: hy
 * @Date: 2022-03-05 16:25:17
 * @LastEditors: hy
 * @Description: 
 * @LastEditTime: 2022-03-05 16:29:59
 * @FilePath: /vue3UseCase/src/views/router/[name].vue
 * Copyright 2022 hy, All Rights Reserved. 
 * 仅供学习使用~
-->

<template>
  <div>
    {{ route.params }}
  </div>
</template>
<script lang="ts" setup>
  // 不起作用
  const route = useRoute();
  const router = useRouter();
  console.log(router);
  console.log(route.params);
</script>
