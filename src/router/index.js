import { createWebHistory, createRouter } from 'vue-router'

import Homepage from '@/pages/Homepage.vue'
import AgentsPage from '@/pages/AgentsPage.vue'
import AgentDetailPage from '@/pages/AgentDetailPage.vue'
import WeaponsPage from '@/pages/WeaponsPage.vue'
import WeaponDetailPage from '@/pages/WeaponDetailPage.vue'

const routes = [
  {
    name: 'home',
    path: '/',
    component: Homepage,
  },
  {
    name: 'list-agent',
    path: '/agents',
    component: AgentsPage
  },
  {
    name: 'detail-agent',
    path: '/agents/:id',
    component: AgentDetailPage
  },
  {
    name: 'list-weapon',
    path: '/weapons',
    component: WeaponsPage
  },
  {
    name: 'detail-weapon',
    path: '/weapons/:id',
    component: WeaponDetailPage
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router