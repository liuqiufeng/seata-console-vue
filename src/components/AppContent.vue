<script setup lang="ts">
import type { Route } from 'ant-design-vue/es/breadcrumb/Breadcrumb'
const props = defineProps<{
  routes?: Route[]
}>()
</script>

<template>
  <a-layout class="app-content-layout">
    <a-breadcrumb class="app-breadcrumb" :routes="props.routes">
      <template #itemRender="{ route, params, routes, paths }">
        <span v-if="routes.indexOf(route) === routes.length - 1">{{ route.breadcrumbName }}</span>
        <router-link v-else :to="`/${paths.join('/')}`">{{ route.breadcrumbName }}</router-link>
      </template>
    </a-breadcrumb>
    <a-layout-content class="app-content">
      <router-view />
    </a-layout-content>
  </a-layout>
</template>

<style scoped lang="less">
.app-content-layout {
  height: 100%;
  padding: 0 24px 24px;
  .app-breadcrumb {
    margin: 16px 0;
  }
  .app-content {
    background: #fff;
    padding: 24px;
    margin: 0;
    height: 100%;
  }
}
</style>
