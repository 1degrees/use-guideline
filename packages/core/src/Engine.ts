import type { IConfig } from './types'
import { Base } from './Base'
import Adsorb from './Adsorb'
import GuideLine from './GuideLine'
export class Engine {
  base: Base
  guideLine: GuideLine
  adorb: Adsorb
  constructor(config?: IConfig) {
    this.base = new Base(config)
    this.adorb = new Adsorb(this.base)
    this.guideLine = new GuideLine(this.base)
  }

  init(el: Element) {
    this.base.initBase(el)
    this.guideLine.calcLine()
    this.adorb.calcAdsorb()
    this.adorb.doAdsorb()
  }

  getGuideLine() {
    return this.base.lines
  }

  getAdsorb() {
    return this.base.adsorbs
  }

  destroy() {
    this.base.clearGuideLineAndAdsorb()
  }
}