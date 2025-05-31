<template>
  <v-app-bar>
    <app-bar-logo />
    <template #append>
      <app-bar-menu />
    </template>
  </v-app-bar>
  <v-main>
    <router-view />
  </v-main>
</template>

<script lang="ts" setup>
  import AppBarLogo from '@/components/AppBarLogo.vue';
  import AppBarMenu from '@/components/AppBarMenu.vue';
</script>
