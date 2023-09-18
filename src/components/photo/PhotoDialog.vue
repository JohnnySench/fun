<script>
export default {
  name: "PhotoDialog",
  props: {
    photo: {
      type: Object,
      required: true
    },
  },
  data() {
    return {
      localVisible: false
    }
  },
  methods: {
    closePhotoDialog() {
      this.localVisible = false;
      this.$emit('closePhotoDialog', false)
    }
  },
  computed: {
    getTitlePhoto() {
      return `Название фотографии - ${this.photo.title}`
    }
  }
}
</script>

<template>
  <v-dialog
      v-model="localVisible"
      width="600px"
  >
    <v-card>
      <v-card-title
          v-text="getTitlePhoto"
      />
      <v-card-text>
        <v-img
            :src="photo.url"
        />
      </v-card-text>
      <v-card-actions>
        <v-btn text="Закрыть" @click="closePhotoDialog"/>
      </v-card-actions>
    </v-card>
  </v-dialog>
</template>

<style scoped>

</style>