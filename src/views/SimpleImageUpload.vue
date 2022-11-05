<template>
  <v-container>
    <v-row no-gutters justify="start" align="center">
      <v-col cols="4">
        <v-file-input
          show-size
          label="Select Logo (200px * 200px)"
          accept="image/*"
          @change="selectImage"
          outlined
          hint="bla"
          append-outer-icon="mdi-cloud-upload"
        ></v-file-input>
      </v-col>

      <v-col cols="2" class="" align-self="center">
        <v-btn color="success" dark small @click="upload">
          Upload
          <v-icon right dark>mdi-cloud-upload</v-icon>
        </v-btn>
      </v-col>
    </v-row>
    <v-row no-gutters justify="start" align="center">
      <v-col cols="4">
        <v-file-input
          show-size
          label="Select Hero Image (640px * 480px)"
          accept="image/*"
          @change="selectImage"
          outlined
          append-outer-icon="mdi-cloud-upload"
        ></v-file-input>
      </v-col>

      <v-col cols="2" class="pl-2" align-self="center">
        <v-btn color="success" dark small @click="upload">
          Upload
          <v-icon right dark>mdi-cloud-upload</v-icon>
        </v-btn>
      </v-col>
    </v-row>

    <div v-if="progress">
      <div>
        <v-progress-linear v-model="progress" color="light-blue" height="25" reactive>
          <strong>{{ progress }} %</strong>
        </v-progress-linear>
      </div>
    </div>

    <v-alert type="success">Logo hat Größe {{ imageSize }}</v-alert>

    <div v-if="previewImage">
      <div><img class="preview my-3" :src="previewImage" alt="" /></div>
    </div>

    <v-alert v-if="message" border="left" color="blue-grey" dark>
      {{ message }}
    </v-alert>

    <v-card v-if="imageInfos.length > 0" class="mx-auto">
      <v-list>
        <v-subheader>List of Images</v-subheader>
        <v-list-item-group color="primary">
          <v-list-item v-for="(image, index) in imageInfos" :key="index">
            <a :href="image.url">{{ image.name }}</a>
          </v-list-item>
        </v-list-item-group>
      </v-list>
    </v-card>
  </v-container>
</template>

<script>
export default {
  name: 'upload-image',
  data() {
    return {
      currentImage: undefined,
      previewImage: undefined,
      progress: 0,
      message: '',
      imageInfos: [],
      imageSize: { height: 0, width: 0 },
    }
  },

  methods: {
    selectImage(image) {
      this.currentImage = image
      this.previewImage = URL.createObjectURL(this.currentImage)

      //get image size
      let reader = new FileReader()
      debugger
      reader.readAsDataURL(image)
      reader.onload = evt => {
        let img = new Image()
        img.onload = () => {
          debugger
          this.imageSize.width = img.naturalWidth
          this.imageSize.height = img.naturalHeight
        }
        img.src = evt.target.result
      }

      this.progress = 0
      this.message = ''
    },
    upload() {
      if (!this.currentImage) {
        this.message = 'Please select an Image!'
        return
      }

      this.progress = 0

      // TODO Upload Image
      // UploadService.upload(this.currentImage, (event) => {
      //   this.progress = Math.round((100 * event.loaded) / event.total);
      // })
      //   .then((response) => {
      //     this.message = response.data.message;
      //     return UploadService.getFiles();
      //   })
      //   .then((images) => {
      //     this.imageInfos = images.data;
      //   })
      //   .catch((err) => {
      //     this.progress = 0;
      //     this.message = "Could not upload the image! " + err;
      //     this.currentImage = undefined;
      //   });
    },
  },
}
</script>
