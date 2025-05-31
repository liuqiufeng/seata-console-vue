<template>
  <app-bar />

  <v-navigation-drawer expand-on-hover rail>
    <v-list nav>
      <v-list-item
        v-for="(item, index) in menuItems"
        :key="'menu' + index"
        :prepend-icon="item.icon"
        :title="item.title"
        :to="item.path"
      />
    </v-list>
  </v-navigation-drawer>

  <v-main>
    <router-view />
  </v-main>
  <app-footer />
</template>

<script lang="ts" setup>

  import { menuItems } from '@/router';
  import AppFooter from '@/components/AppFooter.vue';

</script>
