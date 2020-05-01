import { stringify } from 'querystring'
import axiosClient from '@aspida/axios'
import axios from 'axios'
import api from '~/auto/apis/$api'
import { Pet } from '~/auto/apis/@types'

test('axios simple test', async () => {
  const client = api(
    axiosClient(axios, {
      paramsSerializer: (params) => stringify(params)
    })
  )
  const res = await client.pet.findByStatus.get({
    query: { status: ['available', 'pending'] }
  })
  // console.debug(pets)
  const results = res.data.filter((pet: Pet) => pet.name === 'Brownie')
  // console.debug('results=', results)
  expect(results.length).toBeGreaterThan(0)
})
