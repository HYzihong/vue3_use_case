/*
 * @Author: hy
 * @Date: 2022-02-22 20:51:32
 * @LastEditors: hy
 * @Description:
 * @LastEditTime: 2022-02-22 21:01:21
 * @FilePath: /vue3UseCase/src/plugins/axios/utils/encryption/Base64.ts
 * Copyright 2022 hy, All Rights Reserved.
 * 仅供学习使用~
 */
import CryptoJS from 'crypto-js';

export default {
  /**
   * @description: base64加密
   * @param {string} str
   * @return {*}
   */
  encode(str: string): string {
    return CryptoJS.enc.Base64.stringify(CryptoJS.enc.Utf8.parse(str));
  },
  /**
   * @description: base64解密
   * @param {string} str
   * @return {*}
   */
  decode(str: string): string {
    const words = CryptoJS.enc.Base64.parse(str);
    return words.toString(CryptoJS.enc.Utf8);
  },
};
