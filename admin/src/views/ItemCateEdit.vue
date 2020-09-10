<template>
  <div>
    <el-card>
      <div slot="header">
        <span>编辑一级分类</span>
      </div>
      <el-form label-width="auto" @submit.native.prevent="update">
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
import { getCate } from '../api/category';
import { createItemCate, getItemCateById, updateItemCate } from '../api/itemCategory'

export default {
    props:{
      id:String
    },
    data() {
        return {
            model: {},
            CategoryList:[],
        }
    },
    methods: {
        async update() {
            if(this.id){
                await updateItemCate(this.id,this.model)
                this.$message.success('更新成功')
            }else{
                await createItemCate(this.model)
                this.$message.success('新建成功')
            }
            this.$router.push('/itemcategory/list')
        },
        async fetch(){
          const res = await getItemCateById(this.id)
          this.model = res.data
        },
        async fetchCategory(){
          const {data} = await getCate()
          this.CategoryList = data.data
        }
    },
    created () {
      this.fetchCategory();
      this.id && this.fetch();
    },
};
</script>

<style lang="scss" scoped>
</style>