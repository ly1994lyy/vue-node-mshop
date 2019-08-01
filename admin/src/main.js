import Vue from 'vue'
import './plugins/axios'
import App from './App.vue'
import router from './router'
import './plugins/element.js'
import http from './http'
import '../src/sty.scss'

Vue.config.productionTip = false

Vue.prototype.$http = http
new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
