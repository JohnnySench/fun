<script>
export default {
  name: "PhotoDialog",
  props: {
    photo: {
      type: Object,
      required: true
    },
    value: {
      type: Boolean,
      default: false
    }
  },
  data() {
    return {
      localVisible: false
    }
  },
  methods: {
  },
  watch: {
    value(nV) {
      this.localVisible = nV;
    },
    localVisible(nV) {
      this.$emit('input', nV)
    }
  },
  created() {
    this.localVisible = this.value
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
          v-text="photo.title"
      />
      <v-card-text>
        <v-img
            :src="photo.url"
        />
      </v-card-text>
    </v-card>
  </v-dialog>
</template>

<style scoped>

</style>