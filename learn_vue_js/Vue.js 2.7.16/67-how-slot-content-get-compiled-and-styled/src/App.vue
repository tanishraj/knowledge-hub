<template>
  <div id="app">
    <div class="container">
      <!-- If you wanna pass simple data like string or a number we can do it using props, but when we need to send HTML tags then we need to use slots -->
      <app-quote>
          <h3 class="my-0">A wonderful quote</h3>
          <p class="my-0">This is the quote content</p>
      </app-quote>
    </div>
  </div>
</template>

<script>
import quote from './components/quote.vue'

export default {
  name: 'app',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  },

  components:{
    'app-quote': quote
  }
}
</script>

<style scoped>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}

h1, h2 {
  font-weight: normal;
}

ul {
  list-style-type: none;
  padding: 0;
}

li {
  display: inline-block;
  margin: 0 10px;
}

a {
  color: #42b983;
}

h3{
  color: #ff0;
}
</style>
