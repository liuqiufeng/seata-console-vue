import { createI18n } from 'vue-i18n';
import { en, zhHans } from 'vuetify/locale';
import enLocale from '../locale/en.json'
import zhHansLocale from '../locale/zhHans.json'

const messages = {
  en: {
    $vuetify: {
      ...en,
    },
    ... enLocale,
  },
  zhHans: {
    $vuetify: {
      ...zhHans,
    },
    ...zhHansLocale,
  },
}

export default createI18n({
  legacy: false, // Vuetify does not support the legacy mode of vue-i18n
  locale: 'zhHans',
  fallbackLocale: 'en',
  messages,
})
