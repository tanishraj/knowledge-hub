import Vue from 'vue'
import App from './App.vue'

Vue.directive('highlight', {
  bind(el, binding, vnode){
    var delay = 0;
    if(binding.modifiers['delayed']) {
      delay = 3000;
    }

    if(binding.modifiers['blink']){
      let mainColor = binding.value.mainColor;
      let secondColor = binding.value.secondColor;
      let currentColor = mainColor;

      setTimeout(() => {
        setInterval(() => {
          currentColor == secondColor ? currentColor = mainColor : currentColor = secondColor
          if(binding.arg == 'background')
            el.style.background = currentColor;
          else
            el.style.color = currentColor;
        }, binding.value.delay)
      } ,delay)
    } else{
      setTimeout(() => {
        if(binding.arg == 'background')
          el.style.background = binding.value.mainColor;
        else
          el.style.color = binding.value.mainColor;
      } ,delay)
    }
  }
})

new Vue({
  el: '#app',
  render: h => h(App)
})
