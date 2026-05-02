<script setup>
</script>

<template>
  <div class="content">
    <div>
      <ul>
        <li v-for="i in 10" :key="i">{{ i }}</li>
      </ul>
    </div>
  </div>
</template>

<style scoped></style>