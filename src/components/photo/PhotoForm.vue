<script>
export default {
  name: "PhotoForm",
  data() {
    return {
      img: '',
      searchText: ''
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
      />
    </v-row>
  </v-container>
</template>

<style scoped>

</style>