<script setup>
import RefExampleComponent from '@/components/RefExampleComponent.vue';
import RefExampleComplexObject from '@/components/RefExampleComplexObject.vue';
import ReactiveExampleComplexObject from '@/components/ReactiveExampleComplexObject.vue'
</script>

<template>
  <h1>Reactivity Fundamentals</h1>

  <div class="content">
    <h2>Declaring Reactive State</h2>

    <div class="content">
      <h3>ref() Example with primitive data:</h3>
      <RefExampleComponent />
    </div>

    <div class="content">
      <h3>ref() Example with complex object data:</h3>
      <RefExampleComplexObject />
    </div>

    <div class="content">
      <h3>reactive() Example with complex object data:</h3>
      <ReactiveExampleComplexObject />
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
}
</style>
