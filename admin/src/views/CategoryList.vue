<template>
  <div>
    <el-card>
      <div slot="header">
        <span>总分类列表</span>
      </div>
      <el-table :data="model">
        <el-table-column prop="_id" label="ID"></el-table-column>
        <el-table-column prop="name" label="总分类名称"></el-table-column>
        <el-table-column label="操作">
          <template slot-scope="scope">
            <el-button size="mini" @click="$router.push(`/category/edit/${scope.row._id}`)">编辑</el-button>
            <el-button size="mini" type="danger" @click="handleDelete(scope.row)">删除</el-button>
          </template>
        </el-table-column>
      </el-table>
      <pagination :totalNum="total" @handle="fetch"></pagination>
    </el-card>
  </div>
</template>

<script>
import {getCate,delCate} from '../api/category'
import Pagination from '../components/Pagination'

export default {
    data() {
        return {
            model: [],
            total:0,
        }
    },
    components:{
      Pagination,
    },
    methods: {
        async fetch(pageData) {
          if(pageData){
            const {limit,page}=pageData
            const {data} =await getCate({
              query:{
                limit,
                page
              }
            })
            this.model = data.data
            this.total = data.total
          }else{
            const {data} =await getCate()
            this.model = data.data
            this.total = data.total
          }
            
        },
        async handleDelete(row){
           this.$confirm('此操作将永久删除该文件, 是否继续?', '提示', {
            confirmButtonText: '确定',
            cancelButtonText: '取消',
            type: 'warning'
            }).then(async() => {
                await delCate(row._id)
                this.$message({
                    type: 'success',
                    message: '删除成功!'
                });
                this.fetch();
                })
    }},
    created () {
        this.fetch();
    },
}
</script>

<style lang="scss" scoped>
</style>