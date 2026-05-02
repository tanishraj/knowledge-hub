import { createApp, ref } from 'https://unpkg.com/vue@3/dist/vue.esm-browser.js'

const vueApp = createApp({
  setup() {
    const message = ref('Hello Vue, Again!!')
    return {
      message
    }
  }
})
vueApp.mount('#app')
