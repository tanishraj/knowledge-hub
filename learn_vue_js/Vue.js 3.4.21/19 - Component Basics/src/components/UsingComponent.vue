<script>
// component logic here
import ChildComponent from './ChildComponent.vue';

export default {
  name: 'UsingComponent',
  components: {
    ChildComponent
  }
}
</script>

<template>
  <!-- html here -->
  <div class="content">
    <h3>Using a Component</h3>
    <p>Calling ChildComponent here...</p>
    <ChildComponent />
  </div>
</template>

<style scoped>
/* Define you component level styles here */
</style>