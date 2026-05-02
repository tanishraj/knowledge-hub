<template>
  <div id="app">
      <div class="row">
        <div class="col-xs-12">
          <h1>Filters And Mixins</h1>
          <input type="text" v-model="filterText"/>
          <ul>
            <li v-for="fruit in filteredFruits" :key="fruit">{{fruit}}</li>
          </ul>
        </div>
    </div>
  </div>
</template>

<script>
import  { fruitMixin } from './fruitMixin';

export default {
  name: 'app',
  
  mixins: [fruitMixin],
}
</script>

<style>
</style>
