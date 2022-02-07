<!--
 * @Author: hy
 * @Date: 2022-02-08 02:36:38
 * @LastEditors: hy
 * @Description: 
 * @LastEditTime: 2022-02-08 02:38:31
 * @FilePath: /vue3UseCase/src/views/qrcode/index.vue
 * Copyright 2022 hy, All Rights Reserved. 
 * 仅供学习使用~
-->
<template>
  <div>
    <QRCodeVue3 value="Simple QR code" />
    <QRCodeVue3
      :width="200"
      :height="200"
      value="https://baidu.com"
      :qrOptions="{ typeNumber: 0, mode: 'Byte', errorCorrectionLevel: 'H' }"
      :imageOptions="{ hideBackgroundDots: true, imageSize: 0.4, margin: 0 }"
      :dotsOptions="{
        type: 'dots',
        color: '#26249a',
        gradient: {
          type: 'linear',
          rotation: 0,
          colorStops: [
            { offset: 0, color: '#26249a' },
            { offset: 1, color: '#26249a' },
          ],
        },
      }"
      :backgroundOptions="{ color: '#ffffff' }"
      :cornersSquareOptions="{ type: 'dot', color: '#000000' }"
      :cornersDotOptions="{ type: undefined, color: '#000000' }"
      fileExt="png"
      :download="true"
      myclass="my-qur"
      imgclass="img-qr"
      downloadButton="my-button"
      :downloadOptions="{ name: 'vqr', extension: 'png' }"
    />
  </div>
</template>
<script lang="ts" setup>
  import QRCodeVue3 from 'qrcode-vue3';
</script>
