<script setup lang="ts">
import { reactive } from 'vue'
import request from '@/utils/request.ts'
import router from '@/router'
import { useGlobalUser } from '@/stores/globalUser.ts'

interface LoginParams {
  username: string
  password: string
}

const loginParams = reactive<LoginParams>({
  username: '',
  password: '',
})

const onFinish = async (params: LoginParams) => {
  const response = await request.post('/auth/login', params)
  useGlobalUser().setGlobalUser(response.data)
  router.push('/')
}
</script>

<template>
  <div class="home-page">
    <section class="top-section">
      <div class="vertical-middle product-area">
        <img class="product-logo" src="@/assets/img/seata_logo_white.png" />
        <p class="product-desc">产品描述</p>
      </div>
      <div class="animation animation1" />
      <div class="animation animation2" />
      <div class="animation animation3" />
      <div class="animation animation4" />
      <div class="animation animation5" />
      <div class="login-panel">
        <a-card title="登录">
          <a-form
            :model="loginParams"
            name="loginForm"
            :label-col="{ span: 8 }"
            :wrapper-col="{ span: 16 }"
            @finish="onFinish"
          >
            <a-form-item :wrapper-col="{ span: 24 }" style="text-align: center">
              <a-alert type="warning" message="警告：内部系统，请勿暴露到公网" />
            </a-form-item>
            <a-form-item
              label="Username"
              name="username"
              :rules="[{ required: true, message: '请输入用户名' }]"
            >
              <a-input placeholder="用户名" v-model:value="loginParams.username" />
            </a-form-item>
            <a-form-item
              label="Password"
              name="password"
              :rules="[{ required: true, message: '请输入密码' }]"
            >
              <a-input type="password" placeholder="密码" v-model:value="loginParams.password" />
            </a-form-item>
            <a-form-item :wrapper-col="{ offset: 8, span: 8 }">
              <a-button type="primary" html-type="submit" block>登录</a-button>
            </a-form-item>
          </a-form>
        </a-card>
      </div>
    </section>
  </div>
</template>

<style scoped lang="less">
@animationDuration: 2s;

@keyframes slashStar {
  0% {
    opacity: 1;
  }
  100% {
    opacity: 0;
  }
}

.home-page {
  height: 100%;
  .top-section {
    position: relative;
    height: 100%;
    background: url('@/assets/img/black_dot.png') repeat;
    background-size: 14px 14px;
    .login-panel {
      position: absolute;
      right: 40px;
      width: 480px;
      top: 50%;
      border: 0;
      transform: translateY(-50%);
    }
    .animation {
      position: absolute;
      width: 6px;
      height: 6px;
      border-radius: 50%;
      background-color: #1be1f6;
    }
    .animation1 {
      left: 15%;
      top: 70%;
      animation: slashStar @animationDuration ease-in-out 0.3s infinite;
    }
    .animation2 {
      left: 34%;
      top: 35%;
      animation: slashStar @animationDuration ease-in-out 1.2s infinite;
    }
    .animation3 {
      left: 53%;
      top: 20%;
      animation: slashStar @animationDuration ease-in-out 0.5s infinite;
    }
    .animation4 {
      left: 72%;
      top: 64%;
      animation: slashStar @animationDuration ease-in-out 0.8s infinite;
    }
    .animation5 {
      left: 87%;
      top: 30%;
      animation: slashStar @animationDuration ease-in-out 1.5s infinite;
    }
    .vertical-middle {
      position: absolute;
      left: 0;
      top: 50%;
      transform: translateY(-50%);
    }
    .product-area {
      width: 600px;
      margin-left: 40px;
    }
    .product-logo {
      display: block;
      width: 257px;
      height: 50px;
      margin: 0;
    }
    .product-desc {
      opacity: 0.8;
      //font-family: Avenir-Medium;
      font-size: 24px;
      color: #fff;
      max-width: 780px;
      margin: 12px auto 30px;
      text-align: left;
      line-height: 32px;
    }
  }
}
</style>
