<script setup>
</script>

<template>
  <h1>Component Registration</h1>
  <p>A Vue component needs to be "registered" so that Vue knows where to locate its implementation when it is
    encountered in a template. There are two ways to register components: global and local.</p>

  <div class="content">
    <h3>Global Registration:</h3>
    <p>We can make components available globally in the current Vue application using the .component() method:</p>

    <div class="content">
      <p style="color: fuchsia">Below component is registered globally so need to import the component in this
        file...</p>
      <FirstGlobalComponent />
      <SecondGlobalComponent />
      <ThirdGlobalComponent />
    </div>

    <h3>Disadvantage of Global Registration:</h3>
    <ul>
      <li>Global registration prevents build systems from removing unused components (a.k.a "tree-shaking"). If you
        globally register a component but end up not using it anywhere in your app, it will still be included in the
        final bundle.</li>
      <li>Global registration makes dependency relationships less explicit in large applications. It makes it difficult
        to locate a child component's implementation from a parent component using it. This can affect long-term
        maintainability similar to using too many global variables.</li>
    </ul>

  </div>
</template>

<style scoped></style>