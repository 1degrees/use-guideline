// 拖拽数值定义
import { Base } from './Base'
// 辅助线新建函数
export default class GuideLine {
  base: Base
  constructor(base: Base) {
    this.base = base
  }

  findLines = (selfs: number[], others: number[]) => {
    return others.filter((other) => selfs.some((self) => Math.abs(self - other) <= this.base.config.diff))
  }

  calcLine() {
    // 纵向辅助线
    const xLines = this.findLines(this.base.selfX, this.base.othersX)
    const yLines = this.findLines(this.base.selfY, this.base.othersY)
    const line = {
      left: xLines.length ? Math.min(...xLines) : undefined,
      right: xLines.length ? Math.max(...xLines) : undefined,
      top: yLines.length ? Math.min(...yLines) : undefined,
      bottom: yLines.length ? Math.max(...yLines) : undefined
    }
    this.base.lines = line
  }
}


