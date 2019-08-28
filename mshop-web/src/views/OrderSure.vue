<template>
  <div>
    <van-nav-bar fixed title="确认订单" left-arrow>
      <van-icon name="ellipsis" slot="right" />
    </van-nav-bar>
    <div class="order-address">
        <div class="user-name"><p>李月</p><p>188559712288</p></div>
        <div class="user-address van-ellipsis">江苏省南京市雨花台区就开始登记卡山东矿机看</div>
    </div>
    <div class="shopcar-container">
      <van-cell-group>
        <van-cell v-for="(item,i) in model" ref="shopcarvell" :key="item.select._id">
          <img :src="item.image" />
          <div class="good-content">
            <div class="good-title">{{item.goodname}}</div>
            <div class="good-rule">
              <p v-if="item.select[0].s1">{{item.select[0].s1.name}}</p>
              <p v-if="item.select[0].s2">{{item.select[0].s2.name}}</p>
              <p v-if="item.select[0].s3">{{item.select[0].s3.name}}</p>
            </div>
            <div class="good-select"> 
              <p class="good-price">￥{{newShopCar[i].selectedSkuComb.price/100}}</p>
              <p class="good-num">x {{newShopCar[i].selectedNum}}</p>
            </div>
          </div>
        </van-cell>
      </van-cell-group>
    </div>
    <van-submit-bar v-if="user" :price="priceSub" button-text="确认订单" @submit="onSubmit" />
  </div>
</template>

<script>
export default {
  data() {
    return {
      model: [],
      ids: [],
      newShopCar:[]
    };
  },
  methods: {
    async getShopCar() {
      var carList = [];
      const surelist = this.shopcar.filter(item=>{
          return item.isSelect==true
      })
      this.newShopCar = surelist
      surelist.map(item => {
        carList.push(item.goodsId);
      });
      this.ids = carList;
      const res = await this.$http.get(`/shopcarlist/${this.ids}`);
      for (let i = 0; i < surelist.length; i++) {
        let shopCarList = {};
        shopCarList.goodId = res.data[i]._id
        shopCarList.goodname = res.data[i].name;
        shopCarList.select = res.data[i].sku.list.filter(item => {
          return item._id == surelist[i].selectedSkuComb.id;
        });
        shopCarList.image = res.data[i].img;
        this.model.push(shopCarList);
      }
      console.log(this.model)
    },
    onSubmit() {
      console.log('sd')
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
.shopcar-container {
  margin-bottom: 50px;
}

.order-address{
    width: 100%;
    height: 10vh;
    margin-top: 45px;
    background-color: #eee;
    font-size: 15px;
    .user-name{
        display: flex;
        p{
            margin-top: 5px
        }
    }
    .user-address{
        margin-top: 5px;
    }
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