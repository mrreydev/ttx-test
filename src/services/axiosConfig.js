import axios from 'axios'
export const apiClient = axios.create({
  baseURL: 'https://valorant-api.com',
  headers: {
    Accept: 'application/json',
    'Content-Type': 'application/json'
  }
})
