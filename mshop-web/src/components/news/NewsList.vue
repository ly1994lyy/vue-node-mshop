<template>
  <div>
    <router-link tag="div" to='/' class="new-container">
        <div class="new-icon">
            <img src="https://img.yzcdn.cn/vant/apple-2.jpg" >
        </div>
        <div class="new-content">
            <h3>标题</h3>
            <span>发表时间：2019-07-24</span><span>点击：2</span>
        </div>
    </router-link>
    <router-link tag="div" to='/' class="new-container">
        <div class="new-icon">
            <img src="https://img.yzcdn.cn/vant/apple-2.jpg" >
        </div>
        <div class="new-content">
            <h3>标题</h3>
            <span>发表时间：2019-07-24</span><span>点击：2</span>
        </div>
    </router-link>
  </div>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
.new-container{
    height: 50px;
    width: 100%;
    display: flex;
    margin-top: 10px;
    .new-icon{
        width: 60px;
        height: 100%;
        img{
            width: 100%;
            height: 100%;
        }
    }
   .new-content{
       padding-left: 22px;
   }
}
</style>