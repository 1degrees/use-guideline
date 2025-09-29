import type { IConfig, IDragData, IOffset } from './type'
export class Base {
  _el?: Element
  _others: Element[] = []
  _config: IConfig
  // 拖拽元素坐标集合
  // 左右
  _selfX: number[] = []
  // 上下
  _selfY: number[] = []
  // 拖拽元素边界
  _selfBound: IDragData = {}

  // 拖动元素外的位置集合
  // 左右
  _othersX: number[] = []
  // 上下
  _othersY: number[] = []

  // 辅助线初始数据
  _lines: IOffset = {}

  // 吸附初始数据
  _adsorbs: IOffset = {}

  constructor(config?: IConfig) {
    this._config = Object.assign({ diff: 10, isAdsorb: false }, config)
  }
  set config(value: IConfig) {
    this._config = value
  }
  get config() {
    return this._config
  }
  // 拖拽元素坐标集合
  // 左右
  set selfX(value: number[]) {
    this._selfX = value
  }
  get selfX() {
    return this._selfX
  }
  // 上下
  set selfY(value: number[]) {
    this._selfY = value
  }
  
  get selfY() {
    return this._selfY
  }
  // 辅助元素的位置集合
  // 左右
  set othersX(value: number[]) {
    this._othersX = value
  }
  get othersX() {
    return this._othersX
  }
  // 上下
  set othersY(value: number[]) {
    this._othersY = value
  }
  get othersY() {
    return this._othersY
  }
  // 拖拽元素边界
  set selfBound(value: IDragData) {
    this._selfBound = value
  }
  get selfBound() {
    return this._selfBound
  }

  set lines(value: IOffset) {
    this._lines = value
  }
  get lines() {
    return this._lines
  }
  // 吸附初始数据
  set adsorbs(value: IOffset) {
    this._adsorbs = value
  }
  get adsorbs() {
    return this._adsorbs
  }

  get el() {
    return this._el
  }

  get others() {
    return this._others
  }

  initBase(el: Element, others?: Element[]) {
    this._el = el
    this._others = others?.length ?
      others : this.getAllSiblings(el)
    this.setSelf(el)
    this.setOthers(el)
  }

  // 自身坐标集合设置函数
  setSelf(el: Element) {
    const bounds = el.getBoundingClientRect()
    const { left = 0, top = 0, width = 0, height = 0 } = bounds
    this.selfX = [left, left + (width / 2), left + width]
    this.selfY = [top, top + (height / 2), top + height]
    this.selfBound = { left, top, width, height }
  }
  // 获取所有兄弟元素
  getAllSiblings(el: Element): Element[] {
    const parent = el.parentNode;
    let siblings = [] as Element[]
    if (parent) {
        siblings = Array.from(parent.children).filter(child => child !== el);
    }
    return siblings;
  }
  // 辅助元素坐标集合设置函数
  setOthers(el: Element) {
    const otherX = [] as number[]
    const otherY = [] as number[]
    const els = this.others
    els.forEach((el) => {
        const { left, top, width, height } = el.getBoundingClientRect()
        otherX.push(left);
        otherX.push(left + width / 2);
        otherX.push(left + width);
        otherY.push(top);
        otherY.push(top + (height / 2));
        otherY.push(top + height);
    });
    this.othersX = Array.from(new Set(otherX));
    this.othersY = Array.from(new Set(otherY));
  }

  clearGuideLineAndAdsorb() {
    this.selfX = []
    this.selfY = []
    this.othersX = []
    this.othersY = []
    this.selfBound = {}
    this.lines = {}
    this.adsorbs = {}
  }
}