<template>
  <div id="app">
    <div class="container">
      <div class="row">
        <div class="col-xs-12">
          <h1>Routing</h1>
          <hr>
          <app-header></app-header>
          <router-view></router-view>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Header from './components/header.vue';

export default {
  name: 'app',
  data () {
    return {
      
    }
  },

  components:{
    'appHeader': Header
  }
}
</script>

<style>
</style>
