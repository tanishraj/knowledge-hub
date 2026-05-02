<script setup>
const model = defineModel();
</script>

<template>
  <input type="text" v-model="model" placeholder="Enter the text..." />
</template>

<style scoped>
input {
  padding: 10px;
  border-radius: 5px;
  border: none;
  min-width: 70px;
  max-width: 100%;
  font-weight: 500;
  font-size: 1rem;
  outline: none;
  border: 0;
}
</style>