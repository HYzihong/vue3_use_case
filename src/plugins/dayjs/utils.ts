/*
 * @Author: hy
 * @Date: 2022-02-13 12:50:31
 * @LastEditors: hy
 * @Description:
 * @LastEditTime: 2022-02-20 23:46:45
 * @FilePath: /vue3UseCase/src/plugins/dayjs/utils.ts
 * Copyright 2022 hy, All Rights Reserved.
 * 仅供学习使用~
 */
import dayjs from './index';
/**
 * @description: to from
 * @param type 'to' | 'from'
 * @param type 对比的时间
 * @param type 参照物 ? fromNow/toNow : from/to
 */
const WithoutSuffix = true;
export const _toOrForm = (
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

/**
 * @description: 倒计时
 * @param {String|Date} endDate
 * @param {String|Date} nowTime
 * @return {String}
 */
export const _countDown = (endDate: string, nowTime: Date = new Date()): string => {
  // dayjs.duration()，以毫秒为单位。
  const diffDate = dayjs.duration(dayjs(endDate).valueOf() - dayjs(nowTime).valueOf());
  const day = diffDate.days(); //天
  const hours = diffDate.hours(); //小时
  const minutes = diffDate.minutes(); //分钟
  const seconds = diffDate.seconds(); //秒
  // console.log(`${day}天${hours}小时${minutes}分${seconds}秒`);
  return `${day}天${hours}小时${minutes}分${seconds}秒`;
};
