import { testConect } from './item.entity'

test('two plus two is four', () => {
  expect(2 + 2).toBe(4)
})
test('the data is peanut butter', async () => {
  await expect(testConect()).resolves.toBe('peanut butter')
})
