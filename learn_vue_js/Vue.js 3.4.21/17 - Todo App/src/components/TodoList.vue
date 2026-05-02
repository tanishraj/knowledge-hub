<script setup>
import { computed, watchEffect } from 'vue';
import TodoItem from './TodoItem.vue';
const { todoList } = defineProps(['todoList']);

defineEmits(['removeTodo']);
</script>

<template>
  <div>
    <ul v-if="todoList && todoList.length" class="todo-list">
      <TodoItem v-for="todo in todoList" :key="todo.id" :todoItem="todo" @removeTodo="$emit('removeTodo', $event)" />
    </ul>
    <p v-else>No todos</p>
  </div>
</template>

<style scoped>
.todo-list {
  list-style: none;
  padding: 0;
  margin: 0;
}
</style>