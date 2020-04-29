/* eslint-disable */
import { MockClient, MockConfig } from 'aspida-mock'
import api from './$api'

export const mockRoutes = () => [
]

export default <U>(client: MockClient<U>, config?: MockConfig) => {
  client.attachRoutes(mockRoutes(), config)

  return api(client)
}
