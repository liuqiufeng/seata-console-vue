<script setup lang="ts">
import AppHeader from '@/components/AppHeader.vue'
import AppFooter from '@/components/AppFooter.vue'
</script>

<template>
  <a-layout class="layout">
    <a-layout-header class="header">
      <app-header />
    </a-layout-header>
    <a-layout-content class="content">
      <router-view />
    </a-layout-content>
    <a-layout-header class="footer">
      <app-footer />
    </a-layout-header>
  </a-layout>
</template>

<style scoped lang="less">
.layout {
  height: 100vh;
  display: flex;
  flex-direction: column;
  .header {
    padding-inline: 16px;
    background: #fff;
  }
  .content {
    flex: 1;
    overflow: auto;
    background: #ffffff4c;
  }
  .footer {
    background: #ffffff4c;
  }
}
</style>
