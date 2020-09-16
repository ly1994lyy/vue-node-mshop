import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import './plugins/vant'
import dayjs from 'dayjs'

Vue.config.productionTip = false
import '../src/sty.scss'


Vue.filter('dateFomat',(val)=>{
  return dayjs(val).format('YY-MM-DD')
})

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
