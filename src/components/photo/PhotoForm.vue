<script>
export default {
  name: "PhotoForm"
}
</script>

<template>
  <v-container>
    <v-row class="d-flex align-center">
      <v-text-field
          class="mr-6"
          density="compact"
          variant="outlined"
          hide-details/>
      <v-file-input
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