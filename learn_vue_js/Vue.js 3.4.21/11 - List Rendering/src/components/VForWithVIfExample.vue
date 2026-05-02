<script setup>

const items = [
  { id: 1, name: 'Item 1', isVisible: true },
  { id: 2, name: 'Item 2', isVisible: false },
  { id: 3, name: 'Item 3', isVisible: true },
]
</script>

<template>
  <div class="content">
    <div v-for="item in items" :key="item.id">
      <div v-if="item.isVisible">
        {{ item.name }}
      </div>
    </div>
  </div>
</template>

<style scoped></style>