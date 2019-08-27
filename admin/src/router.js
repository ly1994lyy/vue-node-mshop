import Vue from 'vue'
import Router from 'vue-router'
import Main from '../src/views/Main.vue'
import Home from '../src/views/Home.vue'
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
      path:'/',
      component:Main,
      children:[
        {path:'/',name:'homepage',component:Home},
        {path:'/category/list',name:'categorylist',component:CategoryList},
        {path:'/category/create',name:'categorycreate',component:CategoryCreate},
        {path:'/category/edit/:id',name:'categoryupdate',component:CategoryUpdate,props:true},
        {path:'/itemcategory/list',name:'itemcategorylist',component:ItemCategoryList},
        {path:'/itemcategory/create',name:'itemcategorycreate',component:ItemCategoryCreate},
        {path:'/itemcategory/edit/:id',name:'itemcategoryupdate',component:ItemCategoryUpdate,props:true},
        {path:'/secondcategory/list',name:'secondcategorylist',component:SecondCategoyList},
        {path:'/secondcategory/create',name:'secondcategorycreate',component:SecondCategoyCreate},
        {path:'/secondcategory/edit/:id',name:'secondcategoryupdate',component:SecondCategoyUpdate,props:true},
        {path:'/rule/list',name:'rulelist',component:()=>import('../src/components/Rule/RuleList.vue')},
        {path:'/rule/create',name:'rulecreate',component:()=>import('../src/components/Rule/RuleListCreate.vue')},
        {path:'/rule/edit/:id',name:'ruleupdate',component:()=>import('../src/components/Rule/RuleUpdate.vue'),props:true},
        {path:'/ruleitem/list',name:'ruleitemlist',component:()=>import('../src/components/Rule/RuleItemList.vue')},
        {path:'/ruleitem/create',name:'ruleitemcreate',component:()=>import('../src/components/Rule/RuleItemCreate.vue')},
        {path:'/ruleitem/edit/:id',name:'ruleitemupdate',component:()=>import('../src/components/Rule/RuleItemUpdate.vue'),props:true},
        {path:'/shop/list',name:'shoplist',component:()=>import('../src/components/Shop/ShopList.vue')},
        {path:'/shop/create',name:'shopcreate',component:()=>import('../src/components/Shop/ShopCreate.vue')},
        {path:'/shop/edit/:id',name:'shopupdate',component:()=>import('../src/components/Shop/ShopUpdate.vue'),props:true},
        {path:'/good/list',name:'goodlist',component:()=>import('../src/components/Good/GoodList.vue')},
        {path:'/good/create',name:'goodcreate',component:()=>import('../src/components/Good/GoodCreate.vue')},
        {path:'/good/edit/:id',name:'goodupdate',component:()=>import('../src/components/Good/GoodUpdate.vue'),props:true},
        {path:'/order/list',name:'orderlist',component:()=>import('./components/Order/OrderList.vue')}
      ]
    },
  ]
})
