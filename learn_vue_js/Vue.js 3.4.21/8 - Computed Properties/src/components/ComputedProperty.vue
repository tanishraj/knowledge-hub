<script setup>
import { reactive, computed } from 'vue';

const author = reactive({
  name: 'John Doe',
  books: [
    'Vue 2 - Advanced Guide',
    'Vue 3 - Basic Guide',
    'Vue 4 - The Mystery'
  ]
})

const publishedBooksMessage = computed(() => {
  console.log("COMPUTED THE VALUE");
  return author.books.length > 0 ? 'Yes' : 'No'
})

function changeAuthorName() {
  author.name = "Tanish Raj"
}
</script>

<template>
  <div class="content">
    <p>Author Name: {{ author.name }}</p>
    <p>Has published books:</p>
    <span>{{ publishedBooksMessage }}</span>

    <div>
      <button @click="changeAuthorName">Change Author Name</button>
    </div>
  </div>
</template>

<style scoped></style>