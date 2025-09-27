<template>
  <div class="guide-line guide-line-x" :style="guideLineX"></div>
  <div class="guide-line guide-line-y" :style="guideLineY"></div>
</template>
<script lang="ts" setup>
import { computed } from 'vue'
import { useGuideline } from '../composables/useGuideLine'

const line = useGuideline().line
const guideLineX = computed(() => {
  return {
    top: line.value?.x ? line.value?.x + 'px' : '',
  }
})
const guideLineY = computed(() => {
  return {
    left: line.value?.y ? line.value?.y + 'px' : '',
  }
})
</script>
<style scoped>
.guide-line {
  position: absolute;
  width: 100%;
  height: 100%;
  z-index: 1000;
  pointer-events: none;
}

.guide-line-x {
  left: 0;
  top: -10px;
  height: 1px;
  width: 100%;
  border-top: 1px dashed red;
}

.guide-line-y {
  top: 0;
  left: -10px;
  width: 1px;
  height: 100%;
  border-left: 1px dashed red;
}
</style>
