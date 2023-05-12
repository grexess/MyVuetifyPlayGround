<template>
  <v-dialog v-model="dialog" max-width="90%" persistent>
    <v-card class="mx-auto pa-4">
      <component :is="currentComponent"></component>
      <v-card-actions>
        <v-spacer />
        <v-btn color="primary" @click="dialog = false"> <v-icon>mdi-close</v-icon>Schliessen </v-btn>
      </v-card-actions>
    </v-card>
  </v-dialog>
</template>

<script>
import Vue from 'vue'
import Impressum from '../content/footer/Impressum.vue'
import Datenschutz from '../content/footer/Datenschutz.vue'

Vue.component('Impressum', Impressum)
Vue.component('Datenschutz', Datenschutz)

export default {
  data: () => ({
    dialog: false,
    dataSet: '',
  }),

  computed: {
    currentComponent() {
      return this.dataSet
    },
  },

  methods: {
    open(component) {
      this.dialog = true
      this.dataSet = component
    },
  },
}
</script>
