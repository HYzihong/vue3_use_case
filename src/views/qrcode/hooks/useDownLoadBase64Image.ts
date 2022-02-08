/*
 * @Author: hy
 * @Date: 2022-02-08 23:21:49
 * @LastEditors: hy
 * @Description:
 * @LastEditTime: 2022-02-08 23:22:10
 * @FilePath: /vue3UseCase/src/views/qrcode/hooks/useDownLoadBase64Image.ts
 * Copyright 2022 hy, All Rights Reserved.
 * 仅供学习使用~
 */

import { Ref } from 'vue';
// by https://blog.csdn.net/qq_35844177/article/details/79094249
export const donwloadBase64Image = (data: Ref<string>, fileName: string): void => {
  const aLink = document.createElement('a');
  const blob = base64ToBlob(data); //new Blob([content]);

  const evt = document.createEvent('HTMLEvents');
  evt.initEvent('click', true, true); //initEvent 不加后两个参数在FF下会报错  事件类型，是否冒泡，是否阻止浏览器的默认行为
  // @ts-ignore
  aLink.download = fileName;
  aLink.href = URL.createObjectURL(blob);
  aLink.dispatchEvent(new MouseEvent('click', { bubbles: true, cancelable: true, view: window })); //兼容火狐
};
//base64转blob
function base64ToBlob(code: Ref<string>): any {
  const parts = code.value.split(';base64,');
  const contentType = parts[0].split(':')[1];
  const raw = window.atob(parts[1]);
  const rawLength = raw.length;

  const uInt8Array = new Uint8Array(rawLength);

  for (let i = 0; i < rawLength; ++i) {
    uInt8Array[i] = raw.charCodeAt(i);
  }
  return new Blob([uInt8Array], { type: contentType });
}
