import { ref } from 'vue'
import { Engine } from '@use-guideline/core'
import type { IOffset } from '@use-guideline/core'

export function useGuideline(){
  const line = ref<IOffset>({})
  const adsorb = ref<IOffset>({})
  const engine = new Engine()

  const dragMove = (el: Element) => {
    engine.init(el)
    line.value = engine.getGuideLine()
    adsorb.value = engine.getAdsorb()
  }

  const dragEnd = () => {
    engine.destroy()
    line.value = {}
    adsorb.value = {}   
  }

  return {
    line,
    adsorb,
    dragMove,
    dragEnd,
  }
}
