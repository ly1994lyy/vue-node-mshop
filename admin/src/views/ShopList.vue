<template>
  <div>
    <el-card>
      <div slot="header">
        <span>商铺列表</span>
      </div>
      <el-table :data="model">
        <el-table-column type="expand">
            <template slot-scope="props">
                <el-form label-position="left" inline class="demo-table-expand">
                    <el-form-item label="商铺简介">
                        <span>{{ props.row.tips }}</span>
                    </el-form-item>
                    <el-form-item label="开店时间">
                        <span>{{ props.row.createtime | dataFormat}}</span>
                    </el-form-item>
                    <el-form-item label="店铺粉丝">
                        <span>{{ props.row.collect }}</span>
                    </el-form-item>
                </el-form>
            </template>
        </el-table-column>
        <el-table-column prop="_id" label="ID"></el-table-column>
        <el-table-column prop="name" label="商铺名称"></el-table-column>
        <el-table-column prop="logo" label="商铺Logo">
            <template slot-scope="scope">
                <img :src="scope.row.logo" alt="" style="width:100px;height:100px">
            </template>
        </el-table-column>
        <el-table-column label="操作">
          <template slot-scope="scope">
            <el-button size="mini" @click="$router.push(`/shop/edit/${scope.row._id}`)">编辑</el-button>
            <el-button size="mini" type="danger" @click="handleDelete(scope.row)">删除</el-button>
          </template>
        </el-table-column>
      </el-table>
    </el-card>
  </div>
</template>

<script>
import { delShop, getShop } from '../api/shop'

export default {
    data() {
        return {
            model: []
        }
    },
    methods: {
        async fetch() {
            const {data} = await getShop()
            this.model = data.data
        },
        async handleDelete(row){
           this.$confirm('此操作将永久删除该文件, 是否继续?', '提示', {
            confirmButtonText: '确定',
            cancelButtonText: '取消',
            type: 'warning'
            }).then(async() => {
                await delShop(row._id)
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

<style>
  .demo-table-expand {
    font-size: 0;
  }
  .demo-table-expand label {
    width: 90px;
    color: #99a9bf;
  }
  .demo-table-expand .el-form-item {
    margin-right: 0;
    margin-bottom: 0;
    width: 50%;
  }
</style>