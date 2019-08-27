import Vue from 'vue'
import './plugins/axios'
import App from './App.vue'
import router from './router'
import store from './store'
import { Button,NavBar,Tabbar,TabbarItem,Swipe, SwipeItem,Lazyload,Grid, GridItem,
  Image,Row, Col,Icon,Search,Sidebar, SidebarItem,Field,CellGroup,Toast,Notify,Cell,Card,
  Tag,Panel,GoodsAction,GoodsActionIcon,GoodsActionButton,Sku,SubmitBar,Switch   } from 'vant';
import dayjs from 'dayjs'
import http from './http'

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
.use(Col)
.use(Icon)
.use(Search)
.use(Sidebar)
.use(SidebarItem)
.use(Field)
.use(CellGroup)
.use(Toast)
.use(Notify)
.use(Cell)
.use(Card)
.use(Tag)
.use(Panel)
.use(GoodsAction)
.use(GoodsActionButton)
.use(GoodsActionIcon)
.use(Sku)
.use(SubmitBar)
.use(Switch);

Vue.prototype.$http = http


Vue.filter('dateFomat',(val)=>{
  return dayjs(val).format('YY-MM-DD')
})

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
