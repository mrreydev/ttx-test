import { apiClient } from '@/services/axiosConfig'

export default {
  getWeapons (payload) {
    return apiClient({
      method: 'GET',
      url: '/v1/weapons',
      ...payload
    })
  },
  getWeapon (payload) {
    return apiClient({
      method: 'GET',
      url: `/v1/weapons/${payload.id}`,
      ...payload
    })
  }
}