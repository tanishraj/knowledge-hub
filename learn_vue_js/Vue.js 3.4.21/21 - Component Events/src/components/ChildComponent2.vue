<script setup>

const emit = defineEmits(['increaseCountByOne', 'decreaseCountByOne']);

const increaseCount = () => {
  emit('increaseCountByOne', +1)
}

const decreaseCount = () => {
  emit('increaseCountByOne', -1)
}
</script>

<template>
  <div class="content">
    <h3>Child Component</h3>
    <button @click="increaseCount">increase count by 1</button>
    <button @click="decreaseCount">decrease count by 1</button>
  </div>
</template>

<style scoped>
.content {
  background-color: rgb(229, 255, 0) !important;
  color: rgb(0, 0, 0) !important;
}
</style>