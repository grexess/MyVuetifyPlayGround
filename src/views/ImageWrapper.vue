<template>
  <v-container>
    <v-btn color="red lighten-2" @click="dialog = true"> Open ImageUpload </v-btn>
    <ImageUploadDialog :show="dialog" @cancel="dialog = false" />
  </v-container>

</template>

<script>
import ImageUploadDialog from '../components/ImageUploadDialog.vue'
export default {
  components: {
    ImageUploadDialog,
  },

  data() {
    return {
      dialog: false,
    }
  },
}
</script>

<style></style>
