<script setup>
// import { ref } from 'vue'

// const name = ref('');

const logValue = (event) => {
  console.log(event.target.value);
}

</script>

<template>
  <div class="content">
    <label for="name">
      <input type="text" id="name" @input="logValue" placeholder="Enter your name">
    </label>

    <label for="email">
      <input type="text" id="email" @input="($event) => console.log($event.target.value)"
        placeholder="Enter your email">
    </label>

    <label for="message">
      <input type="text" id="message" @input="($event) => console.log($event.target.value)"
        placeholder="Enter your message">
    </label>
  </div>
</template>

<style scoped></style>