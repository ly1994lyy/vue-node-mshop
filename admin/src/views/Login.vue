<template>
  <div class="login-container">
    <div class="login-box">
      <div class="login-title">
        <h1>商城后台登录</h1>
      </div>
      <el-form ref="form" :model="model" label-width="120px">
        <el-form-item label="用户名">
          <el-input v-model="model.username"></el-input>
        </el-form-item>
        <el-form-item label="密码">
          <el-input v-model="model.password" show-password></el-input>
        </el-form-item>
        <el-form-item>
          <el-button type="primary" @click="login">登录</el-button>
        </el-form-item>
      </el-form>
    </div>
  </div>
</template>

<script>
import { login } from "../api/login";

export default {
  data() {
    return {
      model: {},
    };
  },
  methods: {
    async login() {
      await login({
        username: this.model.username,
        password: this.model.password,
      });
      this.$router.push("/");
      this.$message.success("登录成功!");
    },
  },
};
</script>

<style lang="scss" scoped>
.login-container {
  width: 100vw;
  height: 100vh;
  background: #dedede;
  display: flex;
  justify-content: center;
  align-items: center;
  .login-box {
    width: 500px;
    height: 400px;
    background: rgb(145, 107, 107);
    .login-title{
        text-align: center;
        margin-bottom: 20px;
    }
    .el-input {
      width: 300px;
    }
  }
}
</style>