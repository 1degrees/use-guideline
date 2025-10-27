export interface IConfig {
  // 是否开启吸附
  isAdsorb: boolean,
  // 辅助线误差值
  diff: number,
}
export interface IDragData {
  x?: number,
  y?: number,
  top?: number,
  left?: number,
  bottom?:number,
  right?: number,
  width?: number,
  height?: number,
}

export interface IRange {
  top?: number,
  left?: number,
  bottom?:number,
  right?: number,
}

export interface IOffset {
  x?: number,
  y?: number,
}
