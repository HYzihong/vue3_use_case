/*
 * @Author: hy
 * @Date: 2022-02-14 15:50:08
 * @LastEditors: hy
 * @Description:
 * @LastEditTime: 2022-02-14 22:13:02
 * @FilePath: /vue3UseCase/src/views/dayjs/hooks/useCountDown.ts
 * Copyright 2022 hy, All Rights Reserved.
 * 仅供学习使用~
 */
import dayjs, { countDown } from '@/plugins/dayjs/index';
import { useIntervalFn } from '@vueuse/core';
import { ref } from 'vue';

export default (endDate: string, interval = 1000) => {
  // const text = ref('1');
  // const { pause, resume, isActive } = useIntervalFn(() => {
  //   text.value = countDown(endDate, new Date());
  //   // console.log(text.value);
  // }, interval);
  const text = ref('');
  text.value = dayjs().format('YYYY-MM-DD HH:mm:ss');
  // const endDate = ref('2022-12-25');
  // const interval = ref(1000);
  const { pause, resume, isActive } = useIntervalFn(
    () => {
      text.value = countDown(endDate, new Date());
      // console.log(text.value);
    },
    interval,
    {
      immediate: false, //  是否立即执行
    },
  );
  return {
    pause,
    resume,
    isActive,
    text,
  };
};
