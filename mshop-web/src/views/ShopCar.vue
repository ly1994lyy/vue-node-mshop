<template>
  <div>
    <van-nav-bar fixed title="购物车" left-arrow>
      <van-icon name="ellipsis" slot="right" />
    </van-nav-bar>
    <div v-if="!user" class="login-container">
      <img
        src="//img11.360buyimg.com/jdphoto/s180x180_jfs/t18163/292/540553659/74408/adeb7463/5a93c51cN3bb5e37b.png"
      />
      <p>登录后可同步购物车中商品</p>
      <van-button
        class="login-button"
        @click="$router.push('/login')"
        plain
        hairline
        type="danger"
      >登录</van-button>
    </div>
    <div v-else class="shopcar-container">
      <van-cell-group>
        <van-cell v-for="(item,i) in model" ref="shopcarvell" :key="item.select._id">
          <van-switch v-model="shopcar[i].isSelect" size="14px" @change="updateSelect" />
          <img :src="item.image" />
          <div class="good-content">
            <div class="good-title">{{item.goodname}}</div>
            <div class="good-rule">
              <p v-if="item.select[0].s1">{{item.select[0].s1.name}}</p>
              <p v-if="item.select[0].s2">{{item.select[0].s2.name}}</p>
              <p v-if="item.select[0].s3">{{item.select[0].s3.name}}</p>
            </div>
            <div class="good-select"> 
              <p class="good-price">￥{{shopcar[i].selectedSkuComb.price/100}}</p>
              <p class="good-num">x {{shopcar[i].selectedNum}}</p>
            </div>
          </div>
        </van-cell>
      </van-cell-group>
    </div>
    <van-submit-bar :price="priceSub" button-text="提交订单" @submit="onSubmit" />
  </div>
</template>

<script>
export default {
  data() {
    return {
      model: [],
      ids: [],
    };
  },
  methods: {
    async getShopCar() {
      var carList = [];
      this.shopcar.map(item => {
        carList.push(item.goodsId);
      });
      this.ids = carList;
      const res = await this.$http.get(`/shopcarlist/${this.ids}`);
      for (let i = 0; i < this.shopcar.length; i++) {
        let shopCarList = {};
        shopCarList.goodname = res.data[i].name;
        shopCarList.select = res.data[i].sku.list.filter(item => {
          return item._id == this.shopcar[i].selectedSkuComb.id;
        });
        shopCarList.image = res.data[i].img;
        this.model.push(shopCarList);
      }
      console.log(this.model)
    },
    onSubmit() {
      console.log(this.user);
    },
    updateSelect() {
      this.$store.dispatch('updateShopCar',this.shopcar)
    }
  },
  computed: {
    user() {
      return this.$store.state.user;
    },
    shopcar() {
      return this.$store.state.shopcar
      console.log(this.shopcar)
    },
    priceSub() {
      return this.$store.getters.priceSub
    }
  },
  created() {
    this.getShopCar();
  }
};
</script>

<style lang="scss" scoped>
.login-container {
  width: 100%;
  height: 375px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-color: #eee;
  img {
    width: 90px;
    height: 90px;
  }
  p {
    color: rgba(51, 51, 51, 0.66);
    font-size: 16px;
    margin: 10px 0;
  }
  .login-button {
    line-height: 30px;
    width: 60px;
    height: 30px;
  }
}

.shopcar-container {
  margin-top: 45px;
  margin-bottom: 50px;
}

.van-cell {
  height: 100px;
  margin-bottom: 10px;
  .van-cell__value {
    display: flex;
    justify-content: space-between;
    align-items: center;
    .good-content {
      width: 200px;
      height: 90px;
      .good-title {
        font-size: 12px;
        line-height: 20px;
        overflow: hidden;
        text-overflow: ellipsis;
        display: -webkit-box;
        -webkit-line-clamp:2;
        line-clamp: 2;
        -webkit-box-orient: vertical;
      }
      .good-rule {
        display: flex;
        font-size: 10px;
        color: #a78c8c;
        p {
          margin-right: 10px;
        }
      }
      .good-select{
        display: flex;
        justify-content: space-between;
        .good-price{
          font-size: 16px;
          color: red
        }
        .good-num{
          font-size: 13px;
          color:#745a5a;
        }
      }
    }
  }
  img {
    width: 90px;
    height: 90px;
  }
}

.desc-container {
  margin-top: 5px;
  display: flex;
  font-size: 10px;
  color: #a78c8c;
  p {
    margin-right: 10px;
  }
}
</style>