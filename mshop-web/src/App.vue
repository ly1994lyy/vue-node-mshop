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
      >
        <img slot="icon" slot-scope="props" :src="props.active ? icon.homeActive : icon.homeNormal">
      </van-tabbar-item>
      <van-tabbar-item
        replace
        to="/category"
      >
        <img slot="icon" slot-scope="props" :src="props.active ? icon.categoryActive : icon.categoryNormal">
      </van-tabbar-item>
      <van-tabbar-item
        replace
        to="/shopcat"
      >
        <img slot="icon" slot-scope="props" :src="props.active ? icon.shopCatNormal : icon.shopCatNormal">
      </van-tabbar-item>
      <van-tabbar-item
        replace
        to="/user"
      >
        <img slot="icon" slot-scope="props" :src="props.active ? icon.userNormal : icon.userNormal">
      </van-tabbar-item>
    </van-tabbar>
  </div>
</template>

<script>
export default {
  data() {
    return {
      icon: {
        homeNormal:'https://m.360buyimg.com/mobilecms/jfs/t18526/211/696109898/3876/a61be82c/5aa10cd2N1318ac50.png',
        homeActive:'https://m.360buyimg.com/mobilecms/jfs/t15145/137/2502885754/3106/de5e0b14/5aa10cd2N46f18ce6.png',
        categoryNormal:'https://m.360buyimg.com/mobilecms/jfs/t19183/49/696491919/3763/dec8cceb/5aa10cdbNa9cd0320.png',
        categoryActive:'https://img11.360buyimg.com/jdphoto/s130x100_jfs/t1/33669/19/3432/3731/5cb48c9cEb2f5593b/060ffe532d67562b.png',
        shopCatNormal:'https://m.360buyimg.com/mobilecms/jfs/t18583/69/717127328/4407/5e47882b/5aa10ceaN649eec12.png',
        shopCatActive:'https://m.360buyimg.com/mobilecms/jfs/t18583/69/717127328/4407/5e47882b/5aa10ceaN649eec12.png',
        userNormal:'https://m.360buyimg.com/mobilecms/jfs/t17782/11/2358895717/4684/ad19de7f/5af43af1N04ef5a16.png'
      },
    }
  },
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
  .van-tabbar-item__icon{
    img{
      width: 60px;
      height: 46px;
    }
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