<script setup>

const submit = () => {
  alert('Form submitted!')
}

const parentClick = () => {
  alert('Parent clicked')
}

const grandChildClick = () => {
  alert('Grand Child clicked')
}

const childClick = () => {
  alert('Child clicked')
}

const clickOnce = () => {
  alert('Clicked once')
}
</script>

<template>
  <div class="content">
    <h3>@click.prevent</h3>
    <p>Prevents the default action of the event. </p>
    <form>
      <label for="name">Name: <input type="text" id="name"></label>
      <label for="email">Email: <input type="email" id="email"></label>
      <button type="submit" @click.prevent="submit">Submit</button>
    </form>
  </div>

  <div class="content">
    <h3>@click.stop</h3>
    <p>Prevents the event from bubbling.</p>
    <div class="parent" @click="parentClick">
      Parent (Click Me)
      <div class="child" @click="childClick">
        Child (Click Me)
        <div class="grand-child" @click.stop="grandChildClick">Grand Child (Click Me)</div>
      </div>
    </div>
  </div>

  <div class="content">
    <h3>@click.capture</h3>
    <p>Captures the event in the DOM tree.</p>
    <div class="parent" @click.capture="parentClick">
      Parent (Click Me)
      <div class="child" @click="childClick">
        Child (Click Me)
        <div class="grand-child" @click="grandChildClick">Grand Child (Click Me)</div>
      </div>
    </div>
  </div>

  <div class="content">
    <h3>@click.once</h3>
    <p>Executes the handler only once.</p>
    <button @click.once="clickOnce">
      Click Me to execute only once
    </button>
  </div>
</template>

<style scoped>
.parent {
  background: lightblue;
  padding: 20px;
}

.child {
  background: lightgreen;
  padding: 20px;
}

.grand-child {
  background: lightcoral;
  padding: 20px;
}
</style>