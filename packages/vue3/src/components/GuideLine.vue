<template>
  <div class="guide-line guide-line-x guide-line-left" :style="guideLineLeft"></div>
  <div class="guide-line guide-line-x guide-line-right" :style="guideLineRight"></div>
  <div class="guide-line guide-line-y guide-line-top" :style="guideLineTop"></div>
  <div class="guide-line guide-line-y guide-line-bottom" :style="guideLineBottom"></div>
</template>
<script lang="ts" setup>
import { computed, defineProps } from 'vue'

const props = defineProps({
  line: {
    type: Object,
    default: () => ({})
  }
})

const guideLineLeft = computed(() => {
  return {
    left: props.line?.left ? props.line?.left + 'px' : '',
  }
})

const guideLineRight = computed(() => {
  return {
    left: props.line?.right ? props.line?.right + 'px' : '',
  }
})

const guideLineTop = computed(() => {
  return {
    top: props.line?.top ? props.line?.top + 'px' : '',
  }
})

const guideLineBottom = computed(() => {
  return {
    top: props.line?.bottom ? props.line?.bottom + 'px' : '',
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
