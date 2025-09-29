import { ref } from 'vue'
import { Engine } from '@use-guideline/core'
import type { IOffset, IConfig } from '@use-guideline/core'

export function useGuideline(config?: IConfig){
  const line = ref<IOffset>({})
  const adsorb = ref<IOffset>({})
  const engine = new Engine(config)

  const dragMove = (el: Element, others?: Element[]) => {
    engine.init(el, others)
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
