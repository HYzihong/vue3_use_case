/*
 * @Author: hy
 * @Date: 2022-02-28 22:34:53
 * @LastEditors: hy
 * @Description:
 * @LastEditTime: 2022-02-28 22:35:11
 * @FilePath: /vue3UseCase/src/types/v3-axios.d.ts
 * Copyright 2022 hy, All Rights Reserved.
 * 仅供学习使用~
 */
import type { AxiosRequestConfig, AxiosResponse } from 'axios';
declare namespace Vue3Axios {
  interface axiosConfig extends AxiosRequestConfig {
    apiName?: string;
    // copy by vue-vben-admin/src/utils/http/axios/axiosTransform.ts
    /**
     * @description: 请求之前的拦截器
     */
    requestInterceptors?: (config: AxiosRequestConfig, options: axiosConfig) => AxiosRequestConfig;

    /**
     * @description: 请求之后的拦截器
     */
    responseInterceptors?: (res: AxiosResponse<any>) => AxiosResponse<any>;

    /**
     * @description: 请求之前的拦截器错误处理
     */
    requestInterceptorsCatch?: (error: Error) => void;

    /**
     * @description: 请求之后的拦截器错误处理
     */
    responseInterceptorsCatch?: (error: Error) => void;
  }
  // type axiosConfig = {
  //   url: string;
  //   method: 'get' | 'GET' | 'delete' | 'DELETE' | 'post' | 'POST' | 'put' | 'PUT';
  //   transformRequest: [Function];
  //   transformResponse: [Function];
  // };
}
