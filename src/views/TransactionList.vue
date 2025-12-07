<script setup lang="ts">
import request from '@/utils/request.ts'
import type { TableColumnsType } from 'ant-design-vue'
import { computed } from 'vue'
import { useI18n } from 'vue-i18n'

const { t } = useI18n()

const routes = computed(() => [
  { breadcrumbName: t('header.home'), path: '' },
  { breadcrumbName: t('transactionInfo.title'), path: 'transaction/list' },
])

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
    fixed: 'right',
    width: 300,
  },
]
const data = [
  {
    xid: 'testxid1',
    transactionId: 1234567890,
    applicationId: 'app1',
    transactionServiceGroup: 'group1',
    transactionName: 'transaction1',
    status: 'begin',
    timeout: 6000,
    beginTime: '2024-01-01 10:00:00',
    applicationData: 'data1',
  },
]

const onFinish = async () => {
  const resposne = await request.post('/console/globalSession/query', {})
}
</script>

<template>
  <a-page-header
    :title="t('transactionInfo.title')"
    :breadcrumb="{ routes }"
    :sub-title="t('transactionInfo.subTitle')"
  />
  <a-card>
    <a-form layout="inline" style="margin: 10px 0" @finish="onFinish">
      <a-form-item :label="t('transactionInfo.createTimeLabel')">
        <a-range-picker
          :show-time="true"
          format="YYYY-MM-DD HH:mm:ss"
          :placeholder="[
            t('transactionInfo.selectStartTimePlaceholder'),
            t('transactionInfo.selectEndTimePlaceholder'),
          ]"
        />
      </a-form-item>
      <a-form-item label="xid">
        <a-input :placeholder="t('transactionInfo.inputFilterPlaceholder')" />
      </a-form-item>
      <a-form-item label="applicationId">
        <a-input :placeholder="t('transactionInfo.inputFilterPlaceholder')" />
      </a-form-item>
      <a-form-item label="status">
        <a-select
          allow-clear
          :placeholder="t('transactionInfo.selectFilerPlaceholder')"
          style="width: 150px"
        >
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
        <a-select
          :placeholder="t('transactionInfo.selectNamespaceFilerPlaceholder')"
          style="width: 150px"
        >
          <a-select-option value="public">public</a-select-option>
        </a-select>
      </a-form-item>
      <a-form-item label="cluster">
        <a-select
          :placeholder="t('transactionInfo.selectClusterFilerPlaceholder')"
          style="width: 150px"
        >
          <a-select-option value="default">default</a-select-option>
        </a-select>
      </a-form-item>
      <a-form-item label="vgroup">
        <a-select
          :placeholder="t('transactionInfo.selectVGroupFilerPlaceholder')"
          style="width: 150px"
        >
          <a-select-option value="default">default</a-select-option>
        </a-select>
      </a-form-item>
      <a-form-item :label="t('transactionInfo.branchSessionSwitchLabel')">
        <a-switch />
      </a-form-item>
      <a-form-item>
        <a-button type="primary" html-type="button">{{
          t('transactionInfo.searchButtonLabel')
        }}</a-button>
        <a-button style="margin-left: 10px" html-type="button">{{
          t('transactionInfo.resetButtonLabel')
        }}</a-button>
      </a-form-item>
    </a-form>
  </a-card>
  <a-table :columns="columns" :data-source="data" :scroll="{ x: 1300 }">
    <template #bodyCell="{ column, record }">
      <template v-if="column.key === 'action'">
        <span>
          <a>查看全局锁</a>
          <a-divider type="vertical" />
          <a-dropdown>
            <a class="ant-dropdown-link" @click.prevent>
              更多操作
              <down-outlined />
            </a>
            <template #overlay>
              <a-menu>
                <a-menu-item>删除全局事务</a-menu-item>
                <a-menu-item>强制删除全局事务</a-menu-item>
                <a-menu-item>停止全局事务重试</a-menu-item>
                <a-menu-item>提交或回滚全局事务</a-menu-item>
                <a-menu-item>更新全局事务状态</a-menu-item>
              </a-menu>
            </template>
          </a-dropdown>
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
