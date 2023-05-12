<template>
  <v-app-bar
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
      <v-row class="ma-4">
        <v-col v-for="n in 8" :key="n" cols="sm">
          <v-card class="pa-2" outlined tile> col </v-card>
        </v-col>
      </v-row>
      <!-- <v-tabs align-with-title icons-and-text>
        <v-tab v-for="item in tabItems" :key="item.title" :href="item.link"
          >{{ item.title }} <v-icon>{{ item.icon }}</v-icon></v-tab
        >
      </v-tabs> -->
    </template>
  </v-app-bar>
</template>

<script>
import { store } from '@/store.js'

export default {
  data: () => ({
    store: store,
    tabItems: [
      { title: 'Popup-Creator', icon: 'mdi-phone' },
      { title: 'Kontakt', icon: 'mdi-phone' },
      { title: 'Forum', icon: 'mdi-phone' },
    ],
  }),
}
</script>
