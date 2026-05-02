<script setup>
import { ref } from "vue";

const message = ref("Hello Vue Component using Composable API");

const changeMessage2 = () => {
  message.value = "Vue 3.0 Rocks!!!";
};
</script>

<template>
  <h1>{{ message }}</h1>
  <button @click="changeMessage2">Click Me to change the message</button>
</template>

<style scoped>
h1 {
  color: red;
}
</style>
