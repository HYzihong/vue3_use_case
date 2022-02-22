/*
 * @Author: hy
 * @Date: 2022-02-22 20:51:32
 * @LastEditors: hy
 * @Description:
 * @LastEditTime: 2022-02-22 21:08:09
 * @FilePath: /vue3UseCase/src/plugins/axios/utils/encryption/AES.ts
 * Copyright 2022 hy, All Rights Reserved.
 * 仅供学习使用~
 */
import CryptoJS from 'crypto-js';
import CONFIG from './config';
export default {
  //aes加密
  encrypt(word: string | object): string {
    let encrypted: any = '';
    if (typeof word == 'string') {
      const srcs = CryptoJS.enc.Utf8.parse(word);
      encrypted = CryptoJS.AES.encrypt(srcs, CONFIG.key, {
        iv: CONFIG.iv,
        // mode 支持 CBC、CFB、CTR、ECB、OFB, 默认 CBC
        // padding 支持 Pkcs7、AnsiX923、Iso10126
        // NoPadding、ZeroPadding, 默认 Pkcs7, 即 Pkcs5
        mode: CryptoJS.mode.CBC,
        padding: CryptoJS.pad.Pkcs7,
      });
    } else if (typeof word == 'object') {
      //对象格式的转成json字符串
      const data = JSON.stringify(word);
      const srcs = CryptoJS.enc.Utf8.parse(data);
      encrypted = CryptoJS.AES.encrypt(srcs, CONFIG.key, {
        iv: CONFIG.iv,
        mode: CryptoJS.mode.CBC,
        padding: CryptoJS.pad.Pkcs7,
      });
    }
    return encrypted.ciphertext.toString();
  },
  // aes解密
  decrypt(word: string): string {
    const encryptedHexStr = CryptoJS.enc.Hex.parse(word);
    const srcs = CryptoJS.enc.Base64.stringify(encryptedHexStr);
    const decrypt = CryptoJS.AES.decrypt(srcs, CONFIG.key, {
      iv: CONFIG.iv,
      mode: CryptoJS.mode.CBC,
      padding: CryptoJS.pad.Pkcs7,
    });
    const decryptedStr = decrypt.toString(CryptoJS.enc.Utf8);
    return decryptedStr.toString();
  },
};
