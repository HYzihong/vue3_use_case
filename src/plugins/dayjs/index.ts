/*
 * @Author: hy
 * @Date: 2022-02-11 23:25:34
 * @LastEditors: hy
 * @Description:
 * @LastEditTime: 2022-02-20 23:46:25
 * @FilePath: /vue3UseCase/src/plugins/dayjs/index.ts
 * Copyright 2022 hy, All Rights Reserved.
 * 仅供学习使用~
 */
// base
import dayjs from 'dayjs';
// plugin
import relativeTime from 'dayjs/plugin/relativeTime';
import dayOfYear from 'dayjs/plugin/dayOfYear';
import isBetween from 'dayjs/plugin/isBetween';
import isLeapYear from 'dayjs/plugin/isLeapYear';
import isSameOrAfter from 'dayjs/plugin/isSameOrAfter';
import weekOfYear from 'dayjs/plugin/weekOfYear';
import isoWeeksInYear from 'dayjs/plugin/isoWeeksInYear';
import duration from 'dayjs/plugin/duration';

dayjs.extend(relativeTime);
dayjs.extend(dayOfYear);
dayjs.extend(isBetween); // 返回一个 boolean 来展示一个时间是否介于两个时间之间.
dayjs.extend(isLeapYear); // 年份是不是闰年
dayjs.extend(isSameOrAfter); // 日期是相同的还是在另一个日期之后
dayjs.extend(weekOfYear); // 日期是年中第几周
dayjs.extend(isoWeeksInYear); //一年中有几周 依赖于 isLeapYear
dayjs.extend(duration); // 时间长度

dayjs.locale('zh-cn'); // 本地化语言配置

export default dayjs;

// utils
import { _toOrForm, _countDown } from './utils';

export { _countDown as countDown, _toOrForm as toOrForm };
