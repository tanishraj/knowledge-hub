<script setup>
import { ref } from 'vue'

const count = ref(0)

const updateCount = (updateType) => {
  if (updateType === 'INC') {
    count.value++
  } else if (updateType === 'DEC' && count.value > 0) {
    count.value--;
  }
}
</script>

<template>
  <div class="app">
    <h1>Counter App</h1>

    <div class="app-controls">
      <button v-on:click="() => updateCount('DEC')">-</button>
      <h3>{{ count }}</h3>
      <button @click="() => updateCount('INC')">+</button>
    </div>
  </div>
</template>

<style scoped>
.app {
  text-align: center;
}

.app-controls {
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 30px;
  gap: 10px;
}
</style>
