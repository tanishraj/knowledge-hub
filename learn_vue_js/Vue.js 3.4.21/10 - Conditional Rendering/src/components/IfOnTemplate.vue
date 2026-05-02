<script setup>
import { ref } from 'vue'
const ok = ref(false)
</script>

<template>
  <button @click="ok = !ok">Toggle</button>

  <template v-if="ok">
    <h1>Title</h1>
    <p>Paragraph 1</p>
    <p>Paragraph 2</p>
  </template>
</template>

<style scoped></style>