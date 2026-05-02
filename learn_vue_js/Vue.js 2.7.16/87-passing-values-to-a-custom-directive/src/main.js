import Vue from 'vue'
import App from './App.vue'

Vue.directive('hightlight', {
  bind(el, binding, vnode){
    el.style.background = binding.value;
  }
})

new Vue({
  el: '#app',
  render: h => h(App)
})
