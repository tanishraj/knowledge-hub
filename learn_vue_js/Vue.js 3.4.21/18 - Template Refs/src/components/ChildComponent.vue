<script setup>
function clearInput() {
  inputField.value = '';
},
function focusInput() {
  inputField.focus();
},
</script>

<template>
  <div class="content">
    <h3>Child Component</h3>
    <input ref="inputField" placeholder="Type something..." />
    <button @click="clearInput">Clear Input</button>
  </div>
</template>

<style scoped></style>