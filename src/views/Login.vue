<script setup lang="ts">
import { onMounted, reactive } from 'vue'
import request from '@/utils/request.ts'
import { useI18n } from 'vue-i18n'
import { useGlobalUser } from '@/stores/globalUser'
import { useRouter } from 'vue-router'

const router = useRouter()
const { t } = useI18n()
const { globalUser, setGlobalUser } = useGlobalUser()

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
  setGlobalUser(response.data)
  router.push('/')
}

onMounted(() => {
  if (globalUser.login) {
    router.push('/')
  }
})
</script>

<template>
  <div class="home-page">
    <section class="top-section">
      <div class="vertical-middle product-area">
        <img class="product-logo" src="@/assets/img/seata_logo_white.png" />
        <p class="product-desc">{{ t('login.desc') }}</p>
      </div>
      <div class="animation animation1" />
      <div class="animation animation2" />
      <div class="animation animation3" />
      <div class="animation animation4" />
      <div class="animation animation5" />
      <div class="login-panel">
        <a-card :title="t('login.login')">
          <a-form
            :model="loginParams"
            name="loginForm"
            :label-col="{ span: 8 }"
            :wrapper-col="{ span: 16 }"
            @finish="onFinish"
          >
            <a-form-item :wrapper-col="{ span: 24 }" style="text-align: center">
              <a-alert type="warning" :message="t('login.warning')" />
            </a-form-item>
            <a-form-item
              :label="t('login.username')"
              name="username"
              :rules="[{ required: true, message: t('login.pleaseInputUsername') }]"
            >
              <a-input
                :placeholder="t('login.pleaseInputUsername')"
                v-model:value="loginParams.username"
              />
            </a-form-item>
            <a-form-item
              :label="t('login.password')"
              name="password"
              :rules="[{ required: true, message: t('login.pleaseInputPassword') }]"
            >
              <a-input
                type="password"
                :placeholder="t('login.pleaseInputPassword')"
                v-model:value="loginParams.password"
              />
            </a-form-item>
            <a-form-item :wrapper-col="{ offset: 8, span: 8 }">
              <a-button type="primary" html-type="submit" block>{{ t('login.login') }}</a-button>
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
