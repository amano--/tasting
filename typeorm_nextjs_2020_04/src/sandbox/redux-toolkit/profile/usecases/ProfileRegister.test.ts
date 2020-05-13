import { profileResister as usecase } from './ProfileRegister'
import { SampleAddress } from './SampleData'

test('ProfileRegister#inputZipcode', async () => {
  expect(
    usecase.reducer(
      {},
      usecase.actions.inputZipcode({
        address: { zipCode: SampleAddress.koukyo.zipCode }
      })
    )
  ).toEqual({ address: SampleAddress.koukyo })

  expect(
    usecase.reducer(
      {},
      usecase.actions.inputZipcode({
        address: { zipCode: SampleAddress.tokyoTower.zipCode }
      })
    )
  ).toEqual({ address: SampleAddress.tokyoTower })
})

test('ProfileRegister usecase test', async () => {
  const res1 = usecase.reducer(
    {},
    usecase.actions.inputZipcode({
      address: { zipCode: SampleAddress.koukyo.zipCode }
    })
  )
  expect(res1.address).toEqual(SampleAddress.koukyo)

  const res2 = usecase.reducer(
    res1,
    usecase.actions.createGreetingMessage(res1)
  )
  expect(res2.greetingMessage).toEqual('ようこそ東京へ')
})
