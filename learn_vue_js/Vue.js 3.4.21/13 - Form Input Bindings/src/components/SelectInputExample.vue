<script setup>
import { ref } from 'vue';

const selected = ref('One');
</script>

<template>
  <div>Selected: {{ selected }}</div>

  <select v-model="selected">
    <option disabled value="">Please select one</option>
    <option value="A">A</option>
    <option value="B">B</option>
    <option value="C">C</option>
  </select>
</template>

<style scoped></style>