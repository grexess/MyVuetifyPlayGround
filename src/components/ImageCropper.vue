<template>
  <div>
    <div class="img-container">
      <!-- <v-img
        ref="image"
        max-height="150"
        max-width="250"
        :src="src"
      ></v-img> -->
      <img ref="image" :src="src" crossorigin class="img-container" />
    </div>
    <img :src="destination" class="img-preview" />
  </div>
</template>

<script>
import Cropper from 'cropperjs'
export default {
  name: 'ImageCropper',
  data() {
    return {
      cropper: {},
      destination: {},
      image: {},
    }
  },
  props: {
    src: String,
  },
  mounted() {
    this.image = this.$refs.image
    this.cropper = new Cropper(this.image, {
      // zoomable: false,
      // scalable: false,
      // preview: false,
      aspectRatio: 1,
      crop: () => {
        const canvas = this.cropper.getCroppedCanvas()
        this.destination = canvas.toDataURL('image/png')
      },
    })
  },
}
</script>

<style scoped>
.img-container {
  max-height: 200px;
}
.img-preview {
  width: 200px;
  max-height: 200px;
  margin-left: 10px;
}
</style>
