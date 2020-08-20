<template>
  <div>
    <el-card>
      <div slot="header">
        <span>新建一级分类分类</span>
      </div>
      <el-form label-width="auto" @submit.native.prevent="add">
        <el-form-item  label="一级分类名称">
          <el-input v-model="model.name"></el-input>
        </el-form-item>
        <el-form-item label="所属总分类">
          <el-select v-model="model.category" placeholder="请选择总分类" filterable>
            <el-option 
              v-for="item in CategoryList"
              :key=item._id
              :label=item.name
              :value=item._id>
            </el-option>
          </el-select>
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
            model: {},
            CategoryList:[]
        }
    },
    methods: {
        async add() {
            await this.$http.post('/itemcategory',this.model)
            this.$message({
                type:"success",
                message:'添加成功'
            })
            this.$router.push('/itemcategory/list')
        },
        async fetchCategory(){
          const res = await this.$http.get('/category')
          this.CategoryList = res.data
          console.log(res.data)
        }
    },
    created () {
      this.fetchCategory();
    },
};
</script>

<style lang="scss" scoped>
</style>