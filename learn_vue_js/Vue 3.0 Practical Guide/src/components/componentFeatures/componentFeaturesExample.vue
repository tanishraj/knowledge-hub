<script setup>
import { ref } from "vue";

// declaring an state variable
const name = ref("Sachin");

// declaring all my methods
function changeName() {
  name.value = "Tanish";
}
</script>

<template>
  <div class="app-example">
    <!-- String interpolation (binding) -->
    <p>My name is: {{ name }}</p>

    <!-- Event Calling a function on button click -->
    <button @click="changeName">Change Name</button>
  </div>
</template>



// Writing my styles here
<style lang="scss" scoped></style>
