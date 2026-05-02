<script setup>
import { ref } from 'vue'

const message = ref('Hello Vue!')

function reverseMessage() {
  message.value = message.value.split('').reverse().join('')
}
</script>

<template>
  <div>
    <p>{{ message }}</p>
    <button @click="reverseMessage">Reverse Message</button>
  </div>
</template>