<template>
  <v-app
    :style="`
      background-image: url('${$imagehost}logo/background-black.png');
      background-color: #0d0d0d;
      background-size: contain;
    `"
  >
    <NavigationDrawer />
    <ApplicationHeader />

    <v-main
      ><v-container fluid>
        <router-view />
      </v-container>
    </v-main>

    <ApplicationFooter />
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
  // font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
</style>
