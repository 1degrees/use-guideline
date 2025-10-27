import { Base } from './Base'
import { IOffset } from './type'
export default class Adsorb {
  base: Base
  constructor(base: Base) {
    this.base = base
  }
  // 吸附函数
  calcAdsorb() {
    const {left: x, top: y } = this.base.lines
    const offset: IOffset = { x: undefined, y: undefined }
    const { width = 0, height = 0 } = this.base.selfBound
    if (x) {
      const [l, c, r] = this.base.selfX
      if (Math.abs(l - x) <= this.base.config.diff) {
        offset.x = x;
      } else if (Math.abs(c - x) <= this.base.config.diff) {
        offset.x = x - width / 2;
      } else if (Math.abs(r - x) <= this.base.config.diff) {
        offset.x = x - width;
      }
    }

    if (y) {
      const [t, c, b] = this.base.selfY
      if (Math.abs(t - y) <= this.base.config.diff) {
        offset.y = y;
      } else if (Math.abs(c - y) <= this.base.config.diff) {
        offset.y = y - height / 2;
      } else if (Math.abs(b - y) <= this.base.config.diff) {
        offset.y = y - height;
      }
    }
    this.base.adsorbs = offset
  }

  doAdsorb() {
    const { isAdsorb } = this.base.config
    if (!isAdsorb) return
    const {x, y} = this.base.adsorbs
    const el = this.base.el as HTMLElement
    if (x !== undefined) {
      el.style.left = x + 'px'
    }
    if (y !== undefined) {
      el.style.top = y + 'px'
    }
  }
}