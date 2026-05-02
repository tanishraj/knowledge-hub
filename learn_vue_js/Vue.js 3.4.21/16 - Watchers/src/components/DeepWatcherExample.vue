<script setup>
import { ref, reactive, watch } from 'vue'

const user = reactive({
  name: "Tanish",
  address: {
    city: "Bhopal"
  }
})
const message = ref("")

// ISSUE: This will throw warning in console. And watch wont be executed.
// watch(user.address.city, () => {
//   message.value = "City changed."
// })

// SOLUTION 1: instead we can use value level watcher
// watch(() => user.address.city, () => {
//   message.value = "City changed."
// })

// SOLUTION 2: Or we can use deep watcher
watch(user, () => {
  message.value = "City changed."
}, {
  deep: true
})


function updateCityName() {
  user.address.city = "Indore"
}

</script>

<template>
  <div class="content">
    <ul>
      <li v-for="key in Object.keys(user)">{{ key }}: {{ user[key] }}</li>
    </ul>
    <p>{{ message }}</p>
    <button @click="updateCityName">Update City Name</button>
  </div>
</template>

<style scoped></style>