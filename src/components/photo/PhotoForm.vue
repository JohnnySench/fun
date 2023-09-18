<script>
export default {
  name: "PhotoForm",
  data() {
    return {
      img: null, // почему то массив фоток
      searchText: ''
    }
  },
  methods: {
    addPhoto() {
      const reader = new FileReader();
      reader.onload = () => {
        let photo = {
          id: Date.now(),
          title: this.searchText,
          url: reader.result // результат юрл
        }
        this.$emit('addPhoto', photo);
      }
      reader.readAsDataURL(this.img[0]) // Читаем изображение которое выбрали

    }
  }
}
</script>

<template>
  <v-container>
    <v-row class="d-flex align-center">
      <v-text-field
          v-model="searchText"
          class="mr-6"
          density="compact"
          variant="outlined"
          hide-details/>
      <v-file-input
          v-model="img"
          density="compact"
          variant="outlined"
          hide-details
          label="Выберите изображение"
      />
      <v-btn
          class="ml-3"
          text="Добавить"
          @click="addPhoto"
      />
    </v-row>
  </v-container>
</template>

<style scoped>

</style>