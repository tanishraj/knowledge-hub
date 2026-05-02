<script setup>
// component logic here
import ChildComponentProps from './ChildComponentProps.vue';

</script>

<template>
  <!-- html here -->
  <h2>Passing Props from Parent To Child:</h2>
  <div class="content">
    <h3>Parent Component</h3>
    <ChildComponentProps title="Hello from Parent" message="This is a message passed from the parent component." />
  </div>
</template>

<style scoped>
/* Define you component level styles here */
</style>