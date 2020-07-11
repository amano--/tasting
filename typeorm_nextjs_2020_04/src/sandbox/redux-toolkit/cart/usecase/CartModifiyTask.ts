import { CSSProperties } from 'react'
import { Label, DisplayProfile } from '../../common/domain'

export type PrefDiv = {
  divType: 'PrefDiv'
  divCode: number
  uname: string
  label: Label
}

export const PrefDivs = {
  tokyo: {
    divType: 'PrefDiv',
    divCode: 10,
    uname: 'tokyo',
    label: { lang: 'ja', text: '東京都' }
  },
  ohsaka: {
    divType: 'PrefDiv',
    divCode: 20,
    uname: 'ohsaka',
    label: { lang: 'ja', text: '大阪府' }
  }
} as const

const css: CSSProperties = {
  textAlign: 'center'
}
console.log(css)

export type PrefDivType = typeof PrefDivs[keyof typeof PrefDivs]

export type CartItem = {}

export class CartModifiyTask {
  private itemList: Array<CartItem> = []

  constructor(public readonly account: DisplayProfile) {
    //
  }

  addItem(item: CartItem) {
    this.itemList.push(item)
  }

  removeItem(item: CartItem) {
    this.itemList = this.itemList.filter((i) => i !== item)
  }

  countItem() {
    return this.itemList.length
  }
}

export type CartState = Exclude<CartModifiyTask, Function>

/*


*/
