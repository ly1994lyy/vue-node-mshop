<template>
  <div>
    <van-nav-bar fixed title="我的商城" left-arrow>
      <van-icon name="ellipsis" slot="right" />
    </van-nav-bar>
    <div class="user-top">
      <div class="user-avatar">
        <img src="https://img11.360buyimg.com/jdphoto/s120x120_jfs/t21160/90/706848746/2813/d1060df5/5b163ef9N4a3d7aa6.png" alt="">
      </div>
      <div class="user-username">{{user.username}}</div>
      <div class="user-logout" @click="logout"><van-icon name="setting-o" />退出登录</div>
    </div>
    <van-row class="user-links">
      <van-col span="6">
        <van-icon name="pending-payment" />待付款
      </van-col>
      <van-col span="6">
        <van-icon name="records" />待接单
      </van-col>
      <van-col span="6">
        <van-icon name="tosend" />待发货
      </van-col>
      <van-col span="6">
        <van-icon name="logistics" />已发货
      </van-col>
    </van-row>

    <van-cell-group class="user-group">
      <van-cell icon="records" title="全部订单" is-link />
    </van-cell-group>

    <van-cell-group>
      <van-cell icon="points" title="我的地址" is-link />
      <van-cell icon="gold-coin-o" title="我的收藏" is-link />
      <van-cell icon="gift-o" title="我的优惠券" is-link />
    </van-cell-group>
  </div>
</template>

<script>
export default {
  methods: {
    logout() {
      localStorage.removeItem('token')
      this.$store.commit('setLogOut',{})
      this.$notify({
        type:'success',
        message:'注销成功'
      });
      this.$router.push('/login')
    }
  },
  computed: {
    user() {
      return this.$store.state.user 
    }
  },
};
</script>

<style lang="scss" scoped>
.user-top{
  width: 100%;
  height: 134px;
  display: flex;
  border-bottom-right-radius:28%;
  border-bottom-left-radius: 28%;
  background-color: #fc6a54;
  .user-avatar{
    margin-top: 30px;
    margin-left: 25px;
    img{
      width: 60px;
      height: 60px;
    }
  }
  .user-username{
    margin-top: 30px;
    margin-left: 25px;
    color: #fff;
  }
  .user-logout{
    font-size: 13px;
    margin-left: 120px;
    margin-top: 10px;
  }
}
.user-group {
  margin-bottom: 15px;
}
.user-links {
  padding: 15px 0;
  font-size: 12px;
  text-align: center;
  background-color: #fff;
  .van-icon {
    display: block;
    font-size: 24px;
  }
}
</style>