import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import { Button,NavBar,Tabbar,TabbarItem,Swipe, SwipeItem,Lazyload,Grid, GridItem,
  Image,Row, Col} from 'vant';
import dayjs from 'dayjs'

Vue.config.productionTip = false
import '../src/sty.scss'

Vue.use(Button)
.use(NavBar)
.use(Tabbar)
.use(TabbarItem)
.use(Swipe)
.use(SwipeItem)
.use(Lazyload)
.use(Grid)
.use(GridItem)
.use(Image)
.use(Row)
.use(Col);

Vue.filter('dateFomat',(val)=>{
  return dayjs(val).format('YY-MM-DD')
})

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
