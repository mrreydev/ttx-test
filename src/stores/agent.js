import { defineStore } from 'pinia'
import AgentService from '@/services/agent'

export const useAgentStore = defineStore('agent', () => {
  const getAgents = (payload) => {
    return new Promise((resolve, reject) => {
      AgentService.getAgents(payload)
        .then((response) => {
          resolve(response)
        })
        .catch((error) => {
          reject(error)
        })
    })
  }

  const getAgent = (payload) => {
    return new Promise((resolve, reject) => {
      AgentService.getAgent(payload)
        .then((response) => {
          resolve(response)
        })
        .catch((error) => {
          reject(error)
        })
    })
  }

  return {
    getAgents,
    getAgent
  }
})