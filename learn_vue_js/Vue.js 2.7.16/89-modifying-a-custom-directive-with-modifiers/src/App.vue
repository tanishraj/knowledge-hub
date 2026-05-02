<template>
  <div class="container">
    <div class="row">
      <div class="col-xs-12 col-sm8 col-sm-offset-2 col-md-6 col-md-offset-3">
        <h1>Bulit-in Directives</h1>
        <p v-text="'Hello, I am a builtin directive.'"></p>
        <p v-html="'<strong>Hello,</strong> I am a builtin directive.'"></p>
      </div>
    </div>
    <hr/>
    <div class="row">
      <div class="col-xs-12 col-sm8 col-sm-offset-2 col-md-6 col-md-offset-3">
        <h1>Custom Directives</h1>
        <p v-hightlight:background.delayed="'Green'">Color This Text</p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  
}
</script>

<style>

</style>
