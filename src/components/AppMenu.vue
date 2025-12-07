<script setup lang="ts">
import { useI18n } from 'vue-i18n'

const { t } = useI18n()
</script>

<template>
  <a-menu mode="inline" :style="{ height: '100%', borderRight: 0 }">
    <a-menu-item key="sub1">
      <template #icon>
        <user-outlined />
      </template>
      <router-link to="/transaction/list">{{ t('transactionInfo.title') }}</router-link>
    </a-menu-item>
    <a-menu-item key="sub2">
      <template #icon>
        <lock-outlined />
      </template>
      <router-link to="/globallock/list">GlobalLock List</router-link>
    </a-menu-item>
  </a-menu>
</template>

<style scoped lang="less"></style>
