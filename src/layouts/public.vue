<template>
  <app-bar />
  <v-main>
    <router-view />
  </v-main>
  <app-footer />
</template>

<script lang="ts" setup>
  import AppFooter from '@/components/AppFooter.vue';
</script>
