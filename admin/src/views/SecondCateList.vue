<template>
  <div>
    <el-card>
      <div slot="header">
        <span>二级分类列表</span>
      </div>
      <el-table :data="model">
        <el-table-column prop="_id" label="ID"></el-table-column>
        <el-table-column prop="category.name" label="上级分类名称"></el-table-column>
        <el-table-column prop="name" label="二级分类名称"></el-table-column>
        <el-table-column prop="icon" label="图标">
            <template slot-scope="scope">
                <img :src="scope.row.icon" alt="" style="width:100px;height:100px">
            </template>
        </el-table-column>
        <el-table-column label="操作">
          <template slot-scope="scope">
            <el-button size="mini" @click="$router.push(`/secondcategory/edit/${scope.row._id}`)">编辑</el-button>
            <el-button size="mini" type="danger" @click="handleDelete(scope.row)">删除</el-button>
          </template>
        </el-table-column>
      </el-table>
    </el-card>
  </div>
</template>

<script>
import { delSecondCate, getSecondCate } from '../api/secondCategoty'

export default {
    data() {
        return {
            model: []
        }
    },
    methods: {
        async fetch() {
            const {data} = await getSecondCate({query:{populate:'category'}})
            this.model = data.data
        },
        async handleDelete(row){
           this.$confirm('此操作将永久删除该文件, 是否继续?', '提示', {
            confirmButtonText: '确定',
            cancelButtonText: '取消',
            type: 'warning'
            }).then(async() => {
                await delSecondCate(row._id)
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