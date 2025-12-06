<script setup lang="ts">
import type { TableColumnsType } from 'ant-design-vue'

const routes = [
  { breadcrumbName: 'Home', path: '' },
  { breadcrumbName: 'GlobalLock List', path: 'globallock/list' },
]

const columns: TableColumnsType = [
  {
    title: 'xid',
    dataIndex: 'xid',
    key: 'xid',
  },
  {
    title: 'transactionId',
    dataIndex: 'transactionId',
    key: 'transactionId',
  },
  {
    title: 'branchId',
    dataIndex: 'branchId',
    key: 'branchId',
  },
  {
    title: 'resourceId',
    dataIndex: 'resourceId',
    key: 'resourceId',
  },
  {
    title: 'tableName',
    dataIndex: 'tableName',
    key: 'tableName',
  },
  {
    title: 'pk',
    dataIndex: 'pk',
    key: 'pk',
  },
  {
    title: 'rowKey',
    dataIndex: 'rowKey',
    key: 'rowKey',
  },
  {
    title: 'gmtCreate',
    dataIndex: 'gmtCreate',
    key: 'gmtCreate',
  },
  {
    title: 'gmtModified',
    dataIndex: 'gmtModified',
    key: 'gmtModified',
  },
  {
    title: '操作',
    key: 'action',
    fixed: 'right',
    width: 300,
  },
]
const data = [
  {
    xid: 'test-xid-001',
    transactionId: '1234567890',
    branchId: '9876543210',
    resourceId: 'resource-001',
    tableName: 'user_table',
    pk: '1',
    rowKey: 'row-001',
    gmtCreate: '2024-01-01 10:00:00',
    gmtModified: '2024-01-01 12:00:00',
  },
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
  <a-table :columns="columns" :data-source="data" :scroll="{ x: 1300 }">
    <template #bodyCell="{ column, record }">
      <template v-if="column.key === 'action'">
        <span>
          <a>删除全局锁</a>
        </span>
      </template>
    </template>
  </a-table>
</template>

<style scoped lang="less">
.ant-form-item {
  margin-top: 5px;
  margin-bottom: 5px;
}
</style>
