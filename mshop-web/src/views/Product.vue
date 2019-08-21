<template>
  <div class="product-container">
    <van-swipe class="goods-swipe" :autoplay="3000">
      <van-swipe-item v-for="(image, index) in model.icon" :key="index">
        <!-- <img v-lazy="image.url" /> -->
        <img :src="image.url" />
      </van-swipe-item>
    </van-swipe>
    <div class="item-icon left">
      <van-icon class="icon-size" name="arrow-left"></van-icon>
    </div>
    <div class="item-icon right">
      <van-icon class="icon-size" name="cart-o"></van-icon>
    </div>
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
      <van-cell title="选择规格" @click="skuStart" is-link />
      <van-sku 
        v-model="show" 
        :sku="model.sku" 
        :goods="goods" 
       
      />
    </van-cell-group>
    <van-cell-group class="goods-cell-group">
      <van-cell value="进入店铺" icon="shop-o" is-link>
        <template slot="title">
          <span class="van-cell-text">{{model.shop.name}}</span>
          <van-tag class="goods-tag" type="danger">官方</van-tag>
        </template>
      </van-cell>
      <van-cell title="线下门店" icon="location-o" is-link />
    </van-cell-group>
    <van-nav-bar title="标题">
      <van-icon name="search" slot="right" />
      <p slot="left">已选</p>
    </van-nav-bar>
    <van-goods-action>
      <van-goods-action-icon icon="chat-o" text="客服" />
      <van-goods-action-icon info="5" icon="cart-o" text="购物车" />
      <van-goods-action-icon
        v-if="isStar"
        @click="star"
        icon="star"
        class="isstar"
        text="已收藏"
        icon-class="isStar"
      />
      <van-goods-action-icon v-else @click="star" icon="star-o" class="isstar" text="收藏" />
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
      model: {},
      isStar: false,
      show: false,
      sku: {  
        tree: [],
        list: [],   
        price: "1.00", // 默认价格（单位元）
        stock_num: 227, // 商品总库存
        collection_id: 2261, // 无规格商品 skuId 取 collection_id，否则取所选 sku 组合对应的 id
        none_sku: false, // 是否无规格商品
        hide_stock: false // 是否隐藏剩余库存
      },
      goods: {
        // 商品标题
        title: "Iphone XR",
        // 默认商品 sku 缩略图
        picture: "//img.alicdn.com/imgextra/i2/1776456424/O1CN01ZIL5ue1xKEreAcTjx_!!0-item_pic.jpg_200x200Q50s50.jpg"
      }
    };
  },
  methods: {
    async fetch() {
      const res = await this.$http.get(`/good/${this.id}`);
      const tree = res.data.sku.tree
      const list = res.data.sku.list
      const newTree = tree.map(item=>{
        return {
          k:item.k,
          k_s:item.k_s,
          v:item.v.map(i=>{
            return {
              id:i._id,
              name:i.name
            }
          })
        }
      })
      const newList = list.map(item=>{
        return {
                id: item._id,
                s1: item.s1,
                s2: item.s2,
                s3: item.s3,
                price: item.price,
                stock_num: item.stock_num
        }
      })
      this.model = res.data;
      this.model.sku.tree = newTree;
      this.model.sku.list = newList
    },
    star() {
      this.isStar = !this.isStar;
    },
    skuStart() {
      this.show = true
      const ad = this.model.rule
      console.log(ad)
    }
  },
  created() {
    this.fetch();
  }
};
</script>

<style lang="scss" scoped>
.product-container {
  background-color: #eee;
  padding-bottom: 50px;
  .goods-swipe {
    position: relative;
    img {
      width: 100%;
      display: block;
    }
  }
  .item-icon {
    width: 30px;
    text-align: center;
    height: 30px;
    line-height: 30px;
    border-radius: 50%;
    background-color: #666;
    color: #fff;
    .icon-size {
      font-size: 15px;
    }
  }
  .left {
    position: absolute;
    top: 10px;
    left: 10px;
  }
  .right {
    position: absolute;
    right: 10px;
    top: 10px;
  }
  .goods-cell-group {
    margin: 15px 0;
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
    .isStar {
      color: red;
    }
  }
}
</style>