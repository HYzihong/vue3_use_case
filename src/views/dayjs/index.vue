<!--
 * @Author: hy
 * @Date: 2022-02-11 23:02:00
 * @LastEditors: hy
 * @Description: 
 * @LastEditTime: 2022-02-13 15:38:48
 * @FilePath: /vue3UseCase/src/views/dayjs/index.vue
 * Copyright 2022 hy, All Rights Reserved. 
 * 仅供学习使用~
-->
<template>
  <div class="m-5">
    <h1>Dayjs</h1>
    <el-table class="m-4" :data="date" border>
      <el-table-column prop="title" label="title" />
      <el-table-column prop="script" label="script" />
      <el-table-column prop="result" label="result" />
    </el-table>
  </div>
</template>
<script lang="ts" setup>
  import dayjs, { toOrForm } from '@/plugins/dayjs/index';
  import { ref } from 'vue';
  type dayData = {
    title: string;
    script: string;
    result: string;
  };
  const date = ref<dayData[]>([
    { title: '当前时间', script: 'dayjs()', result: `${dayjs()}` },
    {
      title: '当前时间（带格式）',
      script: `dayjs().format('YYYY-MM-DD HH:mm:ss')`,
      result: dayjs().format('YYYY-MM-DD HH:mm:ss'),
    },
    {
      title: '当前时间（自定义格式）',
      script: `dayjs().format('[hy] YYYY-MM-DDTHH:mm:ssZ[Z]`,
      result: dayjs().format('[hy] YYYY-MM-DDTHH:mm:ssZ[Z]'),
    },
    {
      title: '当前距1997-01-01过了几年了',
      script: `dayjs().from(dayjs('1997-01-01'))`,
      // result: dayjs().from(dayjs('1997-01-01')),
      result: dayjs().from(dayjs('1997-01-01'), true),
    },
    {
      title: '今年距2025-01-01年还有几年',
      script: `dayjs('2025-01-01').fromNow(true)`,
      result: dayjs('2025-01-01').fromNow(true),
    },
    {
      title: '今年距2025-01-01年还有几年(封装)',
      script: `toOrForm('from', '2025-01-01')`,
      result: toOrForm('from', '2025-01-01'),
      // result: dayjs('2025-01-01').fromNow(true),
    },
    {
      title: '今年距2023-01-01年还有几年',
      script: `dayjs('2023-01-01').fromNow(true)`,
      result: dayjs('2023-01-01').fromNow(true),
    },
    {
      title: '今年距2023-01-01年还有几年(封装)',
      script: `toOrForm('from', '2023-01-01')`,
      result: toOrForm('from', '2023-01-01'),
      // result: dayjs('2025-01-01').fromNow(true),
    },
    {
      title: '现在是今年的第几天？',
      script: `dayjs('2023-01-01').fromNow(true)`,
      result: `今天是今年的第${dayjs(new Date()).dayOfYear()}天`,
    },
    {
      title: '今年的第1天是几月几号',
      script: `dayjs(new Date()).dayOfYear(1).format('YYYY年MM月DD日')`,
      result: `今年的第1天是${dayjs(new Date()).dayOfYear(1).format('YYYY年MM月DD日')}`,
    },
    {
      title: '2016-10-02 是否在 2016-01-01 2016-10-30 之中 ',
      script: `dayjs(new Date()).dayOfYear(1).format('YYYY年MM月DD日')`,
      // 如果使用年份对比 `year` 则传入第三个参数
      // 第四个参数是两个字符 '[' 表示包含, '(' 表示不包含
      // '()' 不包含开始和结束的日期 (默认)
      // '[]' 包含开始和结束的日期
      // '[)' 包含开始日期但不包含结束日期
      result: `${
        dayjs('2016-10-03').isBetween('2016-01-01', '2016-10-30', null, '[)') ? '是' : '否'
      }`,
    },
    {
      title: '今年是否是闰年',
      script: `dayjs(new Date()).isLeapYear()`,
      result: `${dayjs(new Date()).isLeapYear() ? '是' : '否'}`,
    },
    {
      title: '2010-10-20 是否是在 2010-10-19 之后',
      script: `{dayjs('2010-10-20').isSameOrAfter('2010-10-19', 'year')`,
      result: `${dayjs('2010-10-20').isSameOrAfter('2010-10-19', 'year') ? '是' : '否'}`,
    },
    {
      title: '当前是今年的第几周',
      script: `dayjs(new Date()).week()`,
      // result: `${dayjs('2022-01-01').week(1).format('YYYY年MM月DD日')}`,
      result: `当前是今年的第${dayjs(new Date()).week()}周`,
      // result: `${dayjs('2022-01-01').week()}`,
    },
    {
      title: '今年有几周',
      script: `dayjs(new Date()).isoWeeksInYear()`,
      result: `${dayjs(new Date()).isoWeeksInYear()}`,
      // result: `${dayjs('2022-01-01').isoWeeksInYear()}`,
    },
    {
      title: '当前时间距离明天的时间差',
      script: `dayjs(new Date()).dayOfYear(1).format('YYYY年MM月DD日')`,
      result: `${dayjs('2022-02-14').diff(new Date(), 'hour')}h/${dayjs('2022-02-14').diff(
        new Date(),
        'minute',
      )}minute(分钟)/${dayjs('2022-02-14').diff(new Date(), 'second')}second(秒)/`,
      // result: `${dayjs('2022-01-01').isoWeeksInYear()}`,
    },
  ]);
  // console.log(dayjs('2025-01-01').fromNow(true).split(' '));
  // function dateByDate(){

  // }
</script>
