<template>
  <v-navigation-drawer v-model="store.nawDrawer" app bottom temporary>
    <v-list nav dense>
      <v-list-item-group v-model="group" active-class="deep-purple--text text--accent-4">
        <v-list-item v-for="item in navItems" :key="item.title" :to="item.title">
          {{ item.title }}
        </v-list-item>
      </v-list-item-group>
    </v-list>
  </v-navigation-drawer>
</template>

<script>
import { store } from '@/store.js'

export default {
  data: () => ({
    store: store,
    group: null,
    navItems: [{ title: 'Blog' }, { title: 'Kontakt' }, { title: 'Forum' }],
  }),

  computed: {
    // drawer() {
    //   return this.store.drawer
    // },
  },
}
</script>
