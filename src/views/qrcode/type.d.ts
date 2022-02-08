/*
 * @Author: hy
 * @Date: 2022-02-08 02:39:37
 * @LastEditors: hy
 * @Description:
 * @LastEditTime: 2022-02-08 23:25:49
 * @FilePath: /vue3UseCase/src/views/qrcode/type.d.ts
 * Copyright 2022 hy, All Rights Reserved.
 * 仅供学习使用~
 */
// qrcode 的类型定义文件
declare namespace QrCodeVue3 {
  type QrOptions = {
    typeNumber: TypeNumber; // 怎么更好的设定取值范围为0~40的类型定义
    mode: Mode;
    errorCorrectionLevel: ErrorCorrectionLevel;
  };
  type HideBackgroundDots = {
    hideBackgroundDots: boolean;
    imageSize: number;
    margin: number;
    crossOrigin?: 'anonymous' | 'use-credentials';
  };
  type DotsOptions = {
    color: string;
    gradient?: Gradient;
    type: 'rounded' | 'dots' | 'classy' | 'classy-rounded' | 'square' | 'extra-rounded';
  };
  type BackgroundOptions = {
    color: string;
    gradient?: Gradient;
  };
  type Gradient = {
    type: 'linear' | 'radial';
    rotation: number;
    colorStops?: colorStops[];
  };
  type colorStops = {
    offset: number;
    color: string;
  };
  type cornersSquareOptions = {
    color?: string;
    gradient?: Gradient;
    type?: 'dot' | 'square' | 'extra-rounded' | undefined;
  };
  type CornersDotOptions = {
    color?: string;
    gradient?: Gradient;
    type?: 'dot' | 'square' | undefined;
  };
  type DownloadOptions = {
    name: string;
    extension: 'png' | 'jpeg' | 'webp';
  };

  type ErrorCorrectionLevel = 'L' | 'M' | 'Q' | 'H';
  type Mode = 'Numeric' | 'Alphanumeric' | 'Byte' | 'Kanji';
  type TypeNumber =
    | 0
    | 1
    | 2
    | 3
    | 4
    | 5
    | 6
    | 7
    | 8
    | 9
    | 10
    | 11
    | 12
    | 13
    | 14
    | 15
    | 16
    | 17
    | 18
    | 19
    | 20
    | 21
    | 22
    | 23
    | 24
    | 25
    | 26
    | 27
    | 28
    | 29
    | 30
    | 31
    | 32
    | 33
    | 34
    | 35
    | 36
    | 37
    | 38
    | 39
    | 40;
}
