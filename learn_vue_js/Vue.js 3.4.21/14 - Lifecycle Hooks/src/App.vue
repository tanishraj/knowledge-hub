<script setup>
import OnBeforeMountExample from './components/OnBeforeMountExample.vue'
import OnBeforeUpdateExample from './components/OnBeforeUpdateExample.vue'
import OnUnmountedExample from './components/OnUnmountedExample.vue'
import OnBeforeUnmountExample from './components/OnBeforeUnmountExample.vue'
import OnUpdatedExample from './components/OnUpdatedExample.vue'
import OnMountedExample from './components/OnMountedExample.vue'
import OnErrorCapturedExample from './components/onErrorCapturedExample.vue'
</script>

<template>
  <h1>Lifecycle Hooks</h1>

  <p>Each Vue component instance goes through a series of initialization steps when it's created - for example, it needs
    to set up data observation, compile the template, mount the instance to the DOM, and update the DOM when data
    changes. Along the way, it also runs functions called lifecycle hooks, giving users the opportunity to add their own
    code at specific stages.</p>

  <div class="content">
    <h3>Registering Lifecycle Hooks:</h3>
    <p>For example, the onMounted hook can be used to run code after the component has finished the initial rendering
      and created the DOM nodes:</p>

    <div class="content">
      <h3>onBeforeMount():</h3>
      <p>Registers a hook to be called right before the component is to be mounted.</p>
      <p>When this hook is called, the component has finished setting up its reactive state, but no DOM nodes have been
        created yet. It is about to execute its DOM render effect for the first time.</p>

      <p>The onBeforeMount lifecycle hook in Vue 3.0 is used to perform actions right before a component is mounted.
        This means it is called after the component’s instance is initialized but before the DOM is rendered.</p>
      <p>While onBeforeMount is available for use, it’s less commonly used for tasks like API calls, as these are
        typically performed in onMounted where the DOM is guaranteed to be ready. However, there are specific scenarios
        where onBeforeMount might be useful:</p>
      <ul>
        <li><strong>Pre-mount Initialization:</strong> Perform any setup that needs to be done before the DOM is
          rendered but after the component instance is initialized.</li>
        <li><strong>Logging or Debugging:</strong> Log messages for debugging purposes to see when the component is
          about to be
          mounted.</li>
        <li><strong>Setting Component State:</strong> Initialize or modify the component’s reactive state before it is
          rendered.
        </li>

      </ul>
      <div class="content">
        <OnBeforeMountExample />
      </div>

      <div class="content">
        <h3>onMounted():</h3>
        <p>Registers a callback to be called after the component has been mounted.</p>

        <p>In Vue.js, the most appropriate lifecycle hook for making API calls is generally onMounted. This hook is
          called after the component has been mounted, meaning the component’s template is already rendered into the
          DOM, but before the mounted hook completes. By using onMounted, you ensure that the component is fully
          rendered and ready to display the data fetched from the API.</p>
        <div class="content">
          <OnMountedExample />
        </div>
      </div>

      <div class="content">
        <h3>onBeforeUpdate():</h3>
        <p>Registers a hook to be called right before the component is about to update its DOM tree due to a reactive
          state change.
        </p>
        <p>This hook can be used to access the DOM state before Vue updates the DOM. It is also safe to modify component
          state inside this hook.</p>
        <div class="content">
          <OnBeforeUpdateExample />
        </div>
      </div>

      <div class="content">
        <h3>onUpdated():</h3>
        <p>Registers a callback to be called after the component has updated its DOM tree due to a reactive state
          change.
        </p>
        <p>A parent component's updated hook is called after that of its child components.</p>
        <p>This hook is called after any DOM update of the component, which can be caused by different state changes,
          because multiple state changes can be batched into a single render cycle for performance reasons. If you need
          to access the updated DOM after a specific state change, use nextTick() instead.</p>
        <div class="content">
          <OnUpdatedExample />
        </div>
      </div>

      <div class="content">
        <h3>onBeforeUnmount():</h3>
        <p>Registers a hook to be called right before a component instance is to be unmounted.
        </p>
        <p>When this hook is called, the component instance is still fully functional.</p>
        <div class="content">
          <OnBeforeUnmountExample />
        </div>
      </div>

      <div class="content">
        <h3>onUnmounted():</h3>
        <p>Registers a callback to be called after the component has been unmounted.
        </p>
        <p>A component is considered unmounted after:
        <ul>
          <li>All of its child components have been unmounted.</li>
          <li>All of its associated reactive effects (render effect and computed / watchers created during setup()) have
            been stopped.</li>
        </ul>
        </p>
        <p>Use this hook to clean up manually created side effects such as timers, DOM event listeners or server
          connections.</p>
        <div class="content">
          <OnUnmountedExample />
        </div>
      </div>

      <div class="content">
        <h3>onErrorCaptured():</h3>
        <p>Registers a hook to be called when an error propagating from a descendant component has been captured.
        </p>
        <p>Errors can be captured from the following sources:
        <ul>
          <li>Component renders</li>
          <li>Event handlers</li>
          <li>Lifecycle hooks</li>
          <li>setup() function</li>
          <li>Watchers</li>
          <li>Custom directive hooks</li>
          <li>Transition hooks</li>
        </ul>
        </p>
        <p>The hook receives three arguments: the error, the component instance that triggered the error, and an
          information string specifying the error source type.</p>
        <div class="content">
          <onErrorCapturedExample />
        </div>
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
