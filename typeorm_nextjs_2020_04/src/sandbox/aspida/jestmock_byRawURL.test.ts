import axios from 'axios'
import { Pet } from '~/auto/apis/@types'

jest.mock('axios')

test('axios simple test', async () => {
  const pet1: Pet = {
    id: 1845563262948981200,
    category: { id: 0, name: 'dogs' },
    name: 'Brownie',
    photoUrls: ['string'],
    tags: [{ id: 10, name: 'tag1' }],
    status: 'available'
  }

  const mockedAxios = axios as jest.Mocked<typeof axios>
  mockedAxios.get.mockResolvedValue({
    data: [pet1]
  })

  const res = await axios.get(
    'https://petstore.swagger.io/v2/pet/findByStatus?status=available&status=pending'
  )
  // console.debug(res)
  const results = res.data.filter((pet: Pet) => pet.name === 'Brownie')
  expect(results.length).toBeGreaterThan(0)
})
