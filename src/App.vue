<script>
import NavBar from "./components/NavBar.vue";

export default {
  components: {
    NavBar
  }
}
</script>

<template>
  <v-app>
    <NavBar/>
    <router-view/>
  </v-app>
</template>

<style scoped>

</style>
