<script setup>
import { reactive, ref } from 'vue';
import Button from '../common/Button.vue';
import Input from '../common/Input.vue';
import TodoList from './TodoList.vue';

const todoTitle = ref('Default Todo Title')
const todoList = reactive([{
  id: 1,
  title: "Todo 1",
  completed: false
},
{
  id: 2,
  title: "Todo 2",
  completed: true
},
{
  id: 3,
  title: "Todo 3",
  completed: false
}]);

const clickHandler = () => {
  const newTodoId = todoList.length + 1;
  const newTodo = {
    id: newTodoId,
    title: todoTitle.value,
    completed: false
  }
  todoList.push(newTodo);
}

const removeTodo = (todoId) => {
  todoList.splice(todoList.findIndex(todo => todo.id === todoId), 1);
}
</script>

<template>
  <div>
    <div class="form-control">
      <Input style="flex: 3" v-model="todoTitle" />
      <Button label="Add" @onClick="clickHandler" />
    </div>

    <TodoList :todoList="todoList" @removeTodo="removeTodo" />
  </div>
</template>

<style scoped>
.form-control {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 10px;
  margin-bottom: 20px;
}
</style>