<script setup>
import Code from "@/common/Code.vue";
</script>

<template>
  <h1>Vue 3.0 Introdcution:</h1>
  <p>
    Vue (pronounced /vjuː/, like view) is a JavaScript framework for building user interfaces. It builds on top of
    standard HTML, CSS, and JavaScript and provides a declarative, component-based programming model that helps you
    efficiently develop user interfaces of any complexity.
  </p>

  <Code>
{{ ` 
import { createApp, ref } from 'vue'
createApp({
  setup() {
    return {
      count: ref(0)
    }
  }
}).mount('#app')
    `}}
   
  </Code>

  <Code>
{{ ` 
<div id="app">
  <button @click="count++">
    Count is: { count }
  </button>
</div>
`}}
   
  </Code>
</template>

<style lang="scss" scoped></style>
