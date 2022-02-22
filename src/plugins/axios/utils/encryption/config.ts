/*
 * @Author: hy
 * @Date: 2022-02-21 14:26:36
 * @LastEditors: hy
 * @Description:
 * @LastEditTime: 2022-02-22 20:52:56
 * @FilePath: /vue3UseCase/src/plugins/axios/utils/encryption/config.ts
 * Copyright 2022 hy, All Rights Reserved.
 * 仅供学习使用~
 */

import CryptoJS from 'crypto-js';
export default {
  key: CryptoJS.enc.Utf8.parse('1111111987654321'), //密钥 16位
  iv: CryptoJS.enc.Utf8.parse('1234567891111111'), // 初始向量 initial vector 16 位
  // key 和 iv 可以一致
};
