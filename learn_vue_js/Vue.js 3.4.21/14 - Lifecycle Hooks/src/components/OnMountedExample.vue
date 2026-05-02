<script setup>
import { reactive, onMounted } from 'vue';

const posts = reactive([]);

onMounted(() => {
  fetch('https://jsonplaceholder.typicode.com/posts')
    .then(response => response.json())
    .then(data => {
      posts.push(...data);
    });
});
</script>

<template>
  <h3>OnMounted() Example:</h3>

  <div v-for="(post, index) in posts" :key="post.id">
    <div v-if="index < 5" class="content">
      <h4>{{ post.title }}</h4>
      <p>{{ post.body }}</p>
    </div>
  </div>
</template>

<style scoped></style>