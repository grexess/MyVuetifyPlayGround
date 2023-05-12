<template>
  <v-app>
    <NavigationDrawer />
    <ApplicationHeader />

    <v-main id="mainArea">
      <v-container fluid>
        <router-view />
      </v-container>
    </v-main>

    <!-- <ApplicationFooter /> -->
  </v-app>
</template>

<script>
import NavigationDrawer from '@/components/framework/NavigationDrawer.vue'
import ApplicationHeader from '@/components/framework/ApplicationHeader.vue'
import ApplicationFooter from '@/components/framework/ApplicationFooter.vue'

export default {
  name: 'App',
  components: { NavigationDrawer, ApplicationHeader, ApplicationFooter },

  data() {
    return {}
  },
}
</script>

<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
</style>
