/*
 * @Author: hy
 * @Date: 2022-02-11 23:25:34
 * @LastEditors: hy
 * @Description:
 * @LastEditTime: 2022-02-11 23:52:06
 * @FilePath: /vue3UseCase/src/plugins/dayjs/index.ts
 * Copyright 2022 hy, All Rights Reserved.
 * 仅供学习使用~
 */
import dayjs from 'dayjs';
import relativeTime from 'dayjs/plugin/relativeTime';
dayjs.extend(relativeTime);

export default dayjs;

// export const toOrForm = (type: 'to' | 'from', date: string): string => {
//   if (type == 'to') {

//   }
//   return '';
// };
