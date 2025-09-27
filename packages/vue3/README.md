# vue3 手势库工具库

本工程是借鉴 @use-gesture 库，基于vue3 Component API 实现的手势库工具库

[![npm (tag)](https://img.shields.io/npm/v/@use-guideline/vue3?style=flat&colorA=000000&colorB=000000)](https://www.npmjs.com/package/@use-guideline/vue3) ![npm bundle size](https://img.shields.io/bundlephobia/minzip/@use-guideline/vue3?style=flat&colorA=000000&colorB=000000) ![NPM](https://img.shields.io/npm/l/@use-guideline/vue3?style=flat&colorA=000000&colorB=000000) [![Discord Shield](https://img.shields.io/discord/740090768164651008?style=flat&colorA=000000&colorB=000000&label=discord&logo=discord&logoColor=ffffff)](https://discord.gg/poimandres)

@use-gesture 是一个可将更丰富的鼠标和触摸事件绑定到任意组件或视图的库。借助你接收到的数据，设置手势变得十分简单，通常只需几行代码即可完成。
你可以单独使用该库，但要充分发挥其功能，建议将它与 vue-use-spring 这类动画库结合使用，不过你也完全可以搭配其他任意动画库。

<p align="middle">
  <img src="https://i.imgur.com/qLKJod3.gif" width="400"/>
  <img src="https://i.imgur.com/H6nXQEq.gif" width="400"/>
  <img src="https://i.imgur.com/THKPrmR.gif" width="400"/>
  <img src="https://i.imgur.com/cuOfqST.gif" width="400"/>
  <img src="https://i.imgur.com/iwZOfT9.gif" width="400"/>
  <img src="https://i.imgur.com/Walt1Ip.gif" width="400"/>
</p>

<p align="middle">
  <a href="https://use-gesture-vue3.netlify.app/">Demo文档地址</a>
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

### 使用方式一：useDrag + v-bind方式

使用 useDrag API 可以快速绑定移动手势。这种方式适合简单进行侦听移动带来的影响

```vue
<template>
  <div class="flex fill center container">
      <svg class="svg" viewBox="-14.5 -14.5 328 28" version="1.1" xmlns="http://www.w3.org/2000/svg">
        <circle class="from" v-bind="bind()" fill="hotpink" cx="0" cy="0" r="12" />
        <line x1="0" y1="0" :x2="state.x2" :y2="state.y2" stroke="hotpink" strokeLinecap="square" strokeWidth="2" />
        <circle ref="targetRef" class="target" cx="300" cy="0" r="12" :fill="tColor" />
      </svg>
      <div class="status">{{text}} </div>
    </div>
</template>

<script setup>
import { watch, ref, computed } from 'vue'
import { useDrag } from '@use-guideline/vue3'
const targetRef = ref(null)
const attached = ref(false)
const dragging = ref(false)
const state = ref({ x2: 0, y2: 0 })
const tColor = computed(() => attached.value ? 'hotpink' : 'blue')
const text = computed(() => attached.value ? dragging.value ? '你可以松开指针' : '点被连接起来了!'
  : '连接粉色点和蓝色点')

const bind = useDrag(({ xy: [x, y], active, last, movement: [mx, my] }) => {
  dragging.value = active
  attached.value = document.elementFromPoint(x, y) === targetRef.value
  if (last) {
    state.value = { x2: attached.value ? 300 : 0, y2: 0 }
  } else {
    state.value = { x2: mx, y2: my }
  }
})
</script>
```

### 使用方式二：使用方式一：useDrag + config配置target目标元素

```vue
<template>
  <div class="flex fill center container">
      <svg class="svg" viewBox="-14.5 -14.5 328 28" version="1.1" xmlns="http://www.w3.org/2000/svg">
        <circle class="from" ref="dragRef" fill="hotpink" cx="0" cy="0" r="12" />
        <line x1="0" y1="0" :x2="state.x2" :y2="state.y2" stroke="hotpink" strokeLinecap="square" strokeWidth="2" />
        <circle ref="targetRef" class="target" cx="300" cy="0" r="12" :fill="tColor" />
      </svg>
      <div class="status">{{text}} </div>
    </div>
</template>

<script setup>
import { watch, ref, computed } from 'vue'
import { useDrag } from '@use-guideline/vue3'
const targetRef = ref(null)
const dragRef = ref(null)
const attached = ref(false)
const dragging = ref(false)
const state = ref({ x2: 0, y2: 0 })
const tColor = computed(() => attached.value ? 'hotpink' : 'blue')
const text = computed(() => attached.value ? dragging.value ? '你可以松开指针' : '点被连接起来了!'
  : '连接粉色点和蓝色点')

useDrag(({ xy: [x, y], active, last, movement: [mx, my] }) => {
  dragging.value = active
  attached.value = document.elementFromPoint(x, y) === targetRef.value
  if (last) {
    state.value = { x2: attached.value ? 300 : 0, y2: 0 }
  } else {
    state.value = { x2: mx, y2: my }
  }
}, { target: dragRef })
</script>
```

## 功能特点

- 📦 支持多种设备手势交互如鼠标、触摸板、触摸屏等
- 🔍 拖拽、移动、悬停、缩放、旋转 等自定义手势功能
- 📋 代码一键复制
- 🌈 丝滑、美观的体验感受
- 🚀 支持 Vue3 开箱即用
- 💡 详细使用见文档说明