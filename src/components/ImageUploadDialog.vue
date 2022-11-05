<template>
  <v-dialog v-model="dialog" max-width="90%" transition="dialog-bottom-transition" persistent>
    <v-card>
      <v-card-title>Logo-Upload</v-card-title>
      <v-card-text><ImageCropper :src="src" /></v-card-text>
      <v-card-actions class="pt-0">
        <v-btn text @click="$emit('cancel')">
          Abbrechen
          <v-icon left> mdi-close </v-icon>
        </v-btn>
        <v-spacer />
        <v-btn>Speichern </v-btn>
      </v-card-actions>
    </v-card>
  </v-dialog>
</template>

<script>
import ImageCropper from './ImageCropper.vue'

export default {
  components: {
    ImageCropper,
  },
  props: {
    show: {
      type: Boolean,
      default: false,
    },
  },

  created() {
    this.dialog = this.show
  },

  watch: {
    show(v) {
      this.dialog = v
    },
  },

  data() {
    return {
      dialog: true,
      src: 'https://picsum.photos/id/11/500/300',
    }
  },
}
</script>
