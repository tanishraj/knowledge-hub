<script setup>
import { ref } from 'vue'

const showMessage = ref(false)
const type = ref(['A', 'B', 'C'])
const count = ref(0)

const handleShowMessageClick = () => {
  showMessage.value = !showMessage.value

  if (count.value === 2) {
    count.value = 0
  } else {
    count.value++
  }
}

</script>

<template>
  <h3>v-if / v-else-if / v-else</h3>
  <h1 v-if="type[count] === 'A'">A</h1>
  <h1 v-else-if="type[count] === 'B'">B</h1>
  <h1 v-else-if="type[count] === 'C'">C</h1>
  <h1 v-else>Not A/B/C</h1>

  <button v-on:click="handleShowMessageClick">Click me to show {{ type[count === 2 ? 0 : count + 1] }}</button>
</template>

<style scoped></style>