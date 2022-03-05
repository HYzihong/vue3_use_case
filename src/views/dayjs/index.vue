<!--
 * @Author: hy
 * @Date: 2022-02-11 23:02:00
 * @LastEditors: hy
 * @Description: 
 * @LastEditTime: 2022-02-18 14:58:53
 * @FilePath: /vue3UseCase/src/views/dayjs/index.vue
 * Copyright 2022 hy, All Rights Reserved. 
 * 仅供学习使用~
-->
<template>
  <div class="m-5">
    <!-- <count-down-clock /> -->
    <days-until end-time="2022-04-01" begin-time="2022-02-27" />
    <!-- <days-until end-time="2022-12-15" begin-time="2022-02-15" /> -->
    <h1>Dayjs</h1>
    <el-button v-if="isActive" type="warning" @click="pause">暂停</el-button>
    <el-button v-else type="success" @click="resume">重新开始(恢复)</el-button>
    <span class="ml-10">倒计时：{{ text }}</span>
    <el-button
      @click="secondCountDown()"
      :disabled="loading"
      :type="isrun ? 'warning' : 'success'"
      >{{ isrun ? `${time}s` : '开始' }}</el-button
    ><el-button v-if="loading" @click="secondCountDown()">请求成功！</el-button>
    <el-table class="m-4" :data="date" border>
      <el-table-column prop="title" label="title" />
      <el-table-column prop="script" label="script" />
      <el-table-column prop="result" label="result" />
    </el-table>
  </div>
</template>
<script lang="ts" setup>
  import dayjs, { countDown, toOrForm } from '@/plugins/dayjs/index';
  import { useIntervalFn } from '@vueuse/core';
  import { ref } from 'vue';
  // import useCountDown from './hooks/useCountDown';
  import useSecondCountDown from './hooks/useSecondCountDown';
  import DaysUntil from './components/DaysUntil.vue';
  // import CountDownClock from './components/CountDownClock.vue';
  // type
  type dayData = {
    title: string;
    script: string;
    result: string;
  };
  // const { text, isActive, pause, resume } = useCountDown('2022-12-25');
  const text = ref('');
  text.value = dayjs().format('YYYY-MM-DD HH:mm:ss');
  const endDate = ref('2022-12-25');
  const interval = ref(1000);
  const loading = ref(false); // 页面全局的loading状态
  // methods
  const { pause, resume, isActive } = useIntervalFn(
    () => {
      text.value = countDown(endDate.value, new Date());
      // console.log(text.value);
    },
    interval.value,
    {
      immediate: false, //  是否立即执行
    },
  );
  // : 是重命名 = 是赋默认值
  const { start, time, isActive: isrun, pause: down } = useSecondCountDown();
  const secondCountDown = (time = 60) => {
    if (!isrun.value) {
      // 开始
      start(time);
      // ajax请求
      loading.value = true;
    } else {
      // 停止
      down();
      loading.value = false;
    }
  };
  /*
    一般验证码业务流程：
    点击发送验证码->校验form数据是否合格 
    ->不合格->return->message alart
    ->合格->开始定时器 -(loading = true)-> ajax请求 成功or失败 -(loading = false)-> 关闭定时器
  */
  // data
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
    {
      title: '倒计时',
      script: '',
      result: `${text.value}`,
    },
  ]);
  // console.log(dayjs('2025-01-01').fromNow(true).split(' '));
  // function dateByDate(){

  // }
</script>
