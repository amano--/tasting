import { profileResister as usecase, TdAddress } from './ProfileRegister'

test('ProfileRegister#inputZipcode', async () => {
  expect(
    usecase.reducer(
      {},
      usecase.actions.inputZipcode({
        address: { zipCode: TdAddress.koukyo.zipCode }
      })
    )
  ).toEqual({ address: TdAddress.koukyo })

  expect(
    usecase.reducer(
      {},
      usecase.actions.inputZipcode({
        address: { zipCode: TdAddress.tokyoTower.zipCode }
      })
    )
  ).toEqual({ address: TdAddress.tokyoTower })
})

test('ProfileRegister usecase test', async () => {
  const res1 = usecase.reducer(
    {},
    usecase.actions.inputZipcode({
      address: { zipCode: TdAddress.koukyo.zipCode }
    })
  )
  expect(res1.address).toEqual(TdAddress.koukyo)

  const res2 = usecase.reducer({}, usecase.actions.createGreetingMessage(res1))
  expect(res2.greetingMessage).toEqual('ようこそ東京へ')
})
