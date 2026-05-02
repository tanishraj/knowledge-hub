<script setup>
import { ref, reactive, onUpdated } from 'vue';

const newTodo = ref('');
const todos = reactive([
  { id: 1, text: 'Learn Vue 3' },
  { id: 2, text: 'Build a Todo App' },
]);
const newTodoInput = ref(null);

const addTodo = () => {
  if (newTodo.value.trim()) {
    todos.push({ id: Date.now(), text: newTodo.value.trim() });
    newTodo.value = '';
  }
};

const removeTodo = (id) => {
  const index = todos.findIndex(todo => todo.id === id);
  if (index !== -1) {
    todos.splice(index, 1);
  }
};

onUpdated(() => {
  if (newTodoInput.value) {
    newTodoInput.value.focus();
    console.log('DOM has been updated. Input element is focused.');
  }
});
</script>

<template>
  <h3>OnUpdated() Example:</h3>

  <div class="content">
    <h1>Todo List</h1>
    <input ref="newTodoInput" v-model="newTodo" placeholder="Add a new todo" />
    <button @click="addTodo">Add</button>
    <ul>
      <li v-for="todo in todos" :key="todo.id">
        {{ todo.text }}
        <button @click="removeTodo(todo.id)">Remove</button>
      </li>
    </ul>
  </div>
</template>

<style scoped></style>