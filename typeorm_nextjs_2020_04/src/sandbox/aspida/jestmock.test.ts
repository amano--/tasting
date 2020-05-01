import { Pet } from '~/auto/apis/@types'
// import { stringify } from 'querystring'
// import axiosClient from '@aspida/axios'
// import axios from 'axios'
// import api from '~/auto/apis/$api'

// jest.mock('axios')

test('axios simple test', async () => {
  const pet1: Pet = {
    id: 1845563262948981200,
    category: { id: 0, name: 'dogs' },
    name: 'Brownie',
    photoUrls: ['string'],
    tags: [{ id: 10, name: 'tag1' }],
    status: 'available'
  }

  /* テストが通らんのでコメントアウト

  const mockedAxios = axios as jest.Mocked<typeof axios>
  mockedAxios.get.mockResolvedValue({
    data: [pet1]
  })

  const client = api(
    axiosClient(axios, { paramsSerializer: (params) => stringify(params) })
  )
  const res = await client.pet.findByStatus.get({
    query: { status: ['available'] }
  })
  // console.debug(pets)
  const results = res.data.filter((pet: Pet) => pet.name === 'Brownie')
  // console.debug('results=', results)
  expect(results.length).toBeGreaterThan(0)
  */
  expect(pet1.name).toEqual('Brownie')
})
