<!--
 * @Author: hy
 * @Date: 2022-02-08 02:36:38
 * @LastEditors: hy
 * @Description: 
 * @LastEditTime: 2022-02-08 23:20:33
 * @FilePath: /vue3UseCase/src/views/qrcode/index.vue
 * Copyright 2022 hy, All Rights Reserved. 
 * 仅供学习使用~
-->
<template>
  <div>
    <QRCodeVue3
      :width="width"
      :height="height"
      :value="text"
      :qrOptions="qrOptions"
      :imageOptions="imageOptions"
      :dotsOptions="dotsOptions"
      :backgroundOptions="backgroundOptions"
      :cornersSquareOptions="cornersSquareOptions"
      :cornersDotOptions="cornersDotOptions"
      :fileName="downLoadFileName"
      :image="logo"
      fileExt="png"
      :download="true"
      containerClass="grid grid-rows-4"
      imageClass="img-qr"
      :downloadOptions="downloadOptions"
    />
  </div>
</template>
<script lang="ts" setup>
  import logo from '@/assets/logo.png';
  import QRCodeVue3 from './item.vue';
  import { ref } from 'vue';
  // data
  const text = ref<string>('https://baidu.com');
  const width = ref<number>(200);
  const height = ref<number>(200);
  const qrOptions = ref<QrCodeVue3.QrOptions>({
    typeNumber: 0,
    mode: 'Byte',
    errorCorrectionLevel: 'H',
  });
  const imageOptions = ref<QrCodeVue3.HideBackgroundDots>({
    hideBackgroundDots: true,
    imageSize: 0.4,
    margin: 0,
  });
  const dotsOptions = ref<QrCodeVue3.DotsOptions>({
    type: 'rounded',
    color: '#26249a',
    gradient: {
      type: 'linear',
      rotation: 0,
      colorStops: [
        { offset: 0, color: '#DB399D' },
        { offset: 1, color: '#6A1A4C' },
      ],
    },
  });
  const backgroundOptions = ref<QrCodeVue3.BackgroundOptions>({ color: '#ffffff' });
  const cornersSquareOptions = ref<QrCodeVue3.cornersSquareOptions>({
    type: 'square',
    color: '#000000',
  });
  const cornersDotOptions = ref<QrCodeVue3.CornersDotOptions>({
    type: 'square',
    color: '#000000',
  });
  const downloadOptions = ref<QrCodeVue3.DownloadOptions>({ name: 'vqr', extension: 'png' });
  const downLoadFileName = ref<string>('测试.png');
</script>
