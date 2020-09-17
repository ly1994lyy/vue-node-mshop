import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import './plugins/vant'
import dayjs from 'dayjs'
import '../src/sty.scss'

Vue.config.productionTip = false

Vue.filter('dateFomat',(val)=>{
  return dayjs(val).format('YY-MM-DD')
})

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
