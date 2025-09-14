import { createI18n } from 'vue-i18n'
import en from '@/i18n/en.ts'
import zhcn from '@/i18n/zh-cn.ts'

const i18n = createI18n({
  legacy: false,
  locale: 'en',
  fallbackLocale: 'en',
  messages: {
    en,
    'zh-cn': zhcn,
  },
})
export default i18n
