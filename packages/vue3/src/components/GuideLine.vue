<template>
  <div class="guide-line guide-line-x" :style="guideLineX"></div>
  <div class="guide-line guide-line-y" :style="guideLineY"></div>
</template>
<script lang="ts" setup>
import { computed, defineProps } from 'vue'

const props = defineProps({
  line: {
    type: Object,
    default: () => ({})
  }
})

const guideLineX = computed(() => {
  return {
    left: props.line?.x ? props.line?.x + 'px' : '',
  }
})

const guideLineY = computed(() => {
  return {
    top: props.line?.y ? props.line?.y + 'px' : '',
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
  left: -10px;
  top: 0px;
  height: 100%;
  width: 1px;    
  border-left: 1px dashed red;
}

.guide-line-y {
  top: -10px;
  left: 0px;
  width: 100%;
  height: 1px;
  border-top: 1px dashed red;
}
</style>
