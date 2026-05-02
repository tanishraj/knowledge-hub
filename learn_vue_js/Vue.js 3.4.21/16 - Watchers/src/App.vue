<script setup>
import WatchExample from './components/WatchExample.vue';
import DeepWatcherExample from './components/DeepWatcherExample.vue';
import EagerWatcherExample from './components/EagerWatcherExample.vue'
import WatchEffectExample from './components/WatchEffectExample.vue';
</script>

<template>
  <h1>Watchers</h1>
  <p>Computed properties allow us to declaratively compute derived values. However, there are cases where we need to
    perform "side effects" in reaction to state changes - for example, mutating the DOM, or changing another piece of
    state based on the result of an async operation.</p>

  <p>With Composition API, we can use the watch function to trigger a callback whenever a piece of reactive state
    changes:</p>

  <div class="content">
    <h3>watch():</h3>
    <p>The watch function in Vue 3 is used to observe and react to changes in reactive data properties or computed
      properties. It is particularly useful for performing side effects when a data property changes.</p>

    <WatchExample />
  </div>

  <div class="content">
    <h3>Deep Watchers:</h3>
    <p>When you call watch() directly on a reactive object, it will implicitly create a deep watcher - the callback will
      be triggered on all nested mutations:</p>

    <DeepWatcherExample />
  </div>

  <div class="content">
    <h3>Eager Watchers:</h3>
    <p>watch is lazy by default: the callback won't be called until the watched source has changed. But in some cases we
      may want the same callback logic to be run eagerly - for example, we may want to fetch some initial data, and then
      re-fetch the data whenever relevant state changes.</p>

    <EagerWatcherExample />
  </div>


  <div class="content">
    <h3>watchEffect():</h3>
    <p>It is common for the watcher callback to use exactly the same reactive state as the source. For example, consider
      the following code, which uses a watcher to load a remote resource whenever the todoId ref changes:</p>

    <WatchEffectExample />
  </div>
</template>

<style scoped></style>