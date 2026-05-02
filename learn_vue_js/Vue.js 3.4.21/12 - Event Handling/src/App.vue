<script setup>
import InlineHandlers from './components/InlineHandlers.vue'
import MethodHandler from './components/MethodHandler.vue'
import AccessEventArgument from './components/AccessEventArgument.vue'
import PreventModifier from '@/components/PreventModifier.vue'
</script>

<template>
  <h1>Listening to Events</h1>


  <div class="content">
    <p>We can use the v-on directive, which we typically shorten to the @ symbol, to listen to DOM events and run
      some JavaScript when they're triggered. The usage would be v-on:click="handler" or with the shortcut,
      @click="handler"</p>

    <p>The handler value can be one of the following...</p>

    <ul>
      <li><strong>Inline handlers:</strong>
        <p>Inline JavaScript to be executed when the event is triggered (similar to the native onclick attribute).
        </p>
      </li>
      <li>
        <strong>Method handlers:</strong>
        <p>A property name or path that points to a method defined on the component.</p>
      </li>
    </ul>
    <div class="content">
      <h3>Inline Handlers:</h3>
      <p>Inline handlers are typically used in simple cases, for example:</p>
      <InlineHandlers />
    </div>

    <div class="content">
      <h3>Method Handlers:</h3>
      <p>The logic for many event handlers will be more complex though, and likely isn't feasible with inline handlers.
        That's why v-on can also accept the name or path of a component method you'd like to call:</p>
      <MethodHandler />
    </div>

    <div class="content">
      <h3>Accessing Event Argument in Inline Handlers:</h3>
      <p>Sometimes we also need to access the original DOM event in an inline handler. You can pass it into a method
        using the special $event variable, or use an inline arrow function:</p>
      <AccessEventArgument />
    </div>

    <div class="content">
      <h3>Event Modifiers:</h3>
      <p>It is a very common need to call event.preventDefault() or event.stopPropagation() inside event handlers.
        Although we can do this easily inside methods, it would be better if the methods can be purely about data logic
        rather than having to deal with DOM event details.</p>

      <p>To address this problem, Vue provides event modifiers for v-on. Recall that modifiers are directive postfixes
        denoted by a dot.</p>

      <ul>
        <li>.stop</li>
        <li>.prevent</li>
        <li>.capture</li>
        <li>.self</li>
        <li>.once</li>
        <li>.passive</li>
      </ul>
      <PreventModifier />
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
