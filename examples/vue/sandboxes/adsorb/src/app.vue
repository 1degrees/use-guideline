<template>
  <div class="flex fill center container">
    <GuideLine />
    <div v-for="item in items" :key="item" :style="{backgroundColor: item}"></div>
    <div class="target" v-bind="bind()"></div>
  </div>
</template>

<script setup>
import { watch, ref, computed } from 'vue'
import { useGuideline, GuideLine } from '@use-guideline/vue3'
import { useDrag } from '@use-gesture-x/vue3'
const targetRef = ref(null)
const attached = ref(false)
const dragging = ref(false)
const items = ['hotpink', 'blue', 'green', 'red', 'orange', 'yellow']
const state = ref({ x2: 0, y2: 0 })
const tColor = computed(() => attached.value ? 'hotpink' : 'blue')
const text = computed(() => attached.value ? dragging.value ? '你可以松开指针' : '点被连接起来了!'
  : '连接粉色点和蓝色点')

const bind = useDrag(({ xy: [x, y], active, last, movement: [mx, my] }) => {
  console.log(x, y, active, last, mx, my, '-------')
})
</script>
<style scoped>
html,
body,
#root {
  height: 100%;
  width: 100%;
}

body {
  font-family: system-ui, sans-serif;
  min-height: 100vh;
  margin: 0;
}

*,
*:after,
*:before {
  box-sizing: border-box;
}

.flex {
  display: flex;
  align-items: center;
}

.flex.fill {
  height: 100%;
}

.flex.center {
  justify-content: center;
}

.svg {
  position: relative;
  min-width: 328px;
  max-width: 328px;
  overflow: visible;
  touch-action: none;
}

.from {
  cursor: pointer;
  touch-action: none;
}

.status {
  position: absolute;
  font-size: 0.8em;
}

</style>
