import Vue from 'vue'
import App from './App.vue'
import router from './router'
import './plugins/element.js'
import '../src/sty.scss'
import dayjs from 'dayjs'
import VueParticles from 'vue-particles'  

Vue.use(VueParticles)  

Vue.config.productionTip = false

Vue.filter('dataFormat',(val)=>{
  return dayjs(val).format("YYYY年MM月DD日")
})

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
