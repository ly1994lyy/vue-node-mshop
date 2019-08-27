<template>
  <div class="app-container">
    <!-- 中间路由 -->
    <transition>
      <router-view></router-view>
    </transition> 
    <!-- 底部 -->
    <van-tabbar route fixed>
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
        :info=shopCarInfo
        replace
        to="/shopcar"
      >
        <img slot="icon" slot-scope="props" :src="props.active ? icon.shopCatNormal : icon.shopCatNormal">
      </van-tabbar-item>
      <van-tabbar-item
        replace
        v-if="!user"
        to="/login"
      >
        <img slot="icon" slot-scope="props" :src="props.active ? icon.noLogin : icon.noLogin">
      </van-tabbar-item>
      <van-tabbar-item
        replace
        v-else
        to="/userinfo"
      >
        <img slot="icon" slot-scope="props" :src="props.active ? icon.userActive : icon.userNormal">
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
        noLogin:'https://m.360buyimg.com/mobilecms/jfs/t17782/11/2358895717/4684/ad19de7f/5af43af1N04ef5a16.png',
        userActive:'https://m.360buyimg.com/mobilecms/jfs/t18598/41/712219415/3756/7828621f/5aa10cf6Nbfbdc1af.png',
        userNormal:'https://m.360buyimg.com/mobilecms/jfs/t16849/271/702371255/4462/d55edd83/5aa10cf6Nee5122a5.png'
      },
    }
  },
  computed: {
    user() {
      return this.$store.state.user 
    },
    shopCarInfo() {
      return this.$store.state.shopcar.length
    }
  },
  methods: {
    onClickLeft() {
      Toast('返回');
    }
  }
}
</script>


<style lang="scss" scoped>
.app-container{
  padding-top: 45px;
  padding-bottom: 50px;
  overflow-x: hidden;
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