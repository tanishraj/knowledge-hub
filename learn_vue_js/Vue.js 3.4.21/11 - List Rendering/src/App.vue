<script setup>
import VForExample from './components/VForExample.vue'
import VForWithObject from './components/VForWithObject.vue'
import VForWithRange from './components/VForWithRange.vue'
import VForOnTemplate from './components/VForOnTemplate.vue'
import VForWithVIfExample from './components/VForWithVIfExample.vue'
</script>

<template>
  <h1>List Rendering</h1>

  <div class="content">

    <div class="content">
      <div class="content">
        <h3>v-for:</h3>
        <p>We can use the v-for directive to render a list of items based on an array. The v-for directive requires a
          special syntax in the form of item in items, where items is the source data array and item is an alias for the
          array element being iterated on:</p>
      </div>
      <VForExample />
    </div>

    <div class="content">
      <div class="content">
        <h3>v-for with Object:</h3>
        <p>You can also use v-for to iterate through the properties of an object. The iteration order will be based on
          the result of calling Object.keys() on the object:</p>
      </div>
      <VForWithObject />
    </div>

    <div class="content">
      <div class="content">
        <h3>v-for with a Range:</h3>
        <p>v-for can also take an integer. In this case it will repeat the template that many times, based on a range of
          1...n.</p>
      </div>
      <VForWithRange />
    </div>

    <div class="content">
      <div class="content">
        <h3>v-for on template:</h3>
        <p>Similar to template v-if, you can also use a template tag with v-for to render a block of multiple
          elements. For example:</p>
      </div>
      <VForOnTemplate />
    </div>


    <div class="content">
      <div class="content">
        <h3>v-for with v-if</h3>
        <p>When they exist on the same node, v-if has a higher priority than v-for. That means the v-if condition will
          not have access to variables from the scope of the v-for</p>
      </div>
      <VForWithVIfExample />
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
