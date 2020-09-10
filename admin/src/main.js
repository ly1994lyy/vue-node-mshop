import Vue from 'vue'
import App from './App.vue'
import router from './router'
import './plugins/element.js'
import http from './utils/http'
import '../src/sty.scss'
import dayjs from 'dayjs'

Vue.config.productionTip = false

Vue.filter('dataFormat',(val)=>{
  return dayjs(val).format("YYYY年MM月DD日")
})

Vue.prototype.$http = http
new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
