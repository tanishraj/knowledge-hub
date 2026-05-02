<script setup>
// Todo: Look into this example
import { ref } from 'vue';
import ChildComponent from './ChildComponent.vue';

const childComp = ref(null);

const focusChildInput = () => {
  if (childComp.value) {
    childComp.value.focusInput();
  }
};

</script>

<template>
  <div class="content">
    <h3>Parent Component</h3>
    <ChildComponent ref="childComp" />
    <button @click="focusChildInput">Focus Child Input</button>
  </div>
</template>

<style scoped></style>