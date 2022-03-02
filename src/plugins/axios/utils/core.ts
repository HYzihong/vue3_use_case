/*
 * @Author: hy
 * @Date: 2022-02-28 22:22:22
 * @LastEditors: hy
 * @Description:
 * @LastEditTime: 2022-02-28 22:51:29
 * @FilePath: /vue3UseCase/src/plugins/axios/utils/core.ts
 * Copyright 2022 hy, All Rights Reserved.
 * 仅供学习使用~
 */

import { Vue3Axios } from '@/types/v3-axios';
import type { AxiosInstance, AxiosRequestConfig, AxiosResponse } from 'axios';
import axios from 'axios';
export default class {
  /*
    TODO
    [-] setHeader 设置 http header
    [*] createAxios 创建 axios 实例
    [-] setupInterceptors 刷新 axios 拦截器
    [*] cancelRequest 取消请求的配置
    [-] token的相关操作
     [-] getToken 获取token >utils/auth.ts
     [-] setToken 设置token >utils/auth.ts
     [-] deleteToken 删除token >utils/auth.ts
     [-] updateToken 刷新token 要刷新token，进行重新验证用户信息，再进行deleteToken->setToken->getToken
    [-] 针对数据的相关操作
      [-] 缓存一些数据量较大的，不常用的数据 可以设置刷新策略(定时刷新、不定时刷新（提示刷新)）
    [-] donloadFile 下载文件的配置
    [-] 请求队列的相关操作
      [-] 缓存请求队列
      [-] 清空请求队列

  */
  private axiosInstance: AxiosInstance;
  private readonly options: Vue3Axios.axiosConfig;
  // token 是否在刷新中 存在pinia
  // private tokenRefreshing: boolean;
  // 请求队列 存在pinia
  // private requestQueue;
  // 用于移除拦截器
  private requestInterceptor: any;
  private responseInterceptor: any;
  //
  constructor(options: Vue3Axios.axiosConfig) {
    this.options = options;
    this.axiosInstance = axios.create(options);
    this.setupInterceptors();
  }

  /**
   * @description:
   * @param {*}
   * @return {*}
   */
  private setupInterceptors() {
    console.log('getInterceptors ==>');
    const {
      requestInterceptors,
      requestInterceptorsCatch,
      responseInterceptors,
      responseInterceptorsCatch,
    } = this.getTransformAndInterceptor();
    // console.log('axiosInstance ==>',axiosInstance);
    this.requestInterceptor = this.axiosInstance.interceptors.request.use(
      (config: AxiosRequestConfig) => {
        // 在发送请求之前做些什么
        /*
        用 function(config: AxiosRequestConfig){
         requestInterceptors(config, this.options); 
        } 
        会报错
        'this' implicitly has type 'any' because it does not have a type annotation.ts(2683)
        core.ts(45, 7): An outer value of 'this' is shadowed by this container.
        */
        //  先判断token的状态
        // token 存在
        // // 1 . token有效
        if (requestInterceptors && typeof requestInterceptors == 'function') {
          config = requestInterceptors(config, this.options);
        }
        // // 2 . 即将失效
        // this.tokenRefreshing = true;

        return config;
      },
      (error: any) => {
        // 对请求错误做些什么
        if (requestInterceptorsCatch && typeof requestInterceptorsCatch == 'function') {
          requestInterceptorsCatch(error);
        }
        return Promise.reject(error);
      },
    );
    // 添加响应拦截器
    this.responseInterceptor = axios.interceptors.response.use(
      (response: AxiosResponse<any>) => {
        // TODO 这里可以有请求队列 当请求完成后进行请求队列的出队 也可以进行防抖之类的操作
        // 2xx 范围内的状态码都会触发该函数。
        // 对响应数据做点什么
        if (responseInterceptors && typeof responseInterceptors == 'function') {
          response = responseInterceptors(response);
        }
        return response;
      },
      (error: any) => {
        // 超出 2xx 范围的状态码都会触发该函数。
        // 对响应错误做点什么
        if (responseInterceptorsCatch && typeof responseInterceptorsCatch == 'function') {
          responseInterceptorsCatch(error);
        }
        return Promise.reject(error);
      },
    );
  }

  /**
   * @description: 获取 axios 的实例
   */
  public getAxios(): AxiosInstance {
    return this.axiosInstance;
  }

  /**
   * @description: 配置 `axios` 实例的 `header`
   */
  setHeader(headers: any): void {
    if (!this.axiosInstance) {
      return;
    }
    Object.assign(this.axiosInstance.defaults.headers, headers);
  }

  /**
   * @description: 移除请求拦截器
   * @param {*}
   * @return {*}
   */
  public ejectRequestInterceptor(): void {
    this.axiosInstance.interceptors.request.eject(this.requestInterceptor);
  }

  /**
   * @description: 移除响应拦截器
   * @param {*}
   * @return {*}
   */
  public ejectResponseInterceptor(): void {
    this.axiosInstance.interceptors.response.eject(this.responseInterceptor);
  }

  /**
   * @description: 获取
   * @param {*}
   * @return {*}
   */
  private getTransformAndInterceptor(): any {
    const {
      // 拦截器
      // 请求拦截器
      requestInterceptors,
      requestInterceptorsCatch,
      // 响应拦截器
      responseInterceptors,
      responseInterceptorsCatch,
    } = this.options;
    return {
      requestInterceptors,
      requestInterceptorsCatch,
      responseInterceptors,
      responseInterceptorsCatch,
    };
  }

  /**
   * @description: Reconfigure axios
   * @param {Vue3Axios} config
   * @return {*}
   */
  public configAxios(config: Vue3Axios.axiosConfig): void {
    if (!this.axiosInstance) {
      return;
    }
    this.createAxios(config);
  }

  /**
   * @description: 创建 axios 实例
   */
  // TODO config 参数完善
  private createAxios(config: Vue3Axios.axiosConfig): void {
    this.axiosInstance = axios.create(config);
  }

  /**
   *  get 请求
   * @param {Vue3Axios} config
   * @return {*}
   */
  public get(config: Vue3Axios.axiosConfig): object {
    return { config };
  }
}
