<template>
  <div id="app">
    <div class="container">
      <div class="row">
        <div class="col-xs-12 col-sm-8 col-sm-offset-2 col-md-6 col-md-offset-3">
          <h1>Filters And Mixins</h1>
          <p>{{text | toUpperCase | toLowerCase}}</p>

          <br/><br/>
          <input type="text" v-model="filterText"/>
          <ul>
            <li v-for="fruit in filteredFruits" :key="fruit">{{fruit}}</li>
          </ul>

          <br/><br/>
          <app-list></app-list>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import List from './List.vue';
import  { fruitMixin } from './fruitMixin';

export default {
  name: 'app',
  data () {
    return {
      text: 'Welcome to Filters and Mixins',
    }
  },

  mixins: [fruitMixin],

  components: {
    appList : List
  }
}
</script>

<style>
</style>
