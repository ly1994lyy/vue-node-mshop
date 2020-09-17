import Vue from "vue";
import Router from "vue-router";
import Main from "../src/views/Main.vue";
import Home from "../src/views/Home.vue";

Vue.use(Router);

export default new Router({
  mode: "history",
  base: process.env.BASE_URL,
  routes: [
    {
      path: "/",
      component: Main,
      children: [
        { path: "/", name: "homepage", component: Home },
        {
          path: "/category/list",
          name: "categorylist",
          component: ()=>import('./views/CategoryList.vue'),
        },
        {
          path: "/category/create",
          name: "categorycreate",
          component: ()=>import('./views/CategoryEdit.vue'),
        },
        {
          path: "/category/edit/:id",
          name: "categoryupdate",
          component: ()=>import('./views/CategoryEdit.vue'),
          props: true,
        },
        {
          path: "/itemcategory/list",
          name: "itemcategorylist",
          component: ()=>import('./views/ItemCateList.vue'),
        },
        {
          path: "/itemcategory/create",
          name: "itemcategorycreate",
          component: ()=>import('./views/ItemCateEdit.vue'),
        },
        {
          path: "/itemcategory/edit/:id",
          name: "itemcategoryupdate",
          component: ()=>import('./views/ItemCateEdit.vue'),
          props: true,
        },
        {
          path: "/secondcategory/list",
          name: "secondcategorylist",
          component: ()=>import('./views/SecondCateList.vue'),
        },
        {
          path: "/secondcategory/create",
          name: "secondcategorycreate",
          component: ()=>import('./views/SecondCateEdit.vue'),
        },
        {
          path: "/secondcategory/edit/:id",
          name: "secondcategoryupdate",
          component: ()=>import('./views/SecondCateEdit.vue'),
          props: true,
        },
        {
          path: "/rule/list",
          name: "rulelist",
          component: () => import("../src/components/Rule/RuleList.vue"),
        },
        {
          path: "/rule/create",
          name: "rulecreate",
          component: () => import("../src/components/Rule/RuleListCreate.vue"),
        },
        {
          path: "/rule/edit/:id",
          name: "ruleupdate",
          component: () => import("../src/components/Rule/RuleUpdate.vue"),
          props: true,
        },
        {
          path: "/ruleitem/list",
          name: "ruleitemlist",
          component: () => import("./views/RuleItemEdit.vue"),
        },
        {
          path: "/ruleitem/create",
          name: "ruleitemcreate",
          component: () => import("../src/components/Rule/RuleItemCreate.vue"),
        },
        {
          path: "/ruleitem/edit/:id",
          name: "ruleitemupdate",
          component: () => import("../src/components/Rule/RuleItemUpdate.vue"),
          props: true,
        },
        {
          path: "/shop/list",
          name: "shoplist",
          component: () => import("./views/ShopList.vue"),
        },
        {
          path: "/shop/create",
          name: "shopcreate",
          component: () => import("./views/ShopEdit.vue"),
        },
        {
          path: "/shop/edit/:id",
          name: "shopupdate",
          component: () => import("./views/ShopEdit.vue"),
          props: true,
        },
        {
          path: "/good/list",
          name: "goodlist",
          component: () => import("./views/GoodList.vue"),
        },
        {
          path: "/good/create",
          name: "goodcreate",
          component: () => import("./views/GoodEdit.vue"),
        },
        {
          path: "/good/edit/:id",
          name: "goodupdate",
          component: () => import("./views/GoodEdit.vue"),
          props: true,
        },
        {
          path: "/order/list",
          name: "orderlist",
          component: () => import("./components/Order/OrderList.vue"),
        },
      ],
    },
    {
      path:'/login',
      name:'Login',
      component:()=>import('./views/Login.vue')
    }
  ],
});
