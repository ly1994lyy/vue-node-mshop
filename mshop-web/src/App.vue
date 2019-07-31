<template>
  <div id="app" class="app-container">
    <!-- 顶部 -->
    <van-nav-bar
      fixed
      title="Vue移动商城"
    />
    <!-- 中间路由 -->
    <transition>
      <router-view></router-view>
    </transition> 
    <!-- 底部 -->
    <van-tabbar route>
      <van-tabbar-item
        replace
        to="/home"
        icon="wap-home"
      >
        首页
      </van-tabbar-item>
      <van-tabbar-item
        replace
        to="/member"
        icon="manager-o"
      >
        会员
      </van-tabbar-item>
      <van-tabbar-item
        replace
        to="/shopcat"
        icon="shopping-cart-o"
      >
        购物车
      </van-tabbar-item>
      <van-tabbar-item
        replace
        to="/search"
        icon="search"
      >
        搜索
      </van-tabbar-item>
    </van-tabbar>
  </div>
</template>

<script>
export default {
  methods: {
    onClickLeft() {
      Toast('返回');
    }
  }
}
</script>


<style lang="scss">
.app-container{
  padding-top: 46px;
  padding-bottom: 50px;
  overflow-x: hidden;
  .van-nav-bar{
    background-color: #eee;
  }
}
.v-enter{
  opacity: 0;
  transform: translateX(100%);
}
.v-leave-to{
  opacity: 0;
  transform: translateX(-100%);
  position: absolute;
}
.v-enter-active,
.v-leave-active{
  transition: all 0.5s ease;
}
</style>