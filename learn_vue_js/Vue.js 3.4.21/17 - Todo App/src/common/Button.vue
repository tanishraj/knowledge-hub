<script setup>
const { label } = defineProps(['label']);
defineEmits(['onClick']);
</script>

<template>
  <button @click="$emit('onClick')">{{ label }}</button>
</template>

<style scoped>
button {
  padding: 10px;
  border-radius: 5px;
  background-color: black;
  color: white;
  font-weight: 700;
  font-size: 1rem;
  border: none;
  min-width: 70px;
  max-width: 100%;
  border: 0;
}
</style>