import mockClient from '@aspida/axios/dist/mockClient'
import { mockMethods } from 'aspida-mock'
import mock from '~/auto/apis/$mock'
import { Pet } from '~/auto/apis/@types'
import { Methods } from '~/auto/apis/pet/findByStatus'

test('simple mock test', async () => {
  const pet1: Pet = {
    id: 1845563262948981200,
    category: { id: 0, name: 'dogs' },
    name: 'Brownie',
    photoUrls: ['string'],
    tags: [{ id: 10, name: 'tag1' }],
    status: 'available'
  }

  const mockRes = mockMethods<Methods>({
    get: () => ({
      status: 200,
      resHeaders: [],
      resBody: [pet1]
    })
  })

  const mockRoutes = [{ path: '/pet/findByStatus', methods: mockRes }]
  const mockc = mockClient()
  mockc.attachRoutes(mockRoutes)

  // { delayMSec: 500 }
  const client = mock(mockc, { log: true })

  const res = await client.pet.findByStatus.get({
    query: { status: ['available', 'pending'] }
  })
  const results = res.data.filter((pet: Pet) => pet.name === 'Brownie')
  console.debug('results=', results)
  expect(results.length).toBeGreaterThan(0)
})
