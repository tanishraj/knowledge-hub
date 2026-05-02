<script setup>
import { RouterLink } from 'vue-router'
</script>

<template>
  <div class="content-wrapper">
    <nav class="nav-container">
      <ul>
        <li><RouterLink to="/">Home</RouterLink></li>
        <li><RouterLink to="/about">About</RouterLink></li>
      </ul>
    </nav>
  </div>
</template>

<style scoped>
.nav-container {
  display: flex;
  justify-content: flex-start;
  align-items: flex-start;
  flex-direction: column;
  gap: 0.5rem;
  padding: 1rem;
  max-width: 1280px;
  margin: 0 auto;
  padding: 0 1rem;
}
</style>
