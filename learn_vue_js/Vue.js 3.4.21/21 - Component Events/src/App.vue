<script setup>
import EmittingAndListeningToEvents from './components/EmittingAndListeningToEvents.vue';
import DeclaringEmittedEvents from './components/DeclaringEmittedEvents.vue';
import EventValidation from './components/EventValidation.vue';
</script>

<template>
  <h1>Component Events</h1>

  <div class="content">
    <h3>Emitting and Listening to Events:</h3>
    <p>A component can emit custom events directly in template expressions (e.g. in a v-on handler) using the built-in
      $emit method:</p>
    <EmittingAndListeningToEvents />
  </div>

  <div class="content">
    <h3>Declaring Emitted Events:</h3>
    <p>A component can explicitly declare the events it will emit using the defineEmits() macro:</p>
    <DeclaringEmittedEvents />
  </div>

  <div class="content">
    <h3>Events Validation:</h3>
    <p>A component can explicitly declare the events it will emit using the defineEmits() macro:</p>
    <EventValidation />
  </div>
</template>

<style scoped></style>