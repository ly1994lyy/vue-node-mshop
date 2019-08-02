import Vue from 'vue'
import Router from 'vue-router'
import Main from '../src/views/Main.vue'
import ItemCategoryList from '../src/components/Category/ItemCategoryList.vue'
import ItemCategoryCreate from '../src/components/Category/ItemCategoryCreate.vue'
import ItemCategoryUpdate from '../src/components/Category/ItemCategoryUpdate.vue'
import CategoryList from '../src/components/Category/CategoryList.vue'
import CategoryCreate from '../src/components/Category/CategoryCreate.vue'
import CategoryUpdate from '../src/components/Category/CategoryUpdate.vue'
import SecondCategoyList from '../src/components/Category/SecondCategoyList.vue'
import SecondCategoyCreate from '../src/components/Category/SecondCategoyCreate.vue'
import SecondCategoyUpdate from '../src/components/Category/SecondCategoyUpdate.vue'

Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'home',
      redirect:'/admin'
    },
    {
      path:'/admin',
      name:'main',
      component:Main,
      children:[
        {path:'/category/list',name:'categorylist',component:CategoryList},
        {path:'/category/create',name:'categorycreate',component:CategoryCreate},
        {path:'/category/edit/:id',name:'categoryupdate',component:CategoryUpdate,props:true},
        {path:'/itemcategory/list',name:'itemcategorylist',component:ItemCategoryList},
        {path:'/itemcategory/create',name:'itemcategorycreate',component:ItemCategoryCreate},
        {path:'/itemcategory/edit/:id',name:'itemcategoryupdate',component:ItemCategoryUpdate,props:true},
        {path:'/secondcategory/list',name:'secondcategorylist',component:SecondCategoyList},
        {path:'/secondcategory/create',name:'secondcategorycreate',component:SecondCategoyCreate},
        {path:'/secondcategory/edit/:id',name:'secondcategoryupdate',component:SecondCategoyUpdate,props:true},
      ]
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
