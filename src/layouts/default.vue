<template>
  <v-app-bar>
    <v-app-bar-nav-icon @click="drawer = !drawer" />
    <app-bar-logo />
    <template #append>
      <app-bar-menu />
    </template>
  </v-app-bar>

  <v-navigation-drawer v-model="drawer" temporary>
    <!--  -->
  </v-navigation-drawer>

  <v-main>
    <!--  -->
    <router-view />
  </v-main>
</template>

<script lang="ts" setup>
  import { ref } from 'vue';
  import AppBarMenu from '@/components/AppBarMenu.vue';
  import AppBarLogo from '@/components/AppBarLogo.vue';

  const drawer = ref(true);
</script>
