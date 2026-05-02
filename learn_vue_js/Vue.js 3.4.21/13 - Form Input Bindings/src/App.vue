<script setup>
import ManualValueBinding from './components/ManualValueBinding.vue'
import VModelExample from './components/VModelExample.vue'
import MultiLineText from './components/MultiLineText.vue'
import CheckBoxExample from './components/CheckBoxExample.vue'
import RadioInputExample from './components/RadioInputExample.vue'
import SelectInputExample from './components/SelectInputExample.vue'
import MultipleSelectInputExample from './components/MultipleSelectInputExample.vue'
import LazyModifier from './components/LazyModifier.vue'
import NumberModifier from './components/NumberModifier.vue'
</script>

<template>
  <h1>Form Input Bindings</h1>

  <div class="content">
    <p>When dealing with forms on the frontend, we often need to sync the state of form input elements with
      corresponding state in JavaScript. It can be cumbersome to manually wire up value bindings and change event
      listeners:</p>

    <div class="content">
      <h3>Manual Value Binding:</h3>
      <ManualValueBinding />
    </div>

    <div class="content">
      <h3>Value Binding using v-model:</h3>
      <VModelExample />
    </div>

    <div class="content">
      <h3>Multiline text:</h3>
      <MultiLineText />
    </div>

    <div class="content">
      <h3>Checkbox:</h3>
      <CheckBoxExample />
    </div>

    <div class="content">
      <h3>Radio:</h3>
      <RadioInputExample />
    </div>

    <div class="content">
      <h3>Select:</h3>
      <SelectInputExample />
    </div>

    <div class="content">
      <h3>Multiple Select:</h3>
      <MultipleSelectInputExample />
    </div>

    <div class="content">
      <h3>Modifiers:</h3>
      <div class="content">
        <h3>.lazy modifier:</h3>
        <p>By default, v-model syncs the input with the data after each input event (with the exception of IME
          composition as stated above). You can add the lazy modifier to instead sync after change events:</p>
        <LazyModifier />
      </div>

      <div class="content">
        <h3>.number modifier:</h3>
        <p>If you want user input to be automatically typecast as a number, you can add the number modifier to your
          v-model managed inputs:</p>
        <NumberModifier />
      </div>
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
