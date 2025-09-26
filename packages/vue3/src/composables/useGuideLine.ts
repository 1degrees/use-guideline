import { IOffset, Engine } from '@use-guideline/core'
import { ref } from 'vue'

export function useGuideline(){
    const line = ref<IOffset>({})
    const adsorb = ref<IOffset>({})
    const engine = new Engine()

    const dragMove = (el: Element) => {
        engine.init(el)
        line.value = engine.guideLine.getLines()
        adsorb.value = engine.adorb.getAdsorbs()
        // if (adsorb.value?.x) {
        //     el.style.left = adsorb.value?.x + 'px'
        // }
        // if (adsorb.value?.y) {
        // }
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
