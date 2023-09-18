<script>
export default {
  name: "photo",
  props: {
    photoInfo: {
      required: true,
      type: Object
    }
  },
  methods: {
    openPhotoDialog() {
      this.$emit('update:modelValue', true)
    }
  }
}
</script>

<template>
  <v-col cols="4">
    <v-card
      @click="openPhotoDialog"
    >
      <v-card-title
          v-text="photoInfo.title"
      />
      <v-card-text>
        <v-img
            width="200px"
            height="200px"
            :src="photoInfo.url"
        />
      </v-card-text>
    </v-card>
  </v-col>
</template>

<style scoped>

</style>