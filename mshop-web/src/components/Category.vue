<template>
  <div>
    <van-nav-bar fixed left-arrow>
      <van-search placeholder="请输入搜索关键词" v-model="value" shape="round" slot="title" />
      <van-icon name="ellipsis" slot="right" />
    </van-nav-bar>
    <div style="display:flex">
      <van-sidebar v-model="activeKey">
        <van-sidebar-item
          v-for="item in categoryList"
          :key="item._id"
          :title="item.name"
          @click="add"
        />
      </van-sidebar>
      <div v-for="category in itemCategoryList" :key="category.id">
        <h2>{{category.name}}</h2>
        
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      value: "",
      categoryList: [],
      itemCategoryList:[],
      activeKey: 0
    };
  },
  methods: {
    async fetchCategory() {
      const res = await this.$http.get("/category");
      this.categoryList = res.data;
    },
    add(index) {
      this.itemCategoryList = this.categoryList[index].itemcategories
    }
  },
  created() {
    this.fetchCategory();
  }
};
</script>

<style lang="scss" scoped>
.van-icon {
  font-size: 20px;
}
</style>