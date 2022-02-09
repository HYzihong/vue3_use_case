<!--
 * @Author: hy
 * @Date: 2022-02-09 21:20:34
 * @LastEditors: hy
 * @Description: 
 * @LastEditTime: 2022-02-09 22:56:08
 * @FilePath: /vue3UseCase/src/views/grid-layout/index.vue
 * Copyright 2022 hy, All Rights Reserved. 
 * 仅供学习使用~
-->
<template>
  <div class="container">
    <grid-layout
      v-model:layout="layout"
      :col-num="12"
      :row-height="30"
      :is-draggable="draggable"
      :is-resizable="resizable"
      vertical-compact
      use-css-transforms
      @layout-created="layoutCreatedEvent"
      @layout-before-mount="layoutBeforeMountEvent"
      @layout-mounted="layoutMountedEvent"
      @layout-ready="layoutReadyEvent"
      @layout-updated="layoutUpdatedEvent"
      @breakpoint-changed="breakpointChangedEvent"
    >
      <grid-item
        v-for="item in layout"
        :static="item.static"
        :x="item.x"
        :y="item.y"
        :w="item.w"
        :h="item.h"
        :i="item.i"
        :key="item.i"
      >
        <span class="text">{{ itemTitle(item) }}</span>
      </grid-item>
    </grid-layout>
  </div>
</template>

<script setup lang="ts">
  // by https://codesandbox.io/embed/vue-grid-layout-for-vue3-yvs1c?fontsize=14&hidenavigation=1&theme=dark
  import { ref } from 'vue';
  // type
  type Layout = {
    x: number; // 标识栅格元素位于第几列，需为自然数。
    y: number; // 标识栅格元素位于第几行，需为自然数。
    w: number; // 标识栅格元素的初始宽度，值为colWidth的倍数
    h: number; // 标识栅格元素的初始高度，值为rowHeight的倍数。
    i: string; // 栅格中元素的ID
    static: boolean; // 标识栅格元素是否为静态的（无法拖拽、调整大小或被其他元素移动）。
    resizeIgnoreFrom?: string; // 标识栅格元素中哪些子元素无法触发调整大小的事件，值为css-like选择器。
  };
  // data
  const layout = ref<Layout[] | []>([
    { x: 0, y: 0, w: 2, h: 2, i: '0', static: false },
    { x: 2, y: 0, w: 2, h: 4, i: '1', static: true },
    { x: 4, y: 0, w: 2, h: 5, i: '2', static: false },
    { x: 6, y: 0, w: 2, h: 3, i: '3', static: false },
    { x: 8, y: 0, w: 2, h: 3, i: '4', static: false },
    { x: 10, y: 0, w: 2, h: 3, i: '5', static: false },
    { x: 0, y: 5, w: 2, h: 5, i: '6', static: false },
    { x: 2, y: 5, w: 2, h: 5, i: '7', static: false },
    { x: 4, y: 5, w: 2, h: 5, i: '8', static: false },
    { x: 6, y: 3, w: 2, h: 4, i: '9', static: true },
    { x: 8, y: 4, w: 2, h: 4, i: '10', static: false },
    { x: 10, y: 4, w: 2, h: 4, i: '11', static: false },
    { x: 0, y: 10, w: 2, h: 5, i: '12', static: false },
    { x: 2, y: 10, w: 2, h: 5, i: '13', static: false },
    { x: 4, y: 8, w: 2, h: 4, i: '14', static: false },
    { x: 6, y: 8, w: 2, h: 4, i: '15', static: false },
    { x: 8, y: 10, w: 2, h: 5, i: '16', static: false },
    { x: 10, y: 4, w: 2, h: 2, i: '17', static: false },
    { x: 0, y: 9, w: 2, h: 3, i: '18', static: false },
    { x: 2, y: 6, w: 2, h: 2, i: '19', static: false },
  ]);
  const draggable = ref<boolean>(true);
  const resizable = ref<boolean>(true);
  // methods
  const itemTitle = (item: any) => {
    let result = item.i;
    if (item.static) {
      result += ' - Static';
    }
    return result;
  };
  // Created
  function layoutCreatedEvent(newLayout: Layout[]) {
    console.log('Created layout: ', newLayout);
  }
  // beforeMount
  function layoutBeforeMountEvent(newLayout: Layout[]) {
    console.log('beforeMount layout: ', newLayout);
  }
  // Mounted
  function layoutMountedEvent(newLayout: Layout[]) {
    console.log('Mounted layout: ', newLayout);
  }
  // Ready
  function layoutReadyEvent(newLayout: Layout[]) {
    console.log('Ready layout: ', newLayout);
  }
  // Updated
  function layoutUpdatedEvent(newLayout: Layout[]) {
    console.log('Updated layout: ', newLayout);
    layout.value = newLayout;
  }
  // beforeMount
  function breakpointChangedEvent(newBreakpoint: any, newLayout: Layout[]) {
    console.log('BREAKPOINT CHANGED breakpoint=', newBreakpoint, ', layout: ', newLayout);
  }
</script>
<style scoped lang="scss">
  .container .vue-grid-item.vue-grid-placeholder {
    background: green;
  }

  .vue-grid-layout {
    background: #eee;
  }

  .vue-grid-item {
    .resizing {
      opacity: 0.9;
    }

    .static {
      background: #cce;
    }

    .text {
      font-size: 24px;
      text-align: center;
      position: absolute;
      top: 0;
      bottom: 0;
      left: 0;
      right: 0;
      margin: auto;
      height: 100%;
      width: 100%;
    }

    .no-drag {
      height: 100%;
      width: 100%;
    }

    /* stylelint-disable-next-line selector-class-pattern */
    .minMax {
      font-size: 12px;
    }

    .add {
      cursor: pointer;
    }
  }

  .vue-grid-item:not(.vue-grid-placeholder) {
    background: #ccc;
    border: 1px solid red;
  }

  .vue-draggable-handle {
    position: absolute;
    width: 20px;
    height: 20px;
    top: 0;
    left: 0;
    /* stylelint-disable-next-line declaration-colon-newline-after */
    background: url("data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' width='10' height='10'><circle cx='5' cy='5' r='5' fill='#999999'/></svg>")
      no-repeat;
    background-position: bottom right;
    padding: 0 8px 8px 0;
    background-repeat: no-repeat;
    background-origin: content-box;
    box-sizing: border-box;
    cursor: pointer;
  }
</style>
