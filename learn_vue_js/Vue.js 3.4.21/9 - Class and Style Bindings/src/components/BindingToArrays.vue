<script setup>
import { ref } from 'vue';

const activeClass = ref('active')
const errorClass = ref('text-danger')
</script>

<template>
  <div :class="[activeClass, errorClass]">Binding Classes to Array</div>
</template>

<style scoped>
.active {
  background: #eee;
  border: 2px solid #000;
  color: white;
  padding: 5px;
}

.text-danger {
  background: red;
}
</style>