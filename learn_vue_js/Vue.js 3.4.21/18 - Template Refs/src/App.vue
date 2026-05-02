<script setup>
import AccessRefsExample from './components/AccessRefsExample.vue'
import AccessRefsWithVForExample from './components/AccessRefsWithVForExample.vue'
import FunctionRefsExample from './components/FunctionRefsExample.vue'
import RefOnComponentExample from './components/RefOnComponentExample.vue'
</script>

<template>
  <h1>Template Refs</h1>
  <p>While Vue's declarative rendering model abstracts away most of the direct DOM operations for you, there may still
    be cases where we need direct access to the underlying DOM elements. To achieve this, we can use the special ref
    attribute:</p>

  <p>
    <strong>Syntax:</strong>
    {{ `<input ref="input">` }}
  </p>

  <p>ref is a special attribute, similar to the key attribute discussed in the v-for chapter. It allows us to obtain a
    direct reference to a specific DOM element or child component instance after it's mounted. This may be useful when
    you want to, for example, programmatically focus an input on component mount, or initialize a 3rd party library on
    an element.</p>

  <div class="content">
    <h3>Accessing the Refs:</h3>
    <p>To obtain the reference with Composition API, we need to declare a ref with a name that matches the template ref
      attribute's value:</p>

    <AccessRefsExample />
  </div>

  <div class="content">
    <h3>Refs inside v-for:</h3>
    <p>When ref is used inside v-for, the corresponding ref should contain an Array value, which will be populated with
      the elements after mount:</p>

    <AccessRefsWithVForExample />
  </div>

  <div class="content">
    <h3>Function Refs:</h3>
    <p>Instead of a string key, the ref attribute can also be bound to a function, which will be called on each
      component update and gives you full flexibility on where to store the element reference. The function receives the
      element reference as the first argument:</p>

    <FunctionRefsExample />
  </div>

  <div class="content">
    <h3>Ref on Component:</h3>
    <p>ref can also be used on a child component. In this case the reference will be that of a component instance:</p>
    <p>If the child component is using Options API or not using
      `script setup`, the referenced instance will be identical to the child component's this, which means the parent
      component will have full access to every property and method of the child component. This makes it easy to create
      tightly coupled implementation details between the parent and the child, so component refs should be only used
      when absolutely needed - in most cases, you should try to implement parent / child interactions using the standard
      props and emit interfaces first.</p>
    <RefOnComponentExample />
  </div>
</template>

<style scoped></style>