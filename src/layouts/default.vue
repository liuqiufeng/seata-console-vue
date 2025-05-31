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
</template>

<script lang="ts" setup>

  import { menuItems } from '@/router';

</script>
