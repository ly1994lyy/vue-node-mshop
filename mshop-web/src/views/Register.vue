<template>
  <div>
    <van-nav-bar title="注册" left-arrow @click-left="onClickLeft" />
  </div>
</template>

<script>
export default {
  methods: {
    onClickLeft() {
      Toast("返回");
    }
  }
};
</script>

<style lang="scss" scoped>
</style>