<script setup>
import { ref } from 'vue';

const message = ref('');
</script>

<template>
  <span>Multiline message is:</span>
  <p style="white-space: pre-line;">{{ message }}</p>
  <textarea v-model="message" placeholder="add multiple lines"></textarea>
</template>

<style scoped></style>