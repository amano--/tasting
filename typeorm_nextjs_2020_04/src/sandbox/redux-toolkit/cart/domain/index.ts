import { Label, DisplayProfile } from '../../common/domain'

export interface DiscountSpec {
  amount: number
}

class NormalDiscountSpec implements DiscountSpec {
  constructor(public readonly amount: number = 11) {
    //
  }
}

export namespace DiscountSpec {
  export function newSpec() {
    return new NormalDiscountSpec()
  }
}

export interface CartItem {
  itemName: string
}

export interface CartItemPrice {
  originPrice: number
  taxRate: number
  amount: number
  price: number
  priceWithTax: number
}

export type CartState = {
  profile: DisplayProfile
  itemList: Array<CartItem>
}

export interface Cart {
  addItem(item: CartItem)
  removeItem(item: CartItem)
  countItem()
}

class NormalCart implements CartState, Cart {
  constructor(
    public readonly profile: DisplayProfile,
    public itemList: Array<CartItem> = []
  ) {
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

export namespace Cart {
  export function newCart(profile: DisplayProfile) {
    return new NormalCart(profile)
  }

  export function restore(state: CartState) {
    return new NormalCart(state.profile, state.itemList)
  }
}

// export type CartState = Pick<NormalCart, 'itemList'>
