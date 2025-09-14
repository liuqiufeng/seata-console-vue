<script setup lang="ts">
import { useGlobalUser } from '@/stores/globalUser.ts'

const { globalUser } = useGlobalUser()
</script>

<template>
  <div class="app-header">
    <div class="logo">
      <a href="#" target="_blank" rel="noopener noreferrer">
        <img src="@/assets/img/seata_logo.png" alt="logo" />
      </a>
    </div>

    <div class="navbar">
      <ul>
        <li><a href="#" target="_blank" rel="noopener noreferrer">HOME</a></li>
        <li><a href="#" target="_blank" rel="noopener noreferrer">111111</a></li>
        <li><a href="#" target="_blank" rel="noopener noreferrer">111111</a></li>
        <li>
          <a-button type="text" shape="circle">EN</a-button>
        </li>
        <li v-if="globalUser.login">
          <a-avatar :size="32">
            <template #icon><UserOutlined /></template>
          </a-avatar>
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
