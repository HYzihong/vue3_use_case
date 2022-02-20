/*
 * @Author: hy
 * @Date: 2022-02-14 22:52:21
 * @LastEditors: hy
 * @Description:
 * @LastEditTime: 2022-02-20 23:48:18
 * @FilePath: /vue3UseCase/src/views/dayjs/hooks/useSecondCountDown.ts
 * Copyright 2022 hy, All Rights Reserved.
 * 仅供学习使用~
 */

import { useIntervalFn } from '@vueuse/core';
import { ref } from 'vue';
// ❌
// export default (seconds: number): object => {
//   const time = ref(seconds);
//   const { pause, resume } = useIntervalFn(
//     () => {
//       // 时间-1
//       time.value--;
//       // 时间<=0 停止倒计时
//       if (time.value <= 0) {
//         pause();
//       }
//     },
//     1000,
//     { immediate: false },
//   );
//   return {
//     time,
//     pause,
//     resume,
//   };
// };
// ✅
export default () => {
  const time = ref(0);
  // pause 停止  resume继续  isActive 状态是否是启动状态
  const { pause, resume, isActive } = useIntervalFn(
    () => {
      time.value--;
      if (time.value <= 0) {
        pause();
      }
    },
    1000,
    { immediate: false },
  );
  /**
   * @description: 输入时间开始
   * @param {number} seconds default is 60(s)
   * @return {*}
   */
  const start = (seconds = 60): void => {
    time.value = seconds;
    // 开始
    resume();
  };
  return { time, start, isActive, pause };
};
