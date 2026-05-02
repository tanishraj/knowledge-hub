<script setup>
import { ref, onMounted, onBeforeUnmount } from 'vue';

const width = ref(window.innerWidth);
const height = ref(window.innerHeight);

const updateSize = () => {
  width.value = window.innerWidth;
  height.value = window.innerHeight;
};

onMounted(() => {
  window.addEventListener('resize', updateSize);
});

onBeforeUnmount(() => {
  window.removeEventListener('resize', updateSize);
});
</script>

<template>
  <h3>OnBeforeUnmount() Example:</h3>

  <div class="content">
    <h1>Window Size</h1>
    <p>Width: {{ width }}</p>
    <p>Height: {{ height }}</p>
  </div>
</template>

<style scoped></style>