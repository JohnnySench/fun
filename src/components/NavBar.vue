<script>
export default {
  name: "NavBar",
  data() {
    return {}
  }
}
</script>

<template>
  <v-app-bar
      color="success"
      density="compact"
  >
    <v-layout>
      <v-spacer/>
      <v-btn
          to="/"
          class="mr-2"
          variant="outlined"
          text="Главная"
          color="black"

      />
      <v-btn
          class="mr-2"
          variant="outlined"
          text="Фото"
          color="black"
      >
        <router-link to="/photos">Фото</router-link>
      </v-btn>
    </v-layout>
  </v-app-bar>
</template>

<style scoped>

</style>