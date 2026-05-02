<script setup>
</script>

<template>
  <div class="child-container">
    <h1>Child Component</h1>
    <slot name="header"></slot>
    <slot></slot>
    <slot name="footer"></slot>
  </div>
</template>

<style scoped>
.child-container {
  border: 1px solid black;
  background: red;
  color: white;
  padding: 10px;
}
</style>