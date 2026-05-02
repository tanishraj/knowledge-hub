<script setup>
import { reactive } from 'vue';

const author = reactive({
  name: 'John Doe',
  books: [
    'Vue 2 - Advanced Guide',
    'Vue 3 - Basic Guide',
    'Vue 4 - The Mystery'
  ]
})

function calculateBooksMessage() {
  console.log("FUNCTION EXPRESSION FOR COMPUTATION IS BEING CALLED")
  return author.books.length > 0 ? 'Yes' : 'No'
}

function changeAuthorName() {
  author.name = "Tanish Raj"
}
</script>

<template>
  <div class="content">
    <p>Author Name: {{ author.name }}</p>
    <p>Has published books:</p>
    <span>{{ calculateBooksMessage() }}</span>
    <div>
      <button @click="changeAuthorName">Change Author Name</button>
    </div>
  </div>
</template>
