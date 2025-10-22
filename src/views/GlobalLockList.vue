<script setup lang="ts">
const routes = [
  { breadcrumbName: 'Home', path: '' },
  { breadcrumbName: 'GlobalLock List', path: 'globallock/list' },
]
</script>

<template>
  <a-page-header title="事务列表" :breadcrumb="{ routes }" sub-title="全局锁列表" />
  <a-card>
    <a-form layout="inline" style="margin: 10px 0">
      <a-form-item label="创建时间">
        <a-range-picker
          :show-time="true"
          format="YYYY-MM-DD HH:mm:ss"
          :placeholder="['起始日期', '结束日期']"
        />
      </a-form-item>
      <a-form-item label="xid">
        <a-input placeholder="请输入筛选条件" />
      </a-form-item>
      <a-form-item label="tableName">
        <a-input placeholder="请输入筛选条件" />
      </a-form-item>
      <a-form-item label="transactionId">
        <a-input placeholder="请输入筛选条件" />
      </a-form-item>
      <a-form-item label="branchId">
        <a-input placeholder="请输入筛选条件" />
      </a-form-item>
      <a-form-item label="namespace">
        <a-select placeholder="请选择筛选条件" style="width: 150px">
          <a-select-option value="public">public</a-select-option>
        </a-select>
      </a-form-item>
      <a-form-item label="cluster">
        <a-select placeholder="请选择筛选条件" style="width: 150px">
          <a-select-option value="default">default</a-select-option>
        </a-select>
      </a-form-item>
      <a-form-item label="vgroup">
        <a-select placeholder="请选择筛选条件" style="width: 150px">
          <a-select-option value="default">default</a-select-option>
        </a-select>
      </a-form-item>
      <a-form-item>
        <a-button type="primary" html-type="button">搜索</a-button>
        <a-button style="margin-left: 10px" html-type="button">重置</a-button>
      </a-form-item>
    </a-form>
  </a-card>
  <a-table />
</template>

<style scoped lang="less">
.ant-form-item {
  margin-top: 5px;
  margin-bottom: 5px;
}
</style>
