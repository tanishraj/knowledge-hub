<script setup>
import { ref, onBeforeMount } from 'vue';

const message = ref('');

onBeforeMount(() => {
  message.value = 'Hello, Vue!';
});
</script>

<template>
  <h3>OnBeforeMount() Example:</h3>

  <div v-if="message">
    <h1>{{ message }}</h1>
  </div>
</template>

<style scoped></style>