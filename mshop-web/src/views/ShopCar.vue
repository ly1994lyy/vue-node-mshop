<template>
  <div>
    <van-nav-bar fixed title="购物车" left-arrow>
      <van-icon name="ellipsis" slot="right" />
    </van-nav-bar>
    <div v-if="!user" class="login-container">
        <img src="//img11.360buyimg.com/jdphoto/s180x180_jfs/t18163/292/540553659/74408/adeb7463/5a93c51cN3bb5e37b.png" >
        <p>登录后可同步购物车中商品</p>
        <van-button class="login-button" @click="$router.push('/login')" plain hairline type="danger">登录</van-button>
    </div>
    <div v-else class="shopcar-container">已登录</div>
    <van-submit-bar
        :price="3050"
        button-text="提交订单"
        @submit="onSubmit"
    />
  </div>
</template>

<script>
export default {
    data() {
        return {
            ids: []
        }
    },
    methods: {
        getShopCar() {
            const shopcar = this.$store.state.shopcar
            var carList = []
            shopcar.map(item => {
                carList.push(item.goodsId)
            });
            this.ids = carList
            console.log(this.ids)
            const res = this.$http.get(`/shopcarlist/${this.ids}`)
        }
    },
    computed: {
        user() {
            return this.$store.state.user 
        },
    },
    created () {
        this.getShopCar();
    },
};
</script>

<style lang="scss" scoped>
.login-container{
    width: 100%;
    height: 375px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    background-color: #eee;
    img{
        width: 90px;
        height: 90px;
    }
    p{
        color: rgba(51,51,51,.66);
        font-size: 16px;
        margin: 10px 0;
    }
    .login-button{
        line-height: 30px;
        width: 60px;
        height: 30px;
    }
}

.shopcar-container{
    margin: 50px 0;
}
</style>