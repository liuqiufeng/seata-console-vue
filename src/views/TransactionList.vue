<script setup lang="ts">
const routes = [
  { breadcrumbName: 'Home', path: '' },
  { breadcrumbName: 'TransactionInfo', path: 'transaction/list' },
]
</script>

<template>
  <a-page-header title="事务列表" :breadcrumb="{ routes }" sub-title="全局事务列表" />
  <a-card>
    <a-form layout="inline" style="margin: 16px 0">
      <a-form-item label="测试">
        <a-input placeholder="placeholder" />
      </a-form-item>
      <a-form-item label="测试">
        <a-input placeholder="placeholder" />
      </a-form-item>
      <a-form-item label="测试">
        <a-input placeholder="placeholder" />
      </a-form-item>
      <a-button type="primary" html-type="button">搜索</a-button>
    </a-form>
  </a-card>
</template>

<style scoped lang="less"></style>
