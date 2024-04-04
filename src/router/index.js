import { createRouter, createWebHistory } from 'vue-router'

import Layout from '@/layout/index.vue'

const routes = [
  {
    path: '/',
    component: Layout,
    redirect: '/step1',
    children: [
      {
        path: '/step1',
        component: () => import('@/components/step1.vue'),
        name: 'Step 1',
        meta: {
          affix: true,
          title: 'Шаг первый',
        }
      },

      {
        path: '/step2',
        component: () => import('@/components/step2.vue'),
        name: 'Step 2',
        meta: {
          affix: true,
          title: 'Шаг второй',
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