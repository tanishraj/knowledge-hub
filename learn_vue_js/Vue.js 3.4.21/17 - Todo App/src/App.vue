<script setup>
import TodoForm from './components/TodoForm.vue';
import TodoList from './components/TodoList.vue';
</script>

<template>
  <div class="app-container">
    <h1 class="title">Todo App</h1>
    <TodoForm />
  </div>
</template>

<style scoped>
.app-container {
  max-width: 600px;
  margin: 0 auto;
  background-color: #eee;
  padding: 20px;
}

.title {
  text-align: center;
  margin: 0 0 20px;
  color: black
}
</style>