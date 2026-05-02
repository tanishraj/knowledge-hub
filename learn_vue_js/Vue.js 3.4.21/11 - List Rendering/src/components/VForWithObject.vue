<script setup>
const myObject = {
  property1: 'value1',
  property2: 'value2',
  property3: 'value3'
}
</script>

<template>
  <div class="content">
    <div>
      <ul>
        <li v-for="(item, index) in myObject" :key="index">{{ item }}</li>
      </ul>
    </div>
  </div>
</template>

<style scoped></style>