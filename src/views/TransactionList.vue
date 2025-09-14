<script setup lang="ts">
import AppContent from '@/components/AppContent.vue'

const routes = [
  { breadcrumbName: 'Home', path: '' },
  { breadcrumbName: 'TransactionInfo', path: 'transaction/list' },
]
</script>

<template>
  <app-content :routes="routes" />
</template>

<style scoped lang="less"></style>
