<script setup>
import { reactive, onMounted, ref, watch } from 'vue';

const usersList = reactive([]);
const searchKeyword = ref('');
const filteredList = ref([]);
const loading = ref(true)

watch(searchKeyword, (newKeyword, oldKeyword) => {
  console.log("SOMETHING IS HAPPENEING")
  filteredList.value = usersList.filter(user =>
    user.name.toLowerCase().includes(newKeyword.toLowerCase())
  )
})

onMounted(() => {
  fetch('https://jsonplaceholder.typicode.com/users')
    .then(response => response.json())
    .then(data => {
      usersList.push(...data);
      filteredList.value.push(...data);
    }).catch(error => {
      console.log(error)
    })
    .finally(() => {
      loading.value = false
    })
})
</script>

<template>
  <div class="content">
    <h3>Users List</h3>
    <input type="text" v-model="searchKeyword" placeholder="Search by name" />
    <p v-if="loading">Loading...</p>
    <ul v-if="filteredList.length">
      <li v-for="user in filteredList">{{ user.name }}</li>
    </ul>
    <p v-else>No results found</p>
  </div>
</template>