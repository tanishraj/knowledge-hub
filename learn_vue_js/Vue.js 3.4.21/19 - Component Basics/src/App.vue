<script setup>
import SimpleComposableComponent from './components/SimpleComposableComponent.vue';
import SimpleJavascriptComponent from './components/SimpleJavascriptComponent.vue';
import UsingComponent from './components/UsingComponent.vue';
import PassingPropsExample from './components/PassingPropsExample.vue';
import ChildToParentExample from './components/ChildToParentExample.vue';
</script>

<template>
  <h1>Component Basics</h1>
  <p>Components allow us to split the UI into independent and reusable pieces, and think about each piece in isolation.
    It's common for an app to be organized into a tree of nested components:</p>

  <p>This is very similar to how we nest native HTML elements, but Vue implements its own component model that allows us
    to encapsulate custom content and logic in each component. Vue also plays nicely with native Web Components. If you
    are curious about the relationship between Vue Components and native Web Components</p>

  <SimpleComposableComponent />

  <p>When not using a build step, a Vue component can be defined as a plain JavaScript object containing Vue-specific
    options:</p>

  <SimpleJavascriptComponent />

  <div class="content">
    <h3>Using a Component:</h3>
    <p>To use a child component, we need to import it in the parent component. Assuming we placed our counter component
      inside a file called ButtonCounter.vue, the component will be exposed as the file's default export:</p>

    <UsingComponent />
  </div>

  <div class="content">
    <h3>Passing Props:</h3>
    <p>
      Passing props is a fundamental concept in Vue.js that allows a parent component to pass data to a child component.
      Let's go through an example where we pass a prop from a parent component to a child component.
    </p>

    <p>Props are custom attributes you can register on a component. To pass a title to our blog post component, we must
      declare it in the list of props this component accepts, using the `defineProps` macro</p>

    <PassingPropsExample />
    <ChildToParentExample />
  </div>

</template>

<style scoped></style>