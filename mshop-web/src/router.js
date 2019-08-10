import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'vhome',
      redirect:'/home',
    },
    {
      path:'/category',
      name:'category',
      component:()=>import('./components/Category.vue')
    },
    {
      path:'/home/newlist',
      name:'newlist',
      component:()=>import('./components/news/NewsList.vue')
    },
    {
      path:'/member',
      name:'member',
      component:()=>import('./components/tabbar/MemberContainer.vue')
    },
    {
      path:'/shopcat',
      name:'shopcat',
      component:()=>import('./components/tabbar/ShopcatContainer.vue')
    },
    {
      path:'/search',
      name:'search',
      component:()=>import('./components/tabbar/SearchContainer.vue')
    },
    {
      path: '/about',
      name: 'about',
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import(/* webpackChunkName: "about" */ './views/About.vue')
    }
  ]
})
