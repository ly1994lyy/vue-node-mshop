<template>
  <div>
    <van-nav-bar title="注册" left-arrow @click-left="onClickLeft" />
      <van-cell-group class="register-group">
        <van-field
          v-model="username"
          required
          clearable
          label="用户名"
          placeholder="请输入用户名"
        />
        <van-field 
          v-model="password" 
          type="password" 
          label="密码" 
          placeholder="请输入密码" 
          required 
        />
        <van-field 
          v-model="password1" 
          type="password" 
          label="确认密码" 
          placeholder="请输入密码" 
          required 
        />    
    </van-cell-group>
    <van-button @click="addUser" class="register-button" type="info">注册</van-button>
    <p class="register-info">已有账户？请<router-link tag='a' to='/login'>登录</router-link></p>
  </div>
</template>

<script>
export default {
  data() {
    return {
      username: '',
      password:'',
      password1:''
    }
  },
  methods: {
    onClickLeft() {
      Toast("返回");
    },
    async addUser(){
      const res = await this.$http.post('/register',{
        username:this.username,
        password:this.password
      })
      this.$toast.success('注册成功')
      this.$router.push('/login')
    }
  }
};
</script>

<style lang="scss" scoped>
.register-group{
  margin-top: 50px
}
.register-button{
  margin-left: 42%;
  margin-top: 30px
}
.register-info{
  font-size: 12px;
  margin-left: 40%;
  margin-top: 30px
}
</style>