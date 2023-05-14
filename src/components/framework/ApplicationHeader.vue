<template>
  <!-- <v-app-bar
    app
    color="#6A76AB"
    dark
    shrink-on-scroll
    prominent
    src="https://picsum.photos/1920/1080?random"
    fade-img-on-scroll
    scroll-target="#mainArea"
  >
    <template v-slot:img="{ props }">
      <v-img v-bind="props" gradient="to top right, rgba(100,115,201,.7), rgba(25,32,72,.7)"></v-img>
    </template>
    <v-app-bar-nav-icon @click.stop="store.toggleNavDrawer()"></v-app-bar-nav-icon>
    <v-spacer></v-spacer>
    <v-btn icon>
      <v-icon>mdi-dots-vertical</v-icon>
    </v-btn>

    <template v-slot:extension>
      <v-row class="" no-gutters>
        <v-col v-for="item in tabItems" :key="item.title" cols="sm">
          <div style="font-size: 0.5em">{{ item.title }}</div>
        </v-col>
      </v-row>
    </template>
  </v-app-bar> -->
  <v-app-bar app color="primary" dark prominent shrink-on-scroll>
    <v-app-bar-nav-icon @click.stop="store.toggleNavDrawer()" class="d-flex d-sm-none"></v-app-bar-nav-icon>
    <!-- <v-toolbar-title>Coding Beauty</v-toolbar-title> -->
    <v-spacer></v-spacer>

    <template v-slot:extension v-if="!$vuetify.breakpoint.xs">
      <v-tabs align-with-title>
        <v-tab>Start</v-tab>
        <v-menu bottom left>
          <template v-slot:activator="{ on, attrs }">
            <v-btn text class="align-self-center mr-4" v-bind="attrs" v-on="on">
              Unsere Apps
              <v-icon right> mdi-menu-down </v-icon>
            </v-btn>
          </template>

          <v-list class="grey lighten-3">
            <v-list-item v-for="item in apps" :key="item" @click="addItem(item)">
              {{ item }}
            </v-list-item>
          </v-list>
        </v-menu>
        <v-menu>
          <template v-slot:activator="{ on, attrs }">
            <v-btn text class="align-self-center mr-4" v-bind="attrs" v-on="on">
              Events
              <v-icon right> mdi-menu-down </v-icon>
            </v-btn>
          </template>

          <v-list class="grey lighten-3">
            <v-list-item v-for="item in events" :key="item" @click="addItem(item)">
              {{ item }}
            </v-list-item>
          </v-list>
        </v-menu>
        <v-tab v-for="item in tabItems" :key="item.title">{{ item.title }}</v-tab>
      </v-tabs>
    </template>
  </v-app-bar>
</template>

<script>
import { store } from '@/store.js'

export default {
  data: () => ({
    store: store,
    tabItems: [
      { title: 'Blog', icon: 'mdi-phone' },
      { title: 'Contact', icon: 'mdi-phone' },
      { title: 'Forum', icon: 'mdi-phone' },
    ],
    apps: ['News', 'Maps', 'Books', 'Flights', 'Apps'],
    events: ['Anstehend', 'Laufend', 'Bendet'],
    pics: [],
    picIndex: 0,
  }),
  async created() {
    this.startInterval()
    const picNames = ['sport1-unsplash.webp', 'sport2-unsplash.webp', 'sport3-unsplash.webp']
    // for (const name of picNames) {
    //   console.log(`${this.$imagehost}portal/${name}`)
    //   const blob = await URL.createObjectURL(fetch(`${this.$imagehost}portal/${name}`).then(res => res.blob()))
    //   debugger
    //   this.pics.push(blob)
    // }
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
