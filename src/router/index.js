import { createRouter, createWebHistory } from 'vue-router'

import Layout from '@/layout/index.vue'

const routes = [
  {
    path: '/',
    component: Layout,
    redirect: '/pass_order',
    children: [
      {
        path: '/pass_order',
        component: () => import('@/components/passOrder.vue'),
        name: 'PassOrder',
        meta: {
          affix: true,
          title: 'Заказ пропуска',
          meta: { transition: 'slide-left' },
        }
      },

      {
        path: '/guest',
        component: () => import('@/components/guest.vue'),
        name: 'Guest',
        meta: {
          affix: true,
          title: 'Гость',
          meta: { transition: 'slide-left' },
        }
      },

      {
        path: '/owner',
        component: () => import('@/components/owner.vue'),
        name: 'Owner',
        meta: {
          affix: true,
          title: 'Владелец',
          meta: { transition: 'slide-left' },
        }
      },

      {
        path: '/automobile_form',
        component: () => import('@/components/automobileForm.vue'),
        name: 'AutomobileForm',
        meta: {
          affix: true,
          title: 'На автомобиле',
          meta: { transition: 'slide-left' },
        }
      },

      {
        path: '/pedestrian_form',
        component: () => import('@/components/pedestrianForm.vue'),
        name: 'PedestrianForm',
        meta: {
          affix: true,
          title: 'Пешком',
          meta: { transition: 'slide-left' },
        }
      }
    ]
  },
  
]

const router = createRouter({
  history: createWebHistory(false),
  routes
})

export default router