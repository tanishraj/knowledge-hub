<script setup>
import { ref } from 'vue';
import ChildComponent1 from './ChildComponent1.vue';

const parentData = ref('')

const receiveDataFromChild = (data) => {
  parentData.value = data
}
</script>

<template>
  <div class="content">
    <h3>Parent Component</h3>
    <p>Data will be displayed here: <span>{{ parentData || 'No data' }}</span></p>
    <button @click="$emit('send-data-to-root', 'Hello From Parent Component !!!')">Click to send data to Root
      Component</button>
    <ChildComponent1 @send-data-to-parent="receiveDataFromChild" />
  </div>
</template>

<style scoped>
.content {
  background-color: rgb(70, 229, 221);
  color: rgb(0, 0, 0);
}

span {
  color: red;
}
</style>