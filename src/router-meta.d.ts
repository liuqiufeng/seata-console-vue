import type { Menu } from '@/menu';

declare module 'vue-router' {
  export interface RouteMeta {
    menu: Menu
  }
}

export {}
