<template>
  <div class="flex fill center container">
    <GuideLine />
    <div class="drag-container">
      <div v-for="item in items" :key="item" class="card" :style="{backgroundColor: item}"></div>
      <div ref="targetRef" class="target" v-bind="bind()"> 拖拽辅助线 </div>
    </div>
  </div>
</template>

<script setup>
import { watch, ref, computed } from 'vue'
import { useGuideline, GuideLine } from '@use-guideline/vue3'
import { useDrag } from '@use-gesture-x/vue3'
const items = ['hotpink', 'blue', 'green', 'red', 'orange', 'yellow']
const targetRef = ref(null)
const { dragMove, dragEnd } = useGuideline()
const bind = useDrag(({ xy: [x, y], active, last, movement: [mx, my] }) => {
  console.log(x, y, active, last, mx, my, '-------')
  if (active) {
    // dragMove({ x, y })
  } else if (last) {
    dragEnd()
  }
  targetRef.value.style.left = x + 'px'
  targetRef.value.style.top = y + 'px'
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


.card {
  position: absolute;
  width: 50px;
  height: 50px;
}
.card:nth-child(1) {
  top: 60px;
  left: 60px;
}

.card:nth-child(2) {
  top: 560px;
  left: 60px;
}

.card:nth-child(3) {
  top: 160px;
  left: 30%;
}

.card:nth-child(4) {
  top: 560px;
  left: 50%;
}

.card:nth-child(5) {
  top: 200px;
  left: 90%;
}

.card:nth-child(6) {
  top: 460px;
  left: 90%;
}

.drag-container {
  position: relative;
  width: 100%;
  height: 100%;
}

.target {
  position: absolute;
  display: flex;
  align-items: center;
  justify-content: center;
  top: 50%;
  left: 50%;
  width: 100px;
  height: 100px;
  color: white;
  font-size: 12px;
  background-color: black;
}

</style>
