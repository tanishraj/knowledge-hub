<script>
import ComposableApp from "@/ComposableApp.vue";

export default {
  name: "App",
  components: {
    ComposableApp
  },
  data() {
    return {
      message: "Hello Traditional Vue Component"
    };
  },
  methods: {
    changeMessage() {
      this.message = "Ugggghh, Vue 2.0 sucks!!!";
    }
  }
};
</script>

<template>
  <h1>{{ message }}</h1>
  <button v-on:click="changeMessage">
    Click me to change greeting message
  </button>
  <ComposableApp />
</template>

<style scoped>
h1 {
  color: red;
}
</style>
