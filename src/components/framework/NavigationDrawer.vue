<template>
  <v-navigation-drawer v-model="store.nawDrawer" app temporary width="200px" class="zGrayBG">
    <v-list nav dense class="text-left">
      <NavItemSmall v-for="item in store.navItems" :key="item.title" :item="item" />
    </v-list>
  </v-navigation-drawer>
</template>

<script>
import { store } from '@/store.js'
import NavItemSmall from './NavItemSmall.vue'
export default {
  name: 'NavigationDrawer',
  components: { NavItemSmall },
  data: () => ({
    store: store,
    group: null,
  }),
}
</script>

<style scoped>
.zGrayBG {
  background: rgb(239, 241, 242);
  background: linear-gradient(180deg, rgba(239, 241, 242, 1) 66%, rgba(231, 229, 229, 1) 100%);
}
</style>
