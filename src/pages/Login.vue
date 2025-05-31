<template>
  <div class="login-div">
    <div class="product-card" variant="flat">
      <img class="product-logo" src="@/assets/seata_logo_white.png">
      <p class="product-desc">
        {{ t('login.desc') }}
      </p>
    </div>
    <div className="animation animation1" />
    <div className="animation animation2" />
    <div className="animation animation3" />
    <div className="animation animation4" />
    <div className="animation animation5" />
    <v-card
      class="login-card pa-12 pb-8"
      rounded="lg"
      variant="flat"
      width="448"
    >
      <v-img
        class="mx-auto my-6"
        max-width="228"
        src="@/assets/seata_logo.png"
      />

      <div class="text-subtitle-1 text-medium-emphasis">Username</div>

      <v-text-field
        density="compact"
        placeholder="Username"
        prepend-inner-icon="mdi-email-outline"
        variant="outlined"
      />

      <div class="text-subtitle-1 text-medium-emphasis">
        Password
      </div>

      <v-text-field
        :append-inner-icon="visible ? 'mdi-eye-off' : 'mdi-eye'"
        density="compact"
        placeholder="Enter your password"
        prepend-inner-icon="mdi-lock-outline"
        :type="visible ? 'text' : 'password'"
        variant="outlined"
        @click:append-inner="visible = !visible"
      />

      <v-card
        class="mb-12"
        color="surface-variant"
        variant="tonal"
      >
        <v-card-text class="text-medium-emphasis text-caption">
          {{ t('login.warning') }}
        </v-card-text>
      </v-card>

      <v-btn
        block
        class="mb-8"
        color="blue"
        size="large"
        variant="tonal"
      >
        Log In
      </v-btn>
    </v-card>
  </div>
</template>

<route lang="yaml">
meta:
  layout: public
</route>

<script lang="ts" setup>
  import { ref } from 'vue'
  import { useI18n } from 'vue-i18n'
  const { t } = useI18n()

  const visible = ref(false)
</script>

<style lang="scss" scoped>

@keyframes slashStar {
  0% {
    opacity: 1;
  }

  100% {
    opacity: 0;
  }
}
$animationDuration: 2s;

.login-div{
  background: url('@/assets/black_dot.png') repeat;
  background-size: 14px 14px;
  height: 100%;
  position: relative;
  .animation {
      position: absolute;
      width: 6px;
      height: 6px;
      border-radius: 50%;
      background-color: #1be1f6;
      &1 {
        left: 15%;
        top: 70%;
        animation: slashStar $animationDuration ease-in-out 0.3s infinite;
      }
      &2 {
        left: 34%;
        top: 35%;
        animation: slashStar $animationDuration ease-in-out 1.2s infinite;
      }
      &3 {
        left: 53%;
        top: 20%;
        animation: slashStar $animationDuration ease-in-out 0.5s infinite;
      }
      &4 {
        left: 72%;
        top: 64%;
        animation: slashStar $animationDuration ease-in-out 0.8s infinite;
      }
      &5 {
        left: 87%;
        top: 30%;
        animation: slashStar $animationDuration ease-in-out 1.5s infinite;
      }
    }
  .login-card{
    position: absolute;
    right: 40px;
    top: 90px;
  }
  .product-card{
    position: absolute;
    left: 0;
    top: 40%;
    margin-top: -47px;
    width: 600px;
    margin-left: 40px;
  }
  .product-logo{
    display: block;
    width: 257px;
    height: 50px;
    margin: 0;
  }
  .product-desc{
    opacity: 0.8;
    // font-family: Avenir-Medium;
    font-size: 24px;
    color: #fff;
    max-width: 780px;
    margin: 12px auto 30px;
    text-align: left;
    line-height: 32px;
  }
}
</style>
