<!--
 * @Author: hy
 * @Date: 2022-02-23 22:04:10
 * @LastEditors: hy
 * @Description: 
 * @LastEditTime: 2022-02-23 22:04:10
 * @FilePath: /vue3UseCase/src/views/_TextCopied/index.vue
 * Copyright 2022 hy, All Rights Reserved. 
 * 仅供学习使用~
-->

<template>
  <div class="font-bold text-xl text-center">浏览器实现对剪切板中复制内容处理的功能</div>
  <el-card class="mx-10 mt-2 pb-8">
    <div class="text-center">
      {{ isSupported ? '支持clipboard' : '不支持clipboard' }}
      <div class="flex"
        ><el-input v-model="source" :rows="2" type="textarea" placeholder="Please input" />
        <el-button class="ml-2" type="success" @click="copy(formatText)">{{
          !copied ? 'copy' : 'copied'
        }}</el-button></div
      >
      <div>
        粘贴板中复制的内容：
        <pre
          >{{ text }}
      </pre
        >
      </div>
      <div> copied:{{ copied }} </div>
    </div>
    <div class="text-center"> Text Selection(已经选择的文字):{{ state.text }} </div>
  </el-card>
  <el-card class="mx-10 mt-2 pb-8">
    <el-collapse v-model="activateTab">
      <el-collapse-item title="select" name="1">
        <div>
          <pre>
          1. 关于文字选中获取
          主要用到
          Selection API  https://developer.mozilla.org/zh-CN/docs/Web/API/Selection
          与
          Range API https://developer.mozilla.org/zh-CN/docs/Web/API/range
          </pre>
        </div>
      </el-collapse-item>
      <el-collapse-item title="copy" name="1">
        <div>
          <pre>
          2. 关于文字复制时候对剪切板的操作
          方法一：监听页面的<el-tag type="info">copy</el-tag>和<el-tag type="info">paste</el-tag>事件来实现自定义copy和自定义paste功能，由于只能在用户操作时才可以使用，有局限性。
          方法二：自己做兼容性处理(来源网络)
              <code class="bg-light-900">
                $(document.body).bind({
                    copy: function(e) {//copy事件
                    let cpTxt = "xx";// 复制的数据
                    let clipboardData = window.clipboardData; //for IE
                    // document.execCommand('copy') true or false 兼容性
                    if (!clipboardData) { // for chrome
                        clipboardData = e.originalEvent.clipboardData;
                    }
                    let result = clipboardData.getData("text")+":"+cpTxt;
                    //e.clipboardData.getData('text');//可以获取用户选中复制的数据
                    clipboardData.setData('Text', result);
                    $('p').text(result);
                    return false;//否则设不生效
                }
              </code>
          方法三：使用 <el-tag type="info"> Clipboard API </el-tag>  https://developer.mozilla.org/zh-CN/docs/Web/API/Clipboard
            IE跟Firefox兼容性有一定的问题，手机端也有一些问题
          方法四：使用 即将废弃API <el-tag type="info"> execCommand </el-tag>，一些富文本编辑器就是基于这个api实现操作可编辑内容区域(contenteditable)的元素
            document.execCommand的探索：https://juejin.cn/post/6952429235743129636
          方法五：使用第三方库 
            <el-tag type="info">clipboard-copy</el-tag>https://www.npmjs.com/package/clipboard-copy
            <el-tag type="info">vueuse</el-tag>https://www.npmjs.com/package/@vueuse/core
            但是不知道是否最ie的兼容性处理
          </pre>
        </div>
      </el-collapse-item>
    </el-collapse>
  </el-card>
</template>
<script lang="ts" setup>
  import { ref, watch } from 'vue';
  import { useTextSelection, useClipboard } from '@vueuse/core';
  // copy
  const source = ref(' copy text');
  const formatText = ref<string>('');
  const { text, copy, copied, isSupported } = useClipboard({ source: formatText.value });
  watch(
    source,
    (val) => {
      formatText.value = `
        ${val}
        作者：hy
        链接：https://github/zihong/vue3_use_case
        来源：gihtub
        著作权归作者所有。商业转载请联系作者获得授权，非商业转载请注明出处。
      `;
    },
    { immediate: true },
  );
  // document.addEventListener('copy', function (e) {
  //   console.log('copy', e);
  // });
  // select
  const state = useTextSelection();
  watch(
    () => state.value.text,
    (val) => {
      if (val) {
        // console.log(val);
        formatText.value = `${val}`;
        copy();
      }
    },
  );
  // collapse
  const activateTab = ref(['1']);
</script>
