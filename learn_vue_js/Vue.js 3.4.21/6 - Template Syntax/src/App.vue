<script setup>
import { ref } from 'vue'
import ParentComponent from './components/ParentComponent.vue';

const msg = 'String Content'
const rawHtml = '<strong style="color: red">HTML content</strong>'
const dynamicId = 'demo-id'
const isButtonDisabled = true
const objectOfAttrs = {
  id: 'container',
  class: 'wrapper',
  style: 'background-color:green'
}

const number = 1
const ok = true
const message = 'I am a message'
const id = 1

const items = ref([
  { id: 1, name: 'Item 1' },
  { id: 2, name: 'Item 2' },
  { id: 3, name: 'Item 3' }
])
const showMessage = ref(false)
const type = ref(['A', 'B'])
const count = ref(0)

const handleShowMessageClick = () => {
  showMessage.value = !showMessage.value

  if (count.value === 2) {
    count.value = 0
  } else {
    count.value++
  }
}
</script>

<template>
  <h1>Template Syntax</h1>

  <div class="content">
    <h3>Text Interpolation</h3>
    <span>Message: {{ msg }}</span>
  </div>

  <div class="content">
    <h3>Raw HTML</h3>
    <p>Using text interpolation: {{ rawHtml }}</p>
    <p>Using v-html directive: <span v-html="rawHtml"></span></p>
  </div>

  <div class="content">
    <h3>Attribute Bindings</h3>
    <div v-bind:id="dynamicId">Using v-bind:id - {{ dynamicId }}</div>
    <div :id="dynamicId">Using shorthand :id - {{ dynamicId }}</div>
  </div>

  <div class="content">
    <h3>Boolean Attributes</h3>
    <p>Using :disabled - <button :disabled="isButtonDisabled">Button</button></p>
    <p>Using v-bind:disabled - <button v-bind:disabled="isButtonDisabled">Button</button></p>
  </div>

  <div class="content">
    <h3>Dynamically Binding Multiple Attributes</h3>
    <div v-bind="objectOfAttrs">{{ objectOfAttrs }}</div>
  </div>

  <div class="content">
    <h3>Using JavaScript Expressions</h3>
    <div> {{ number + 1 }}</div>
    <div> {{ ok ? 'YES' : 'NO' }}</div>
    <div> {{ message.split('').reverse().join('') }}</div>

    <div :id="`list-${id}`">{{ `list-${id}` }}</div>
  </div>

  <div class="content">
    <h3>Expressions Only</h3>
    <div>
      this is a statement, not an expression:
      {{ `var a = 1` }}
    </div>
    <div>
      flow control won't work either, use ternary expressions
      {{ `if (ok) { return message }` }}
    </div>
  </div>

  <div class="content">
    <h3>Directives</h3>
    <ul>
      <li>v-for</li>
      <li>v-if</li>
      <li>v-else</li>
      <li>v-else-if</li>
      <li>v-bind</li>
      <li>v-on</li>
      <li>v-pre</li>
      <li>v-slot</li>
      <li>v-once</li>
    </ul>

    <div class="content">
      <h3>v-for</h3>
      <ul>
        <li v-for="item in items" :key="item.id">{{ item.name }}</li>
      </ul>
    </div>

    <div class="content">
      <h3>v-if</h3>
      <div v-if="showMessage">{{ message }}</div>
      <button v-on:click="handleShowMessageClick">{{ showMessage ? 'Hide' : 'Show' }} Message</button>
    </div>

    <div class="content">
      <h3>v-if / v-else-if / v-else</h3>
      <h1 v-if="type[count] === 'A'">This is type A</h1>
      <h1 v-else-if="type[count] === 'B'">This is type B</h1>
      <h1 v-else>This is some other type</h1>

      <button v-on:click="handleShowMessageClick">Click to Show Other Messages</button>
    </div>

    <div class="content">
      <h3>v-slot</h3>
      <p>In Vue.js, the v-slot directive is used to define and use named slots. A named slot allows you to pass content
        to a component from the parent component.</p>
      <ParentComponent />
    </div>
  </div>
</template>

<style scoped></style>
