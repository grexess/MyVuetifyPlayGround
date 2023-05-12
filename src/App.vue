<template>
  <v-app>
    <NavigationDrawer />
    <ApplicationHeader />

    <v-main id="mainArea">
      <v-container fluid>
        <router-link to="/PDFPrint">PDFPrint</router-link>
        <router-link to="/ImageWrapper">ImageWrapper</router-link>
        <router-link to="/SimpleUpload">SimpleUpload</router-link>
        <v-divider class="ma-8" />
        <router-view />
      </v-container>
    </v-main>
  </v-app>
</template>

<script>
import NavigationDrawer from '@/components/framework/NavigationDrawer.vue'
import ApplicationHeader from '@/components/framework/ApplicationHeader.vue'

export default {
  name: 'App',
  components: { NavigationDrawer, ApplicationHeader },

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
