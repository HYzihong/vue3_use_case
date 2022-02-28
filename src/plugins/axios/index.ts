/*
 * @Author: hy
 * @Date: 2022-02-22 20:50:03
 * @LastEditors: hy
 * @Description:
 * @LastEditTime: 2022-02-28 22:24:43
 * @FilePath: /vue3UseCase/src/plugins/axios/index.ts
 * Copyright 2022 hy, All Rights Reserved.
 * 仅供学习使用~
 */

import { Vue3Axios } from '@/types/v3-axios';
import { AxiosRequestConfig } from 'axios';
import { ContentTypeEnum } from './utils/constants';
import _Vue3Axios from './utils/core';

/**
 * @description:
 */
function createAxios() {
  return new _Vue3Axios({
    url: '',
    timeout: 10 * 1000,
    headers: { 'Content-Type': ContentTypeEnum.JSON },
    // `validateStatus` 定义了对于给定的 HTTP状态码是 resolve 还是 reject promise。
    // 如果 `validateStatus` 返回 `true` (或者设置为 `null` 或 `undefined`)，
    // 则promise 将会 resolved，否则是 rejected。
    validateStatus(status: number) {
      return status >= 200 && status < 300; // 默认值
    },
    transformRequest: [
      (data: any, headers: any): any => {
        console.log(data, headers);
        return data;
      },
    ],
    requestInterceptors(
      config: AxiosRequestConfig,
      options: Vue3Axios.axiosConfig,
    ): AxiosRequestConfig {
      console.log(config, options);
      return config;
    },
    transformResponse: [],
  });
}

export default createAxios();
