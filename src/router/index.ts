import { createRouter, createWebHashHistory } from 'vue-router'

const router = createRouter({
  history: createWebHashHistory(import.meta.env.BASE_URL),
  routes: [
    { path: '/', redirect: '/transaction/list' },
    {
      path: '/',
      name: 'publicLayout',
      component: () => import('@/layouts/PublicLayout.vue'),
      children: [
        {
          path: 'login',
          name: 'name',
          component: () => import('@/views/Login.vue'),
        },
      ],
    },
    {
      path: '/',
      name: 'defaultLayout',
      component: () => import('@/layouts/DefaultLayout.vue'),
      children: [
        {
          path: 'transaction/list',
          name: 'transactionList',
          component: () => import('@/views/TransactionList.vue'),
        },
        {
          path: 'globallock/list',
          name: 'globalLockList',
          component: () => import('@/views/GlobalLockList.vue'),
        }
      ],
    },
  ],
})

export default router
