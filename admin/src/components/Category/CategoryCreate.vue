<template>
  <div>
    <el-card>
      <div slot="header">
        <span>新建总分类</span>
      </div>
      <el-form label-width="auto" @submit.native.prevent="add">
        <el-form-item  label="总分类名称">
          <el-input v-model="model.name"></el-input>
        </el-form-item>
        <el-form-item>
          <el-button type="primary" native-type="submit">保存</el-button>
        </el-form-item>
      </el-form>
    </el-card>
  </div>
</template>

<script>
export default {
    data() {
        return {
            model: {}
        }
    },
    methods: {
        async add() {
            await this.$http.post('/category',this.model)
            this.$message({
                type:"success",
                message:'添加成功'
            })
            this.$router.push('/category/list')
        }
    },
};
</script>

<style lang="scss" scoped>
</style>