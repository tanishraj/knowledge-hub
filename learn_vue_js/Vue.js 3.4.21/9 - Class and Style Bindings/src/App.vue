<script setup>
import BindingToObjects from '@/components/BindingToObjects.vue'
import BindingToArrays from './components/BindingToArrays.vue';
</script>

<template>
  <h1>Class and Style Bindings</h1>

  <div class="content">
    <h2>Binding HTML Classes:</h2>

    <div class="content">
      <h3>Binding to Objects:</h3>
      <p>We can pass an object to :class (short for v-bind:class) to dynamically toggle classes:</p>

      <BindingToObjects />
    </div>

    <div class="content">
      <h3>Binding to Arrays:</h3>
      <p>We can bind :class to an array to apply a list of classes:</p>
      <BindingToArrays />
      <p>Which will render:</p>
      {{ `
      <div class="active text-danger"></div>
      ` }}
    </div>
  </div>

</template>

<style scoped>
h1,
h2,
h3 {
  margin-bottom: 20px;
}

.content {
  padding: 1rem;
  border: 1px solid #eee;
  margin-bottom: 20px;
  margin-top: 20px;
}
</style>
