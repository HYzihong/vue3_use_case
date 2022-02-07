<!--
 * @Author: hy
 * @Date: 2022-02-08 00:31:27
 * @LastEditors: hy
 * @Description: 
 * @LastEditTime: 2022-02-08 02:28:59
 * @FilePath: /vue3UseCase/src/views/ascii/components/figlet.vue
 * Copyright 2022 hy, All Rights Reserved. 
 * 仅供学习使用~
-->
<template>
  <div>
    <el-card class="box-card">
      <template #header>
        <div class="card-header">
          <h1>figlet</h1>

          <el-input
            v-model="text"
            placeholder="ascii"
            class="input-with-select"
            @change="textChange"
          >
            <template #append>
              <el-button :icon="Search" />
            </template>
          </el-input>
        </div>
      </template>
      <div class="bg-clip-padding bg-gray-500">
        <pre>{{ fonts }}</pre>
      </div>
    </el-card>
  </div>
</template>
<script lang="ts" setup>
  // @ts-ignore
  // import standard from 'figlet/importable-fonts/Standard';
  // @ts-ignore
  import Ghost from 'figlet/importable-fonts/Ghost';
  import figlet from 'figlet';
  import { ref, watch } from 'vue';
  import { Search } from '@element-plus/icons-vue';
  const fonts = ref(undefined);
  const text = ref('hello world !!!');
  // watch(
  //   text,
  //   (count: string, prevCount: string) => {
  //     console.log(count, prevCount);
  //     textChange();
  //   },
  //   { immediate: true },
  // );
  watch(
    text,
    () => {
      textChange();
    },
    { immediate: true },
  );
  function textChange() {
    figlet.parseFont('Ghost', Ghost);
    // figlet.parseFont('Standard', standard);
    figlet.text(
      text.value,
      {
        font: 'Ghost',
        // font: 'Standard',
      },
      function (err: any, data: any) {
        console.log(err, typeof data);
        console.log(data);
        fonts.value = data;
      },
    );
  }
</script>
