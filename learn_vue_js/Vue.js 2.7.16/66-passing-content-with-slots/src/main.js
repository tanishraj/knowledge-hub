import Vue from 'vue'
import App from './App.vue'
import quote from './components/quote.vue'

Vue.component('app-quote', quote)

new Vue({
  el: '#app',
  render: h => h(App)
})
