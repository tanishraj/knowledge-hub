<script setup>
defineProps({
  title: String,
  message: String
})
</script>

<template>
  <div class="content">
    <h2>{{ title }}</h2>
    <p>{{ message }}</p>
  </div>
</template>

<style scoped>
/* Add any component-specific styles here */
h2 {
  color: blue;
}
</style>