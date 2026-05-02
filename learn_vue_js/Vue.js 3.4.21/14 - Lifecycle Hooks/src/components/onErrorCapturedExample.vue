<script setup>
import { ref, onErrorCaptured } from 'vue';
import ErrorProneComponent from './ErrorProneComponent.vue';

const errorMessage = ref('');

onErrorCaptured((err, instance, info) => {
  console.error('Error captured:', err);
  console.error('Error instance:', instance);
  console.error('Error info:', info);
  errorMessage.value = 'An error occurred in the child component. Please try again later.';
  return false; // Prevent the error from propagating further
});
</script>

<template>
  <h3>onErrorCaptured() Example:</h3>

  <div class="content">
    <h1>Parent Component</h1>
    <ErrorProneComponent />
    <p v-if="errorMessage" class="error-message">{{ errorMessage }}</p>
  </div>
</template>

<style scoped></style>