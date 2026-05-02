<script setup>
import { reactive } from 'vue';
import ChildComponent from './ChildComponent.vue';

const slotProps = reactive({
  message: "Hello From Parent Component"
})
</script>

<template>
  <div class="parent-container">
    <h1>Parent Component</h1>
    <ChildComponent>
      <template v-slot:header="slotProps">
        <p>THIS IS SLOT MESSAGE COMING FROM PARENT COMPONENT.</p>
        <p>{{ slotProps.message }}</p>
      </template>
      <p>THIS CONTENT IS FOR DEFAULT SLOT</p>
      <template #footer>THIS IS A FOOTER CONTENT FOR CHILD COMPONENT</template>
    </ChildComponent>
  </div>
</template>

<style scoped>
.parent-container {
  border: 1px solid black;
  background: green;
  padding: 10px;
}
</style>