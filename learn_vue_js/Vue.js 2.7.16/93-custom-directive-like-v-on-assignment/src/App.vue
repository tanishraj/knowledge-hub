<template>
  <div class="container">
    <div class="row">
      <div class="col-xs-12 col-sm8 col-sm-offset-2 col-md-6 col-md-offset-3">
        <h1>Bulit-in Directives</h1>
        <p v-text="'Hello, I am a builtin directive.'"></p>
        <p v-html="'<strong>Hello,</strong> I am a builtin directive.'"></p>
      </div>
    </div>
    <hr>
    <div class="row">
      <div class="col-xs-12 col-sm8 col-sm-offset-2 col-md-6 col-md-offset-3">
        <h1>Custom Directives (v-myOn)</h1>
        <button class="btn btn-primary" v-customOn:click="clicked">Click on this text</button>
        <br/><br/>
        <div style="height: 100px; width: 100px; background: #f00;" v-customOn:mouseenter="mouseEnter" v-customOn:mouseleave="mouseLeave"></div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  directives:{
    customOn: {
      bind(el, binding){
        // el.onclick = function(){
        //   binding.value();
        // }
        const eventType = binding.arg;
        const fn = binding.value;
        el.addEventListener(eventType, fn)
      }
    }
  },

  methods: {
    clicked(){
      alert("I was clicked");
    },
    mouseEnter(){
      console.log("Mouse Entered.");
    },
    mouseLeave(){
      console.log("Mouse Leaved.");
    }
  }
};
</script>

<style>
</style>
