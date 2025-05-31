<script setup lang="ts">
  import { useI18n } from 'vue-i18n';

  const { t,locale } = useI18n()
  const isLogin = ref(true);

  const changeLocale = () => {
    locale.value = locale.value === 'en' ? 'zhHans' : 'en';
  }

// if (localStorage.getItem('user') !== null) {
//   isLogin.value = true;
// }
</script>

<template>
  <div class="app-bar-menu d-flex ga-4 align-center">
    <a href="https://seata.apache.org/" rel="noopener noreferrer" target="_blank">{{ t('appBar.home') }}</a>
    <a href="https://seata.apache.org/docs/overview/what-is-seata/" rel="noopener noreferrer" target="_blank">{{ t('appBar.docs') }}</a>
    <a href="https://seata.apache.org/blog" rel="noopener noreferrer" target="_blank">{{ t('appBar.blog') }}</a>
    <a href="https://seata.apache.org/community" rel="noopener noreferrer" target="_blank">{{ t('appBar.community') }}</a>
    <a href="https://seata.apache.org/download/seata-server" rel="noopener noreferrer" target="_blank">{{ t('appBar.download') }}</a>
    <v-btn border icon @click="changeLocale">{{ t('appBar.localeSwitchBtn') }}</v-btn>
    <v-btn v-if="isLogin" icon="mdi-account-circle" />
  </div>
</template>

<style scoped lang="scss">
.app-bar-menu a {
  text-decoration: none;
  color: inherit;
  opacity: 0.6;

  &:hover{
    opacity: 1;
  }
}
</style>
