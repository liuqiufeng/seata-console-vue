<script setup lang="ts">
import AppHeader from '@/components/AppHeader.vue'
import AppFooter from '@/components/AppFooter.vue'
import AppMenu from '@/components/AppMenu.vue'
</script>

<template>
  <a-layout class="layout">
    <a-layout-header class="header">
      <app-header />
    </a-layout-header>
    <a-layout class="content-layout">
      <a-layout-sider width="200" style="background: #fff">
        <app-menu />
      </a-layout-sider>
      <a-layout-content style="height: 100%">
        <a-layout class="app-content-layout">
          <a-layout-content class="app-content">
            <router-view />
          </a-layout-content>
        </a-layout>
      </a-layout-content>
    </a-layout>
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
  .content-layout {
    flex: 1;
    overflow: auto;
    background: #ffffff4c;
    .app-content-layout {
      height: 100%;
      padding: 24px;
      .app-content {
        background: #fff;
        padding: 24px;
        margin: 0;
        height: 100%;
      }
    }
  }
  .footer {
    background: #ffffff4c;
  }
}
</style>
