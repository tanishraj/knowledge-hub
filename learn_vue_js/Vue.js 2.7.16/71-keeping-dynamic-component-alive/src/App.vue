<template>
  <div id="app">
    <div class="container">
      <button @click="selectedComponent = 'app-quote'" class="btn btn-primary">Quote</button>
      <button @click="selectedComponent = 'app-author'" class="btn btn-primary">Author</button>
      <button @click="selectedComponent = 'app-publisher'" class="btn btn-primary">Publisher</button>
      <br/><br/>
      <!-- Keep alive is reserve keywork which keeps our components alive -->
      <keep-alive>
        <component :is="selectedComponent">
          <h3>{{quoteTitle}}</h3>
          <p>This is a beautiful quote.</p>
        </component>
      </keep-alive>
  
      <!-- If you wanna pass simple data like string or a number we can do it using props, but when we need to send HTML tags then we need to use slots -->
      <!-- <app-quote>
            <h3 class="my-0" slot="title">{{quoteTitle}}</h3>
            <p class="my-0">This is the quote content</p>
        </app-quote> -->
    </div>
  </div>
</template>

<script>
  import quote from './components/quote.vue'
  import author from './components/author.vue'
  import publisher from './components/publisher.vue'
  
  export default {
    name: 'app',
    data() {
      return {
        quoteTitle: 'A wonderful quote',
        selectedComponent: 'app-quote'
      }
    },
  
    components: {
      'app-quote': quote,
      'app-author': author,
      'app-publisher': publisher
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
  
  h1,
  h2 {
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
  
  h3 {
    color: #ff0;
  }
</style>
