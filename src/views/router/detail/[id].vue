<!--
 * @Author: hy
 * @Date: 2022-03-05 17:48:00
 * @LastEditors: hy
 * @Description: 
 * @LastEditTime: 2022-03-05 17:48:07
 * @FilePath: /vue3UseCase/src/views/router/detail/[id].vue
 * Copyright 2022 hy, All Rights Reserved. 
 * 仅供学习使用~
-->

<template>
  <div> router - detail - {{ route.params }} </div>
</template>
<script lang="ts" setup>
  const route = useRoute();
  const router = useRouter();
  console.log(router);
  console.log(route.params);
</script>
