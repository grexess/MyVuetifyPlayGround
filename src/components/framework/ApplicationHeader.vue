<template>
  <v-app-bar app color="" dark prominent shrink-on-scroll :src="getPic" height="200px" ref="barChild">
    <template v-slot:img="{ props }">
      <v-img
        v-bind="props"
        gradient="to top right, rgba(100,115,201,.7), rgba(25,32,72,.7)"
        style="filter: grayscale(90%)"
      ></v-img>
    </template>
    <v-app-bar-nav-icon @click.stop="store.toggleNavDrawer()" class="d-flex d-sm-none"></v-app-bar-nav-icon>
    <!-- <v-toolbar-title>Coding Beauty</v-toolbar-title> -->
    <v-spacer></v-spacer>

    <v-img
      v-if="!showLogo"
      src="https://werace-d.b4a.app/assets/logo/text-transp-white-yellow-subtitle.png"
      max-height="150px"
      max-width="75%"
      contain
    ></v-img>

    <v-spacer></v-spacer>
    <!-- <transition name="fade" mode="out-in"> -->
    <v-img
      v-if="showLogo"
      src="https://werace-d.b4a.app/assets/logo/text-transp-white-yellow-subtitle50px.png"
      max-height="50px"
      max-width="176px"
      cover
    ></v-img>
    <!-- </transition> -->

    <template v-slot:extension v-if="!$vuetify.breakpoint.xs">
      <v-tabs align-with-title style="background-color: rgba(169, 169, 169, 0.4)">
        <v-tabs-slider color="red"></v-tabs-slider>
        <NavItemLarge v-for="item in store.navItems" :key="item.title" :item="item" />
      </v-tabs>
    </template>
  </v-app-bar>
</template>

<script>
import { store } from '@/store.js'
import NavItemLarge from './NavItemLarge.vue'

export default {
  name: 'ApplicationHeader',
  components: { NavItemLarge },
  data: () => ({
    store: store,
    pics: [],
    picIndex: 0,
    showLogo: false,
  }),
  async created() {
    this.$vuetify.goTo(0)
    this.startInterval()
    const picNames = ['sport1-unsplash.webp', 'sport2-unsplash.webp', 'sport3-unsplash.webp']

    for (const name of picNames) {
      console.log(`${this.$imagehost}portal/${name}`)
      const x = await fetch(`${this.$imagehost}portal/${name}`)
      this.pics.push(URL.createObjectURL(await x.blob()))
    }
  },

  mounted() {
    this.$watch('$refs.barChild.computedHeight', newValue => (this.showLogo = newValue < 200))
  },

  computed: {
    getPic() {
      return this.pics[this.picIndex]
    },
  },

  methods: {
    startInterval() {
      setInterval(() => {
        this.picIndex = (this.picIndex + 1) % 3
      }, 5000)
    },
  },
}
</script>

<style scoped>
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.5s;
}

.fade-enter,
.fade-leave-to {
  opacity: 0;
}
</style>
