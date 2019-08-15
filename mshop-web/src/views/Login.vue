<template>
  <div>
    <van-nav-bar title="登录" left-arrow @click-left="onClickLeft" />
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
    </van-cell-group>
    <van-button @click="loginUser" class="register-button" type="info">登录</van-button>
    <p class="register-info">还没有账户？请先<router-link tag='a' to='/register'>注册</router-link></p>
  </div>
</template>

<script>
import jwt_decode from 'jwt-decode'
export default {
  data() {
    return {
      username: '',
      password:'',
    }
  },
  methods: {
    onClickLeft() {
      Toast("返回");
    },
    async loginUser(){
      const res = await this.$http.post('/login',{
        username:this.username,
        password:this.password
      })
      localStorage.setItem('token',res.data.token)
      this.$store.dispatch('setUser',res.data.user)
      this.$store.dispatch('setToken',res.data.token)
      this.$toast.success('登录成功')
      this.$router.push('/category')
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