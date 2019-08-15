import Vue from 'vue'
import Router from 'vue-router'
import Main from '../src/views/Main'

Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'vhome',
      redirect:'/home',
      component:Main,
      children:[
        {
          path: '/home',
          name: 'home',
          component:()=>import('./views/Home.vue')
        },
        {
          path:'/category',
          name:'category',
          component:()=>import('./components/Category.vue')
        },
        {
          path:'/shopcat',
          name:'shopcat',
          component:()=>import('./components/tabbar/ShopcatContainer.vue')
        },
        {
          path:'/userinfo',
          name:'userinfo',
          component:()=>import('./components/UserInfo.vue')
        },
      ]
    },
    {
      path: '/login',
      name: 'login',
      component:()=>import('./views/Login.vue')
    },
    {
      path: '/register',
      name: 'register',
      component:()=>import('./views/Register.vue')
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
