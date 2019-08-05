<template>
  <div>
    <el-card>
      <div slot="header">
        <span>新建规格</span>
      </div>
      <el-form label-width="auto" @submit.native.prevent="add">
        <el-form-item  label="规格名称">
          <el-input v-model="model.rulename"></el-input>
        </el-form-item>
        <el-form-item>
          <el-button @click="model.rulecontent.push({})">添加规格内容</el-button>
        </el-form-item>
        <el-form-item v-for="(item,i) in model.rulecontent" :key="i">
          <el-input v-model="item.rules"></el-input>
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
            model: {
              rulecontent:[]
            }
        }
    },
    methods: {
        async add() {
            const  res = await this.$http.post('/rule',this.model)
            this.$message({
                type:"success",
                message:'添加成功'
            })
            this.$router.push('/rule/list')
        }
    },
};
</script>

<style lang="scss" scoped>
</style>