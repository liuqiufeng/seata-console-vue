import { createRouter, createWebHashHistory } from 'vue-router'

const router = createRouter({
  history: createWebHashHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'layout',
      component: () => import('@/layouts/Layout.vue'),
      children: [
        {
          path: 'login',
          name: 'name',
          component: () => import('@/views/Login.vue'),
        },
      ],
    },
    { path: '/', redirect: '/transaction/list' },
  ],
})

export default router
