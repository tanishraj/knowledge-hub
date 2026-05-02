<script setup>
import { ref, onMounted } from 'vue';

const inputs = ref([]);

onMounted(() => {
  inputs.value[0].value = "Tanish";
});
</script>

<template>
  <div class="content">
    <div v-for="i in 5" :key="i">
      <input ref="inputs" placeholder="Enter Name" />
    </div>
  </div>
</template>

<style scoped></style>