<template>
  <div>
    <el-card>
      <div slot="header">
        <span>编辑规格</span>
      </div>
      <el-form label-width="auto" @submit.native.prevent="update">
        <el-form-item  label="规格名称">
          <el-input v-model="model.rulename"></el-input>
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
      id:String
    },
    data() {
        return {
            model: {}
        }
    },
    methods: {
        async update() {
            await this.$http.put(`/rule/${this.id}`,this.model)
            this.$message({
                type:"success",
                message:'更新成功'
            })
            this.$router.push('/rule/list')
        },
        async fetch(){
          const res = await this.$http.get(`/rule/${this.id}`)
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