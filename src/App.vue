<script setup lang="ts">
import enUS from 'ant-design-vue/es/locale/en_US'
import zhCN from 'ant-design-vue/es/locale/zh_CN'
import dayjs from 'dayjs'
import 'dayjs/locale/zh-cn'
import 'dayjs/locale/en'

import { useI18n } from 'vue-i18n'
import { defineComponent, h, watch } from 'vue'
import { App } from 'ant-design-vue'
import { useGlobalFeedback } from '@/stores/globalFeedback.ts'
import { useGlobalUser } from '@/stores/globalUser.ts'
import { AUTHORIZATION_HEADER } from '@/utils/constants.ts'

const { locale } = useI18n()

watch(locale, (newLocale) => {
  if (newLocale === 'en') {
    dayjs.locale('en')
  } else {
    dayjs.locale('zh-cn')
  }
})

// try to init user
const token = localStorage.getItem(AUTHORIZATION_HEADER)
useGlobalUser().setGlobalUser(token)

const InitGlobalFeedback = defineComponent({
  setup() {
    const staticFunction = App.useApp()
    useGlobalFeedback().initGlobal(staticFunction)
    return () => h('div')
  },
})
</script>

<template>
  <a-config-provider :locale="locale === 'en' ? enUS : zhCN">
    <a-app>
      <init-global-feedback />
      <router-view />
    </a-app>
  </a-config-provider>
</template>

<style scoped lang="less"></style>
