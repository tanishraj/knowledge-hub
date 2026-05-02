<script setup>
const { todoItem } = defineProps(['todoItem']);
defineEmits(['removeTodo']);
</script>

<template>
  <li class="todo">
    <span style="flex:1">{{ todoItem.id }}</span>
    <span style="flex: 3">{{ todoItem.title }}</span>
    <span style="flex:1">{{ todoItem.completed }}</span>
    <button @click="$emit('removeTodo', todoItem.id)" style="flex:1; text-align: center;">Remove</button>
  </li>
</template>

<style scoped>
.todo {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 10px;
  border: 1px solid #ccc;
  padding: 8px 10px;
  font-size: 14px;
}

.todo:not(first-child) {
  border-bottom: 0;
}

.todo:last-child {
  border-bottom: 1px solid #ccc;
}

.todo span {
  font-weight: 500;
}
</style>