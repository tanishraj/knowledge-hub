<template>
  <div id="app">
    <div class="container">
      <div class="row">
        <div class="col-xs-12 col-sm-8 col-sm-offset-2 col-md-6 col-md-offset-3">
          <h1>Filters And Mixins</h1>
          <p>{{text | toUpperCase | toLowerCase}}</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'app',
  data () {
    return {
      text: 'Welcome to Filters and Mixins'
    }
  },

  filters: {
    toUpperCase(value){
      return value.toUpperCase();
    }
  }
}
</script>

<style>
</style>
