import { defineStore } from 'pinia'
import WeaponService from '@/services/weapon'

export const useWeaponStore = defineStore('weapon', () => {
  const getWeapons = (payload) => {
    return new Promise((resolve, reject) => {
      WeaponService.getWeapons(payload)
        .then((response) => {
          resolve(response)
        })
        .catch((error) => {
          reject(error)
        })
    })
  }

  const getWeapon = (payload) => {
    return new Promise((resolve, reject) => {
      WeaponService.getWeapon(payload)
        .then((response) => {
          resolve(response)
        })
        .catch((error) => {
          reject(error)
        })
    })
  }

  return {
    getWeapons,
    getWeapon
  }
})