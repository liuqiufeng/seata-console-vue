<template>
  <v-app-bar>
    <div class="app-bar-logo">
      <a :href="baseWebsiteUrl" rel="noopener noreferrer" target="_blank">
        <v-img src="@/assets/seata_logo.png" />
      </a>
    </div>
    <template #append>
      <div class="app-bar-menu d-flex ga-4 align-center">
        <a :href="baseWebsiteUrl" rel="noopener noreferrer" target="_blank">{{ t('appBar.home') }}</a>
        <a :href="baseWebsiteUrl + 'docs/overview/what-is-seata/'" rel="noopener noreferrer" target="_blank">{{ t('appBar.docs') }}</a>
        <a :href="baseWebsiteUrl + 'blog'" rel="noopener noreferrer" target="_blank">{{ t('appBar.blog') }}</a>
        <a :href="baseWebsiteUrl + 'community'" rel="noopener noreferrer" target="_blank">{{ t('appBar.community') }}</a>
        <a :href="baseWebsiteUrl + 'download/seata-server'" rel="noopener noreferrer" target="_blank">{{ t('appBar.download') }}</a>
        <v-btn border icon @click="changeLocale">{{ t('appBar.localeSwitchBtn') }}</v-btn>
        <v-btn v-if="isLogin" icon="mdi-account-circle" />
      </div>
    </template>
  </v-app-bar>
</template>
<script setup lang="ts">
  import { useI18n } from 'vue-i18n';

  const { t,locale } = useI18n()
  const isLogin = ref(true);

  const baseWebsiteUrl = computed(() => {
    return locale.value === 'en'? 'https://seata.apache.org/':'https://seata.apache.org/zh-cn/';
  });

  const changeLocale = () => {
    locale.value = locale.value === 'en' ? 'zhHans' : 'en';
  }

// if (localStorage.getItem('user') !== null) {
//   isLogin.value = true;
// }
</script>

<style scoped lang="scss">
.app-bar-logo{
  margin-left: 16px;
  width: 96px;
}
.app-bar-menu a {
  text-decoration: none;
  color: inherit;
  opacity: 0.6;

  &:hover{
    opacity: 1;
  }
}
</style>
