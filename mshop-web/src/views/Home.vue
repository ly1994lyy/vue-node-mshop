<template>
  <div>
    <van-nav-bar fixed>
      <van-search
        background="red"
        placeholder="请输入搜索关键词"
        v-model="value"
        shape="round"
        slot="title"
      />
      <van-icon name="apps-o" slot="left" />
      <van-icon name="user-o" slot="right" />
    </van-nav-bar>
  </div>
</template>

<script>
export default {
  data() {
    return {
      value: ''
    }
  },
};
</script>

<style lang="scss" scoped>
.van-nav-bar {
  background-color: red;
  .van-icon {
    font-size: 20px;
    color: white;
  }
  .van-search{
    padding: 6px 0px
  }
}
</style>