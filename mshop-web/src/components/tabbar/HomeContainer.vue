<template>
  <div>
    <!-- 轮播图 -->
    <van-swipe :autoplay="3000">
      <van-swipe-item v-for="(image, index) in images" :key="index">
        <img v-lazy="image" />
      </van-swipe-item>
    </van-swipe>
    <!-- 九宫格 -->
    <van-grid :border="false" :column-num="3">
        <van-grid-item to="/home/newlist">
            <van-image round src="https://img.yzcdn.cn/vant/apple-1.jpg" />
            <p>新闻资讯</p>
        </van-grid-item>
        <van-grid-item>
            <van-image round src="https://img.yzcdn.cn/vant/apple-2.jpg" />
            <p>图片分享</p>
        </van-grid-item>
        <van-grid-item>
            <van-image round src="https://img.yzcdn.cn/vant/apple-3.jpg" />
            <p>商品购买</p>
        </van-grid-item>
        <van-grid-item>
            <van-image round src="https://img.yzcdn.cn/vant/apple-1.jpg" />
            <p>留言反馈</p>
        </van-grid-item>
        <van-grid-item>
            <van-image round src="https://img.yzcdn.cn/vant/apple-2.jpg" />
            <p>视频专区</p>
        </van-grid-item>
        <van-grid-item>
            <van-image round src="https://img.yzcdn.cn/vant/apple-3.jpg" />
            <p>联系我们</p>
        </van-grid-item>
    </van-grid>
  </div>
</template>

<script>
export default {
  data() {
    return {
      images: [
        "https://img.yzcdn.cn/vant/apple-1.jpg",
        "https://img.yzcdn.cn/vant/apple-2.jpg",
        "https://img.yzcdn.cn/vant/apple-3.jpg"
      ]
    };
  }
};
</script>

<style lang="scss" scoped>
.van-swipe {
  height: 200px;
  img{
      width: 100%;
      height: 100%;
  }
}
.van-image{
    width: 50%;
    height: 50%;
}
</style>