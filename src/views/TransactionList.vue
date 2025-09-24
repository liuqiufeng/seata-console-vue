<script setup lang="ts">
const routes = [
  { breadcrumbName: 'Home', path: '' },
  { breadcrumbName: 'TransactionInfo', path: 'transaction/list' },
]
</script>

<template>
  <a-page-header
    style="border: 1px solid rgb(235, 237, 240)"
    title="Title"
    :breadcrumb="{ routes }"
    sub-title="This is a subtitle"
  />
</template>

<style scoped lang="less"></style>
