<template>
  <v-app>
    <router-link to="/PDFPrint">PDFPrint</router-link>
    <router-link to="/ImageWrapper">ImageWrapper</router-link>
    <v-divider class="ma-8" />
    <router-view />
  </v-app>
</template>

<style lang="scss">
#app {
  // font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
</style>
