import { Label, DisplayProfile } from '../../common/domain'
import { Cart } from '.'

describe('Cart', () => {
  test('addItem', () => {
    const dp: DisplayProfile = { loginId: 'hoge', email: 'email' }

    const cart = Cart.newCart(dp)

    cart.addItem({ itemName: 'hoge' })
    cart.addItem({ itemName: 'fuga' })

    expect(cart.countItem()).toEqual(2)
  })
})
