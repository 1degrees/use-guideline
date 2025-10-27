# vue3 手势库工具库

本工程基于vue3 Component API 实现的拖拽辅助线工具库
[![npm (tag)](https://img.shields.io/npm/v/@use-guideline/vue3?style=flat&colorA=000000&colorB=000000)](https://www.npmjs.com/package/@use-guideline/vue3) ![npm bundle size](https://img.shields.io/bundlephobia/minzip/@use-guideline/vue3?style=flat&colorA=000000&colorB=000000) ![NPM](https://img.shields.io/npm/l/@use-guideline/vue3?style=flat&colorA=000000&colorB=000000) [![Discord Shield](https://img.shields.io/discord/740090768164651008?style=flat&colorA=000000&colorB=000000&label=discord&logo=discord&logoColor=ffffff)](https://discord.gg/poimandres)

<p align="middle">
  <img src="https://i.imgur.com/qLKJod3.gif" width="400"/>
  <img src="https://i.imgur.com/H6nXQEq.gif" width="400"/>
  <img src="https://i.imgur.com/THKPrmR.gif" width="400"/>
  <img src="https://i.imgur.com/cuOfqST.gif" width="400"/>
  <img src="https://i.imgur.com/iwZOfT9.gif" width="400"/>
  <img src="https://i.imgur.com/Walt1Ip.gif" width="400"/>
</p>

<p align="middle">
  <a href="https://use-guideline-vue3.netlify.app/">Demo文档地址</a>
  <a href="https://1degrees.github.io/use-guideline/">Demo文档地址(备用)</a>
</p>

## 使用方式

### 安装 @use-guideline/vue3

```bash

npm install @use-guideline/vue3

yarn add @use-guideline/vue3

pnpm install @use-guideline/vue3

```

### @use-guideline/vue3 component API 介绍

useDrag 拖拽、useMove 移动、useHover 悬停、useWheel 滚轮、useScroll 滚动、

usePinch 缩放、旋转、useGesture 自定义手势。

下面由useDrag入手介绍简单使用

@use-guideline/vue3提供了两种方式实现，具体可看下方实现

### 使用方式一：useGuideline

使用 useGuideline API 可以快速生成拖拽辅助线

```vue
<template>
  <div class="flex fill center container">
    <GuideLine :line="line" />
    <div class="drag-container">
      <div v-for="item in items" :key="item" class="card" :style="{backgroundColor: item}"></div>
      <div ref="targetRef" class="target" v-bind="bind()"> 拖拽辅助线 </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import { useGuideline, GuideLine } from '@use-guideline/vue3'
import { useDrag } from '@use-gesture-x/vue3'
const items = ['hotpink', 'blue', 'green', 'red']
const targetRef = ref(null)
const { line, dragMove, dragEnd } = useGuideline({ isAdsorb: true })
const bind = useDrag(({ xy: [x, y], active, last, movement: [mx, my] }) => {
  targetRef.value.style.left = x + 'px'
  targetRef.value.style.top = y + 'px'
  if (active) {
    dragMove(targetRef.value)
  } else if (last) {
    dragEnd()
  }
})
</script>
```

## 功能特点

- 📦 支持拖拽过程中的辅助线参考
- 🔍 支持拖拽过程中拖拽元素的吸附功能
- 📋 代码一键复制，使用简单
- 🌈 丝滑、美观的体验感受
- 🚀 支持 Vue3 开箱即用
- 💡 详细使用见文档说明
