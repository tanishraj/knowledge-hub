import Vue from 'vue'
import App from './App.vue'

Vue.directive('hightlight', {
  bind(el, binding, vnode){
    if(binding.arg == 'background')
      el.style.background = binding.value;
    else
      el.style.color = binding.value;
  }
})

new Vue({
  el: '#app',
  render: h => h(App)
})
