/*
 * @Author: hy
 * @Date: 2022-02-11 23:25:34
 * @LastEditors: hy
 * @Description:
 * @LastEditTime: 2022-02-12 22:14:57
 * @FilePath: /vue3UseCase/src/plugins/dayjs/index.ts
 * Copyright 2022 hy, All Rights Reserved.
 * 仅供学习使用~
 */
import dayjs from 'dayjs';
import relativeTime from 'dayjs/plugin/relativeTime';
import dayOfYear from 'dayjs/plugin/dayOfYear';

dayjs.extend(relativeTime);
dayjs.extend(dayOfYear);

export default dayjs;

/**
 * @description: to from
 * @param type 'to' | 'from'
 * @param type 对比的时间
 * @param type 参照物 ? fromNow/toNow : from/to
 */
const WithoutSuffix = true;
export const toOrForm = (
  type: 'to' | 'from',
  contrastDate: string,
  byContrastDate?: string,
): string => {
  let res = '';

  if (type == 'to') {
    if (!byContrastDate) {
      res = dayjs(byContrastDate).to(dayjs(contrastDate), WithoutSuffix);
    } else {
      res = dayjs(byContrastDate).toNow(WithoutSuffix);
    }
  } else {
    if (!byContrastDate) {
      res = dayjs(byContrastDate).from(dayjs(contrastDate), WithoutSuffix);
    } else {
      res = dayjs(byContrastDate).fromNow(WithoutSuffix);
    }
  }
  // console.log(res.split(' '));
  return res.split(' ')[0] == 'a' ? '1' : res.split(' ')[0];
};