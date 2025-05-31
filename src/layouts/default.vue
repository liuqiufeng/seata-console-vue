<template>
  <app-bar />

  <v-navigation-drawer expand-on-hover rail>
    <v-list nav>
      <!--      <v-list-item exact href="/" prepend-icon="mdi-folder" title="Home" />-->
      <!--      <v-list-item prepend-icon="mdi-folder" title="test" value="test" />-->
      <v-list-item
        v-for="(item, index) in menuItems"
        :key="'menu' + index"
        :href="item.path"
        :prepend-icon="item.icon"
        :title="item.title"
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
