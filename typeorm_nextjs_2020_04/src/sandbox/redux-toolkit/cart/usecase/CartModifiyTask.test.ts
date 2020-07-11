import { Label, DisplayProfile } from '../../common/domain'
import { CartModifiyTask } from './CartModifiyTask'

describe('CartModify', () => {
  test('addItem', () => {
    const a: DisplayProfile = { loginId: 'hoge', email: 'email' }

    const task = new CartModifiyTask(a)

    task.addItem({ item: 'hoge' })
    task.addItem({ item: 'fuga' })

    expect(task.countItem()).toEqual(2)

    // expect(
    //   usecase.reducer(
    //     {},
    //     usecase.actions.inputZipcode({
    //       address: { zipCode: SampleAddress.tokyoTower.zipCode }
    //     })
    //   )
    // ).toEqual({ address: SampleAddress.tokyoTower })
  })
})
