<script setup>
// component logic here
import { ref } from 'vue';
import ChildComponentC2P from './ChildComponentC2P.vue';

const parentTitle = ref('');

const updateTitle = (title) => {
  console.log("HELLO PARENT")
  parentTitle.value = title;
}
</script>

<template>
  <!-- html here -->
  <h2>Passing Props from Child To Parent:</h2>
  <div class="content">
    <h3>Parent Component</h3>
    <p>Data to come from child component: {{ parentTitle }}</p>
    <ChildComponentC2P title="Hello from Parent" message="This is a message passed from the parent component."
      @updateTitle="updateTitle" />
  </div>
</template>

<style scoped>
/* Define you component level styles here */
</style>