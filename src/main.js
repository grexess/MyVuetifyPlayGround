import Vue from 'vue'
import App from './App.vue'
import router from './router'
import vuetify from './plugins/vuetify'

Object.defineProperty(Vue.prototype, '$imagehost', {
  value: 'https://werace-d.b4a.app/assets/',
})

new Vue({
  vuetify,
  router,
  render: h => h(App),
}).$mount('#app')
