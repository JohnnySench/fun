<script>
import Photo from "../components/photo/photo.vue";
import axios from "axios";
import PhotoForm from "../components/photo/PhotoForm.vue";

export default {
  name: "PhotoPage",
  components: {PhotoForm, Photo},
  data() {
    return {
      dataPhoto: [],
    }
  },
  methods: {
    addPhoto(item) {
      this.dataPhoto.push(item)
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
        />
      </v-row>
    </v-container>

  </div>
</template>

<style scoped>

</style>