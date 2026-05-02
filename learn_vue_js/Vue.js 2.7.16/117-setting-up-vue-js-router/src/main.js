import Vue from 'vue'
import vueRouter from 'vue-router'
import App from './App.vue'
import { routes } from './routes'

Vue.use(vueRouter)

const router = new vueRouter({
  routes: routes,
  mode: 'history'
})

new Vue({
  el: '#app',
  router: router,
  render: h => h(App)
})
