<template>
  <div>
    <van-nav-bar fixed left-arrow>
      <van-search placeholder="请输入搜索关键词" v-model="value" shape="round" slot="title" />
      <van-icon name="ellipsis" slot="right" />
    </van-nav-bar>
    <div class="list-container">
      <van-card
        v-for="item in model.goods"
        :key="item.id"
        :price="item.price + '.00'"
        :desc="item.describe"
        :title="item.name"
        :thumb="item.img"
        @click="itemInfo(item._id)"
      />
    </div>
  </div>
</template>

<script>
import { getSecondCateById } from '../api/secondCategoty'

export default {
  props: {
    id:String
  },
  data() {
    return {
      model: [],
      value: ""
    };
  },
  methods: {
    async fetch() {
      const res = await getSecondCateById(this.id)
      this.model = res.data;
    },
    itemInfo(val){
        this.$router.push(`/product/${val}`)
    }
  },
  created() {
    this.fetch();
  }
};
</script>

<style lang="scss" scoped>
.van-nav-bar {
  .van-icon {
    font-size: 20px;
    color: #725e5e;
  }
  .van-search {
    padding: 6px 0px;
  }
}
.list-container {
  margin-top: 45px;
}
</style>