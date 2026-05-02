<script setup>
import IfElseExample from './components/IfElseExample.vue'
import IfElseIfAndElse from './components/IfElseIfAndElse.vue'
import IfOnTemplate from './components/IfOnTemplate.vue'
import VShowExample from './components/VShowExample.vue'
</script>

<template>
  <h1>Conditional Rendering</h1>

  <div class="content">

    <div class="content">
      <div class="content">
        <h3>v-if:</h3>
        <p>The directive v-if is used to conditionally render a block. The block will only be rendered if the
          directive's
          expression returns a truthy value.</p>
      </div>

      <div class="content">
        <h3>v-else:</h3>
        <p>You can use the v-else directive to indicate an "else block" for v-if:</p>
      </div>

      <div class="content">
        <IfElseExample />
      </div>
    </div>

    <div class="content">
      <h3>v-else-if</h3>
      <p>The v-else-if, as the name suggests, serves as an "else if block" for v-if. It can also be chained multiple
        times:</p>
      <p>Similar to v-else, a v-else-if element must immediately follow a v-if or a v-else-if element.</p>

      <div class="content">
        <IfElseIfAndElse />
      </div>
    </div>

    <div class="content">
      <h3>v-if on template element</h3>
      <p>Because v-if is a directive, it has to be attached to a single element. But what if we want to toggle more than
        one element? In this case we can use v-if on a template element, which serves as an invisible wrapper. The
        final rendered result will not include the template element.</p>

      <IfOnTemplate />
    </div>

    <div class="content">
      <h3>v-show</h3>
      <p>Another option for conditionally displaying an element is the v-show directive. The usage is largely the same:
      </p>

      <p>The difference is that an element with v-show will always be rendered and remain in the DOM; v-show only
        toggles the display CSS property of the element.</p>

      <p> v-show doesn't support the template element, nor does it work with v-else.</p>

      <VShowExample />
    </div>


    <div class="content">
      <h3>v-show vs v-if</h3>
      <p>v-if is "real" conditional rendering because it ensures that event listeners and child components inside the
        conditional block are properly destroyed and re-created during toggles.</p>

      <p>v-if is also lazy: if the condition is false on initial render, it will not do anything - the conditional block
        won't be rendered until the condition becomes true for the first time.</p>

      <p> In comparison, v-show is much simpler - the element is always rendered regardless of initial condition, with
        CSS-based toggling.</p>

      <p>Generally speaking, v-if has higher toggle costs while v-show has higher initial render costs. So prefer v-show
        if you need to toggle something very often, and prefer v-if if the condition is unlikely to change at runtime.
      </p>
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
