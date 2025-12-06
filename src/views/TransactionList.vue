<script setup lang="ts">
import request from '@/utils/request.ts'

const routes = [
  { breadcrumbName: 'Home', path: '' },
  { breadcrumbName: 'TransactionInfo', path: 'transaction/list' },
]

const columns = [
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
    title: 'applicationId',
    dataIndex: 'applicationId',
    key: 'applicationId',
  },
  {
    title: 'transactionServiceGroup',
    dataIndex: 'transactionServiceGroup',
    key: 'transactionServiceGroup',
  },
  {
    title: 'transactionName',
    dataIndex: 'transactionName',
    key: 'transactionName',
  },
  {
    title: 'status',
    dataIndex: 'status',
    key: 'status',
  },
  {
    title: 'timeout',
    dataIndex: 'timeout',
    key: 'timeout',
  },
  {
    title: 'beginTime',
    dataIndex: 'beginTime',
    key: 'beginTime',
  },
  {
    title: 'applicationData',
    dataIndex: 'applicationData',
    key: 'applicationData',
  },
  {
    title: '操作',
    key: 'action',
  },
]
const data = [{}]

const onFinish = async () => {
  const resposne = await request.post('/console/globalSession/query', {})
}
</script>

<template>
  <a-page-header title="事务列表" :breadcrumb="{ routes }" sub-title="全局事务列表" />
  <a-card>
    <a-form layout="inline" style="margin: 10px 0" @finish="onFinish">
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
      <a-form-item label="applicationId">
        <a-input placeholder="请输入筛选条件" />
      </a-form-item>
      <a-form-item label="status">
        <a-select allow-clear placeholder="请选择筛选条件" style="width: 150px">
          <a-select-option value="all">全部</a-select-option>
          <a-select-option value="begin">开始</a-select-option>
          <a-select-option value="committing">提交中</a-select-option>
          <a-select-option value="committed">已提交</a-select-option>
          <a-select-option value="rollingback">回滚中</a-select-option>
          <a-select-option value="rolledback">已回滚</a-select-option>
          <a-select-option value="timeoutrollingback">超时回滚中</a-select-option>
          <a-select-option value="timeoutrolledback">超时已回滚</a-select-option>
        </a-select>
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
      <a-form-item label="branchSession">
        <a-switch />
      </a-form-item>
      <a-form-item>
        <a-button type="primary" html-type="button">搜索</a-button>
        <a-button style="margin-left: 10px" html-type="button">重置</a-button>
      </a-form-item>
    </a-form>
  </a-card>
  <a-table :columns="columns" :data="data" :scroll="{ x: true }">
    <template #bodyCell="{ column, record }">
      <template v-if="column.key === 'action'">
        <span>
          <a>Invite 一 {{ record.name }}</a>
          <a-divider type="vertical" />
          <a>Delete</a>
          <a-divider type="vertical" />
          <a class="ant-dropdown-link">
            More actions
            <down-outlined />
          </a>
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
