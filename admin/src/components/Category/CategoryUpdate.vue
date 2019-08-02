<template>
  <div>
    <el-card>
      <div slot="header">
        <span>编辑总分类</span>
      </div>
      <el-form label-width="auto" @submit.native.prevent="update">
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
    props:{
      id:''
    },
    data() {
        return {
            model: {}
        }
    },
    methods: {
        async update() {
            const  res = await this.$http.put(`/category/${this.id}`,this.model)
            this.$message({
                type:"success",
                message:'更新成功'
            })
            this.$router.push('/category/list')
        },
        async fetch(){
          const res = await this.$http.get(`/category/${this.id}`)
          this.model = res.data
        }
    },
    created () {
      this.fetch();
    },
};
</script>

<style lang="scss" scoped>
</style>