<!--
 * @Author: hy
 * @Date: 2022-02-08 23:20:29
 * @LastEditors: hy
 * @Description: 
 * @LastEditTime: 2022-02-08 23:23:26
 * @FilePath: /vue3UseCase/src/views/qrcode/components/QrOcde.vue
 * Copyright 2022 hy, All Rights Reserved. 
 * 仅供学习使用~
-->

<template>
  <div>
    <div v-if="imageUrl" :class="containerClass">
      <img :src="imageUrl" :class="imageClass" @click="downloadImage" crossorigin="anonymous" />
    </div>
  </div>
</template>
<script lang="ts" setup>
  // https://www.npmjs.com/package/qrcode-vue3
  import QRCodeStyling from 'qrcode-vue3/src/core/QRCodeStyling';
  import { onMounted, ref, watch } from 'vue';
  import { donwloadBase64Image } from '../hooks/useDownLoadBase64Image';
  //props
  const props = defineProps({
    width: {
      type: Number,
      default: 300,
    },
    imageClass: {
      type: String,
      default: '',
    },
    containerClass: {
      type: String,
      default: '',
    },
    downloadButton: {
      type: String,
      default: '',
    },
    buttonName: {
      type: String,
      default: 'Download3',
    },
    height: {
      type: Number,
      default: 300,
    },
    value: {
      type: String,
      required: true,
    },
    image: {
      type: String,
      default: '',
    },
    qrOptions: {
      type: Object,
      default: () => ({
        typeNumber: 0,
        mode: 'Byte',
        errorCorrectionLevel: 'Q',
      }),
    },
    imageOptions: {
      type: Object,
      default: () => ({ hideBackgroundDots: true, imageSize: 0.4, margin: 0 }),
    },
    dotsOptions: {
      type: Object,
      default: () => ({
        type: 'dots',
        color: '#6a1a4c',
        gradient: {
          type: 'linear',
          rotation: 0,
          colorStops: [
            { offset: 0, color: '#6a1a4c' },
            { offset: 1, color: '#6a1a4c' },
          ],
        },
      }),
    },
    backgroundOptions: {
      type: Object,
      default: () => ({ color: '#ffffff' }),
    },
    cornersSquareOptions: {
      type: Object,
      default: () => ({ type: 'dot', color: '#000000' }),
    },
    cornersDotOptions: {
      type: Object,
      default: () => ({ type: undefined, color: '#000000' }),
    },
    fileExt: {
      type: String,
      default: 'png',
    },
    download: {
      type: Boolean,
      default: false,
    },
    fileName: {
      type: String,
      default: '二维码.png',
    },
    downloadOptions: {
      type: Object,
      default: () => ({ name: 'vqr', extension: 'png' }),
    },
  });

  const imageUrl = ref<string>('');
  const qrCode = ref(
    new QRCodeStyling({
      data: props.value,
      width: props.width,
      height: props.height,
      qrOptions: props.qrOptions,
      imageOptions: props.imageOptions,
      dotsOptions: props.dotsOptions,
      backgroundOptions: props.backgroundOptions,
      image: props.image,
      cornersSquareOptions: props.cornersSquareOptions,
      cornersDotOptions: props.cornersDotOptions,
    }),
  );
  watch(
    () => props.value,
    async () => {
      qrCode.value = new QRCodeStyling({
        data: props.value,
        width: props.width,
        height: props.height,
        qrOptions: props.qrOptions,
        imageOptions: props.imageOptions,
        dotsOptions: props.dotsOptions,
        backgroundOptions: props.backgroundOptions,
        image: props.image,
        cornersSquareOptions: props.cornersSquareOptions,
        cornersDotOptions: props.cornersDotOptions,
      });

      imageUrl.value = await qrCode.value.getImageUrl(props.fileExt);
    },
  );
  onMounted(async () => {
    imageUrl.value = await qrCode.value.getImageUrl(props.fileExt);
  });
  function downloadImage(): void {
    console.log('base64 data =>', imageUrl.value);
    if (props.download) {
      donwloadBase64Image(imageUrl, props.fileName);
    }
  }
</script>
