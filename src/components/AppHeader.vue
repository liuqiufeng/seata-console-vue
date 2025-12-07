<script setup lang="ts">
import { useGlobalUser } from '@/stores/globalUser.ts'
import { useI18n } from 'vue-i18n'
import { computed } from 'vue'
import { useRouter } from 'vue-router'

const { globalUser, setGlobalUser } = useGlobalUser()
const { t, locale } = useI18n()
const router = useRouter()

const baseUrl = computed(() =>
  locale.value === 'en' ? 'https://seata.apache.org/' : 'https://seata.apache.org/zh-cn/',
)

const navbarMenus = computed(() => [
  { id: 1, title: t('header.home'), link: baseUrl.value },
  { id: 2, title: t('header.docs'), link: `${baseUrl.value}docs/overview/what-is-seata/` },
  { id: 3, title: t('header.blog'), link: `${baseUrl.value}blog` },
  { id: 4, title: t('header.community'), link: `${baseUrl.value}community` },
  { id: 5, title: t('header.download'), link: `${baseUrl.value}download/seata-server` },
])

const changeLocale = () => {
  locale.value = locale.value === 'en' ? 'zh-cn' : 'en'
}
const logout = () => {
  setGlobalUser(null)
  router.replace('/login')
}
</script>

<template>
  <div class="app-header">
    <div class="logo">
      <a href="#" rel="noopener noreferrer">
        <img src="@/assets/img/seata_logo.png" alt="logo" />
      </a>
    </div>

    <div class="navbar">
      <ul>
        <li v-for="navbarMenu in navbarMenus" :key="navbarMenu.id">
          <a target="_blank" :href="navbarMenu.link">{{ navbarMenu.title }}</a>
        </li>
        <li>
          <a-button type="text" shape="circle" @click="changeLocale">
            {{ locale === 'en' ? '中' : 'EN' }}
          </a-button>
        </li>
        <li v-if="globalUser.login">
          <a-dropdown>
            <a-avatar :size="32">
              <template #icon><UserOutlined /></template>
            </a-avatar>
            <template #overlay>
              <a-menu>
                <a-menu-item @click="logout">{{ t('header.logout') }}</a-menu-item>
              </a-menu>
            </template>
          </a-dropdown>
        </li>
      </ul>
    </div>
  </div>
</template>

<style scoped lang="less">
.app-header {
  display: flex;
  justify-content: space-between;
  height: 64px;
  line-height: 64px;
  .logo img {
    width: 96px;
  }
  .navbar {
    ul {
      padding: 0;
      margin: 0;
      li {
        display: inline-block;
        margin-right: 40px;
        opacity: 0.6;
        a {
          color: #333;
          //font-family: Avenir-Medium;
        }
      }
      li:hover {
        opacity: 1;
      }
    }
  }
}
</style>
