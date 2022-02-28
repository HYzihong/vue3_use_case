/*
 * @Author: hy
 * @Date: 2022-02-28 22:32:00
 * @LastEditors: hy
 * @Description:
 * @LastEditTime: 2022-02-28 22:32:06
 * @FilePath: /vue3UseCase/src/apis/modules/user.modules copy.ts
 * Copyright 2022 hy, All Rights Reserved.
 * 仅供学习使用~
 */
import api from '@/plugins/axios/index';
// import type { userInfo } from '../types/user.types';

enum URL {
  USERINFO = '/user/info',
}

export const user_info_api = api.get({ apiName: 'user_info_api', url: URL.USERINFO });
// export const user_info_api = api.get({ apiName:,url: URL.USERINFO, data: userInfo });
