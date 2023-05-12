<template>
  <v-footer app>
    <v-row justify="center" no-gutters>
      <v-btn
        v-for="(item, i) in footerItems"
        :key="i"
        text
        rounded
        x-small
        class="my-2"
        @click="openOverlay(item.component)"
        >{{ item.title }}</v-btn
      >
      <v-col class="text-center footer" cols="12">
        {{ new Date().getFullYear() }} —
        <strong>
          Powered with
          <v-icon color="red">mdi-heart-pulse</v-icon> &
          <v-icon color="brown" small>mdi-coffee</v-icon>
          <span> in Dresden </span>
          <v-icon color="green" small>mdi-flower-outline</v-icon>
        </strong>
      </v-col>
      <AppFooterOverlay ref="overlay" />
    </v-row>
  </v-footer>
</template>

<script>
import AppFooterOverlay from './AppFooterOverlay.vue'

export default {
  data: () => ({
    footerItems: [
      { title: 'Impressum', component: 'Impressum' },
      { title: 'Datenschutz', component: 'Datenschutz' },
      { title: 'AGB', component: 'AGB' },
    ],
  }),

  methods: {
    openOverlay(val) {
      this.$refs.overlay.open(val)
    },
  },
}
</script>

<style scoped>
.footer {
  color: rgba(0, 0, 0, 0.87);
  font-size: 0.8em;
}
</style>
