<script setup>
import { ref } from 'vue'
const ok = ref(false)
</script>

<template>
  <button @click="ok = !ok">Toggle</button>

  <div v-show="ok">
    <h1>Title</h1>
    <p>Paragraph 1</p>
    <p>Paragraph 2</p>
  </div>
</template>

<style scoped></style>