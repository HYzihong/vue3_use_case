/*
 * @Author: hy
 * @Date: 2022-02-22 20:51:32
 * @LastEditors: hy
 * @Description:
 * @LastEditTime: 2022-02-22 21:01:32
 * @FilePath: /vue3UseCase/src/plugins/axios/utils/encryption/MD5.ts
 * Copyright 2022 hy, All Rights Reserved.
 * 仅供学习使用~
 */
import CryptoJS from 'crypto-js';

export default {
  encode(str: any) {
    return CryptoJS.MD5(str).toString();
  },
};
