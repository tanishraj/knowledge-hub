<script setup>
import { ref, onMounted } from 'vue';

const input = ref(null);

onMounted(() => {
  input.value.value = "Tanish"
});
</script>

<template>
  <div class="content">
    <input :ref="(el) => { input = el }" />
  </div>
</template>

<style scoped></style>