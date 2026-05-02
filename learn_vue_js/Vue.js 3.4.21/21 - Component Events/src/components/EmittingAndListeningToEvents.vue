<script setup>
import { ref } from 'vue';
import ParentComponent1 from './ParentComponent1.vue';

const rootData = ref('')

const receiveDataFromChild = (data) => {
  rootData.value = data
}
</script>

<template>
  <div class="content">
    <h3>Root Component:</h3>
    <p>Data will be displayed here: <span>{{ rootData || 'No data' }}</span></p>
    <ParentComponent1 @send-data-to-root="receiveDataFromChild" />
  </div>
</template>

<style scoped>
span {
  color: red;
}
</style>