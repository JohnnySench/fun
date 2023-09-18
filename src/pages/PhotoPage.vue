<script>
import Photo from "../components/photo/photo.vue";
import PhotoForm from "../components/photo/PhotoForm.vue";
import PhotoDialog from "../components/photo/PhotoDialog.vue";
import {mapActions, mapGetters} from "vuex";

export default {
  name: "PhotoPage",
  components: {PhotoDialog, PhotoForm, Photo},
  data() {
    return {
      dataPhoto: null,
      currentPhoto: {},
      dialogVisible: false
    }
  },
  methods: {
    ...mapActions([
       'init_photo'
    ]),
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
  computed: {
    ...mapGetters([
       'get_photo'
    ]),
  },
  async mounted() {
    await this.init_photo();
  }
}
</script>

<template>
  <div class="mt-12">
    <v-container>
      <PhotoForm v-if="get_photo && get_photo.length < 11" @addPhoto="addPhoto"/>
      <div v-else>Вы больше не можете добавлять элементы</div>
      <v-row>
        <photo
            v-for="(item, index) in get_photo"
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