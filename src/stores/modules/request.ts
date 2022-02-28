/*
 * @Author: hy
 * @Date: 2022-02-28 22:34:23
 * @LastEditors: hy
 * @Description:
 * @LastEditTime: 2022-02-28 22:34:29
 * @FilePath: /vue3UseCase/src/stores/modules/request copy.ts
 * Copyright 2022 hy, All Rights Reserved.
 * 仅供学习使用~
 */
import type { AxiosRequestConfig, Canceler } from 'axios';
import { defineStore } from 'pinia';
import axios from 'axios';

type UserInfo = {
  // token 是否在刷新状态中
  tokenRefreshing: boolean;
  // 请求队列
  requestQueue: Map<string, string>;
  cancelQueue: Map<string, Canceler>;
};
export const appStore = defineStore({
  id: 'appInfo',
  state: (): UserInfo => ({
    tokenRefreshing: true,
    requestQueue: new Map(),
    cancelQueue: new Map(),
  }),
  actions: {
    hasInRequestQueue({ apiName, url }: { apiName: string; url: string }): boolean {
      if (!this.requestQueue.has(apiName)) {
        return false;
      } else {
        if (url !== this.requestQueue.get(apiName)) {
          // 这里默认取消上一次这个接口的请求 set 默认刷新值
          // this.updateRequestQueueByApiName(apiName);
          // 取消当前请求
          this.cancelRequest(apiName);
          // 刷新值
          return false;
        } else {
          return true;
        }
      }
    },
    // updateRequestQueueByApiName(apiName: string): void {
    //   //
    //   this.deleteQueue(apiName);
    // },
    /**
     * 取消当前请求
     * @param {string} apiName api接口名称
     */
    cancelRequest(apiName: string): void {
      if (this.cancelQueue.has(apiName)) {
        const cancel = this.cancelQueue.get(apiName);
        cancel && cancel(apiName);
      }
    },
    /**
     * 在请求队列中新增接口请求
     * @param {object} { apiName api接口名称, url 路径}
     * @return {*}
     */
    setRequestQueue(
      { apiName, url }: { apiName: string; url: string },
      config: AxiosRequestConfig,
    ): boolean {
      console.log(`api ==> ${apiName} : ${url}`);
      // TODO 这个是否使用qs来处理一些param，来组成新的url
      if (!this.hasInRequestQueue({ apiName, url })) {
        // 设置请求队列
        this.requestQueue.set(apiName, url);
        // 当token不在刷新的状态时
        if (!this.tokenRefreshing) {
          // TODO 待验证 如果没有token的我们就要配置不需要设置这个’取消请求队列‘，是否要通过cancelToken来控制
          // 设置取消请求队列
          config.cancelToken =
            config.cancelToken ||
            new axios.CancelToken((cancel) => {
              this.cancelQueue.set(url, cancel);
            });
        }
        return true;
      } else {
        // 已存在对此接口的请求
        return false;
      }
    },
    /**
     * 根据请求接口来删除对应的请求队列的值
     * @param {string} apiName
     * @return {*}
     */
    deleteQueue(apiName: string): void {
      this.requestQueue.delete(apiName);
      this.cancelQueue.delete(apiName);
    },
    clearQueue(): void {
      this.requestQueue.clear();
      this.cancelQueue.clear();
    },
  },
  getters: {},
});
