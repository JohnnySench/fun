<script>
import Photo from "../components/photo/photo.vue";
import axios from "axios";
import PhotoForm from "../components/photo/PhotoForm.vue";
import PhotoDialog from "../components/photo/PhotoDialog.vue";

export default {
  name: "PhotoPage",
  components: {PhotoDialog, PhotoForm, Photo},
  data() {
    return {
      dataPhoto: [],
      currentPhoto: {},
      dialogVisible: false
    }
  },
  methods: {
    addPhoto(item) {
      this.dataPhoto.push(item)
    },
    openPhotoDialog(data) {
      this.currentPhoto = data.data
      this.dialogVisible = data.visible
    },
    closePhotoDialog() {
      this.dialogVisible = false;
    }
  },
  async mounted() {
    await axios.get('https://jsonplaceholder.typicode.com/photos?_limit=10')
        .then(response => this.dataPhoto = response.data)
  }
}
</script>

<template>
  <div class="mt-12">
    <v-container>
      <PhotoForm @addPhoto="addPhoto"/>
      <v-row>
        <photo
            v-for="(item, index) in dataPhoto"
            :key="index"
            :photo-info="item"
            @openPhotoDialog="openPhotoDialog"
        />
      </v-row>
      <PhotoDialog
          @closePhotoDialog="closePhotoDialog"
          v-model="dialogVisible"
          :photo="currentPhoto"
      />
    </v-container>
  </div>
</template>

<style scoped>

</style>