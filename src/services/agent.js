import { apiClient } from '@/services/axiosConfig'

export default {
  getAgents (payload) {
    return apiClient({
      method: 'GET',
      url: '/v1/agents',
      ...payload
    })
  },
  getAgent (payload) {
    return apiClient({
      method: 'GET',
      url: `/v1/agents/${payload.id}`,
      ...payload
    })
  }
}