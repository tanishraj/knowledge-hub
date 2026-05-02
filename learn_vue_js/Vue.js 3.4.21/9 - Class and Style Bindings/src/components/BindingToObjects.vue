<script setup>
import { ref } from 'vue';

const isActive = ref(true)
const hasError = ref(false)

const toggleMessage = () => {
  if (isActive.value) {
    hasError.value = true;
    isActive.value = false;
  } else {
    hasError.value = false;
    isActive.value = true;
  }
}
</script>

<template>
  <div class="content">
    <button @click="toggleMessage">Turn Message to {{ isActive ? 'Error' : 'Message' }}</button>
    <div class="static" :class="{ active: isActive, 'text-danger': hasError }">
      This is a message.
    </div>
  </div>
</template>

<style scoped>
.active {
  color: green;
}

.text-danger {
  color: red;
}
</style>