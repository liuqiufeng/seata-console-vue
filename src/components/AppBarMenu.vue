<script setup lang="ts">
  import { useI18n } from 'vue-i18n';

  const i18n = useI18n()
  const isLogin = ref(true);
  const changeLocaleDesc = ref('')

  onMounted(() => {
    computeChangeLocaleDesc()
  })

  const changeLocale = () => {
    i18n.locale.value = i18n.locale.value === 'en' ? 'zhHans' : 'en';
    computeChangeLocaleDesc()
  }

  const computeChangeLocaleDesc = () => {
    if (i18n.locale.value === 'en') {
      changeLocaleDesc.value = '中'
    } else {
      changeLocaleDesc.value = 'en'
    }
  }

// if (localStorage.getItem('user') !== null) {
//   isLogin.value = true;
// }
</script>

<template>
  <div class="d-flex ga-4 align-center">
    <a href="https://seata.apache.org/" rel="noopener noreferrer" target="_blank">HOME</a>
    <a href="https://seata.apache.org/docs/overview/what-is-seata/" rel="noopener noreferrer" target="_blank">DOCS</a>
    <a href="https://seata.apache.org/blog" rel="noopener noreferrer" target="_blank">BLOG</a>
    <a href="https://seata.apache.org/community" rel="noopener noreferrer" target="_blank">COMMUNITY</a>
    <a href="https://seata.apache.org/unversioned/download/seata-server" rel="noopener noreferrer" target="_blank">DOWNLOAD</a>
    <v-btn border icon @click="changeLocale">{{ changeLocaleDesc }}</v-btn>
    <v-btn v-if="isLogin" icon="mdi-account-circle" />
  </div>
</template>

<style scoped lang="sass">

</style>
