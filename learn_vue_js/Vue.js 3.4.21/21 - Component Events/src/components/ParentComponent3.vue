<script setup>
import { ref } from 'vue';
import ChildComponent3 from './ChildComponent3.vue';

const count = ref(0)

const updateCount = (value) => {
  count.value += value;
}
</script>

<template>
  <div class="content">
    <h3>Parent Component</h3>
    <h3>Count: <span>{{ count }}</span></h3>
    <ChildComponent3 @increaseCountByOne="updateCount" @decreaseCountByOne="updateCount" />
  </div>
</template>

<style scoped>
.content {
  background-color: rgb(70, 229, 221);
  color: rgb(0, 0, 0);
}

span {
  color: red;
  font-size: 1.5rem;
}
</style>