<template>
  <div class="product-container">
    <van-swipe class="goods-swipe" :autoplay="3000">
      <van-swipe-item v-for="(image, index) in model.icon" :key="index">
        <!-- <img v-lazy="image.url" /> -->
        <img :src="image.url" />
      </van-swipe-item>
    </van-swipe>
    <van-cell-group>
      <van-cell>
        <div class="goods-title">
          <van-tag type="danger">自营</van-tag>
          <van-tag type="danger">京东手机</van-tag>
          <b>{{model.name}}</b>
        </div>
        <div class="goods-price">￥{{model.price}}.00</div>
        <div class="describe">
          <p>
            <b>{{model.describe}}</b>
          </p>
        </div>
      </van-cell>
      <van-cell class="goods-express">
        <van-col span="20">运费:免运费</van-col>
        <van-col span="4">剩余:19</van-col>
      </van-cell>
    </van-cell-group>
    <van-cell-group class="goods-cell-group">
      <van-cell value="进入店铺" icon="shop-o" is-link @click="sorry">
        <template slot="title">
          <span class="van-cell-text">有赞的店</span>
          <van-tag class="goods-tag" type="danger">官方</van-tag>
        </template>
      </van-cell>
      <van-cell title="线下门店" icon="location-o" is-link @click="sorry" />
    </van-cell-group>
    <van-nav-bar title="标题">
      <van-icon name="search" slot="right" />
      <p slot="left">已选</p>
    </van-nav-bar>
    <van-nav-bar title="标题">
      <van-icon name="search" slot="right" />
      <p slot="left">已选</p>
    </van-nav-bar>
    <van-nav-bar title="标题">
      <van-icon name="search" slot="right" />
      <p slot="left">已选</p>
    </van-nav-bar>
    <van-goods-action>
      <van-goods-action-icon icon="chat-o" text="客服" />
      <van-goods-action-icon info="5" icon="cart-o" text="购物车" />
      <van-goods-action-icon icon="star-o" text="收藏" />
      <van-goods-action-button type="warning" text="加入购物车" />
      <van-goods-action-button type="danger" text="立即购买" />
    </van-goods-action>
  </div>
</template>

<script>
export default {
  props: {
    id: ""
  },
  data() {
    return {
      model: {}
    };
  },
  methods: {
    async fetch() {
      const res = await this.$http.get(`/good/${this.id}`);
      this.model = res.data;
    }
  },
  created() {
    this.fetch();
  }
};
</script>

<style lang="scss" scoped>
.product-container {
    background: #eee;
  padding-bottom: 50px;
  .goods-swipe {
    img {
      width: 100%;
      display: block;
    }
  }
  .goods-cell-group{
      margin: 15px 0
  }
  .goods-price {
    font-size: 20px;
    font-weight: 700;
    color: red;
  }
  .goods-express {
    color: #999;
    font-size: 12px;
    padding: 5px 15px;
  }
  .collect-icon {
    font-size: 20px;
  }
  .collect {
    font-size: 11px;
  }
  .van-tag {
    margin-right: 3px;
  }
  .name {
    padding: 0 8px;
  }
  .describe {
    font-size: 12px;
    color: #bea4a4;
  }
  .van-goods-action {
    z-index: 99;
  }
}
</style>