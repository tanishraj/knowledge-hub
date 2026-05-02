<script setup>
function causeError() {
  throw new Error('An intentional error has occurred!');
}
</script>

<template>
  <div>
    <h2>Error-Prone Component</h2>
    <button @click="causeError">Cause Error</button>
  </div>
</template>
