<script setup>
import { ref } from 'vue';

const text = ref('');
</script>

<template>
  <input type="text" :value="text" @input="event => text = event.target.value" />
  <p>Input value is: {{ text }}</p>
</template>

<style scoped></style>