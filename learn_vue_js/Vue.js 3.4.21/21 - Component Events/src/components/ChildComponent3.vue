<script setup>

const emit = defineEmits({
  'increaseCountByOne': (value) => {
    if (typeof value !== 'number') {
      throw new Error('Value must be a number')
    }

    return true
  },
  'decreaseCountByOne': (value) => {
    if (typeof value !== 'number') {
      throw new Error('Value must be a number')
    }

    return true
  },
});

const increaseCount = () => {
  emit('increaseCountByOne', +1)
}

const decreaseCount = () => {
  // Below will fail because we are not passing a number
  // emit('increaseCountByOne', '-1')

  // we should pass a number to pass the event params validation
  emit('decreaseCountByOne', -1)
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