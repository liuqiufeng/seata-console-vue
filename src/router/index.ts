/**
 * router/index.ts
 *
 * Automatic routes for `./src/pages/*.vue`
 */

// Composables
import { createRouter, createWebHashHistory } from 'vue-router/auto'
import { setupLayouts } from 'virtual:generated-layouts'
import { routes } from 'vue-router/auto-routes'
import type { MenuItem } from '@/menu';

routes.push({ path: '/', redirect: '/transaction/info' })

const router = createRouter({
  history: createWebHashHistory(import.meta.env.BASE_URL),
  routes: setupLayouts(routes),
})

// Workaround for https://github.com/vitejs/vite/issues/11804
router.onError((err, to) => {
  if (err?.message?.includes?.('Failed to fetch dynamically imported module')) {
    if (!localStorage.getItem('vuetify:dynamic-reload')) {
      console.log('Reloading page to fix dynamic import error')
      localStorage.setItem('vuetify:dynamic-reload', 'true')
      location.assign(to.fullPath)
    } else {
      console.error('Dynamic import error, reloading page did not fix it', err)
    }
  } else {
    console.error(err)
  }
})

router.isReady().then(() => {
  localStorage.removeItem('vuetify:dynamic-reload')
  routesToMenus()
})

export default router

export const menuItems = ref<MenuItem[]>([])

const routesToMenus = () => {
  router.getRoutes().forEach(route => {
    if (route.meta.menu !==null && route.meta.menu !== undefined) {
      const menuItem:MenuItem = {
        title: route.meta.menu.title || 'Untitled',
        icon: route.meta.menu.icon || '',
        path: route.path,
      }
      menuItems.value.push(menuItem)
    }})
}
