<template>
  <div class="container">
    <div class="row">
      <div class="col-xs-12 col-sm-8 col-sm-offset-2 col-md-6 col-md-offset-3">
        <h1>Animations</h1>
        <hr>
        <select v-model="animateMessage" class="form-control">
          <option value="" selected>Select Animation</option>
          <option value="animated bounce">Bounce</option>
          <option value="animated shake">Shake</option>
        </select>
        <br/>
        <button class="btn btn-primary" @click="show = !show">Show Alert</button>
        <br>
        <br>
        <!-- appear attribute can be use to implement on load animation -->
        <transition 
          appear=""
          :enter-active-class="animateMessage"
          :leave-active-class="animateMessage">
        <div class="alert alert-info" v-if="show">This is some info.</div>
        </transition>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data(){
    return {
      show: false,
      animateMessage:''
    }
  }
}
</script>

<style>

</style>