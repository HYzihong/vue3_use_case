/*
 * @Author: hy
 * @Date: 2022-02-28 22:23:46
 * @LastEditors: hy
 * @Description:
 * @LastEditTime: 2022-02-28 22:24:07
 * @FilePath: /vue3UseCase/src/plugins/axios/utils/constants copy.ts
 * Copyright 2022 hy, All Rights Reserved.
 * 仅供学习使用~
 */
// @see copy by vue-vben-admin/src/enums/httpEnum.ts
/**
 * @description: 请求方法
 */
export enum RequestEnum {
  GET = 'GET',
  POST = 'POST',
  PUT = 'PUT',
  DELETE = 'DELETE',
}

/**
 * @description:  请求头 contentType
 */
export enum ContentTypeEnum {
  // json
  JSON = 'application/json;charset=UTF-8',
  // form-data qs
  FORM_URLENCODED = 'application/x-www-form-urlencoded;charset=UTF-8',
  // form-data  upload
  FORM_DATA = 'multipart/form-data;charset=UTF-8',
}

/**
 * @description: 请求结果
 */
export enum RequestResultEnum {
  Success = 0,
  ERROR = 1,
}

// export enum RequestResultEnum {
//   Success = '201',
//   ERROR = '400',
// }
