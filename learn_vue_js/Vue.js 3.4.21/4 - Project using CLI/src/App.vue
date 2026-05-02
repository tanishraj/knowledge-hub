<script setup>
import { RouterView } from 'vue-router'
</script>

<template>
  <header>
    <div class="header-wrapper">
      <div class="header-container">
        <img alt="Vue logo" class="logo" src="@/assets/logo.svg" />
        <h1 class="title">Learn Vue 3.0 with practical examples</h1>
      </div>
    </div>
  </header>

  <RouterView />
</template>

<style scoped>
.header-wrapper {
  background: #151331;
}

.header-container {
  display: flex;
  justify-content: center;
  text-align: center;
  align-items: center;
  gap: 1rem;
  padding: 1rem;
  max-width: 1280px;
  margin: 0 auto;
}

.logo {
  width: 40px;
  height: 40px;
}

.title {
  color: white;
}
</style>
