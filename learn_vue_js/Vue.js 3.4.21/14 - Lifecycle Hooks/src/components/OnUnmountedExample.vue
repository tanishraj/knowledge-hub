<script setup>
import { ref, onMounted, onUnmounted } from 'vue';

const seconds = ref(0);
let timer;

const updateTimer = () => {
  seconds.value++;
};

onMounted(() => {
  timer = setInterval(updateTimer, 1000);
});

onUnmounted(() => {
  clearInterval(timer);
});
</script>

<template>
  <h3>OnUnmounted() Example:</h3>

  <div class="content">
    <h1>Timer</h1>
    <p>Seconds: {{ seconds }}</p>
  </div>
</template>

<style scoped></style>