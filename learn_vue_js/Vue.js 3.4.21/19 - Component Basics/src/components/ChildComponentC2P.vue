<script setup>
import { ref, defineProps, defineEmits } from 'vue';

const childData = ref('Child Data');

defineProps({
  title: String,
  message: String
})

defineEmits(['updateTitle'])
</script>

<template>
  <div class="content">
    <h2>{{ title }}</h2>
    <p>{{ message }}</p>
    <button @click="$emit('updateTitle', childData)">Update Parent Component Title</button>
  </div>
</template>

<style scoped>
/* Add any component-specific styles here */
h2 {
  color: blue;
}
</style>