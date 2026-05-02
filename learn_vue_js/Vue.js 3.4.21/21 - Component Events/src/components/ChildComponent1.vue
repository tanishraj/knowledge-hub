<script setup>
</script>

<template>
  <div class="content">
    <h3>Child Component</h3>
    <button @click="$emit('send-data-to-parent', 'Hello From Child Component !!!')">Click to send data to Parent
      Component</button>
  </div>
</template>

<style scoped>
.content {
  background-color: rgb(229, 255, 0) !important;
  color: rgb(0, 0, 0) !important;
}
</style>