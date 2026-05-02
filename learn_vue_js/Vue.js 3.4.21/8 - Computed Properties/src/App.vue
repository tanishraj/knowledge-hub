<script setup>
import InTemplateExpressions from '@/components/InTemplateExpressions.vue'
import ComputedProperty from '@/components/ComputedProperty.vue'
import UsingFunctionExpression from "@/components/UsingFunctionExpression.vue"
</script>

<template>
  <h1>Computed Properties</h1>

  <div class="content">
    <h3>Using Expressions in Template:</h3>
    <p>In-template expressions are very convenient, but they are meant for simple operations. Putting too much logic in
      your templates can make them bloated and hard to maintain.</p>

    <InTemplateExpressions />

    <p>At this point, the template is getting a bit cluttered. We have to look at it for a second before realizing that
      it performs a calculation depending on author.books. More importantly, we probably don't want to repeat ourselves
      if we need to include this calculation in the template more than once.</p>
  </div>

  <div class="content">
    <h3>Using computed Property:</h3>
    <p>That's why for complex logic that includes reactive data, it is recommended to use a computed property. Here's
      the same example, refactored:</p>

    <ComputedProperty />

    <p>Here we have declared a computed property publishedBooksMessage. The computed() function expects to be passed a
      getter function, and the returned value is a computed ref. Similar to normal refs, you can access the computed
      result as publishedBooksMessage.value. Computed refs are also auto-unwrapped in templates so you can reference
      them without .value in template expressions.</p>
  </div>

  <div class="content">
    <h3>Using function expression:</h3>
    <p>We can also use function expression to compute the value:</p>

    <UsingFunctionExpression />
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
