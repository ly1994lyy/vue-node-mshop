<template>
  <div>
    <el-card>
      <div slot="header">
        <span>商品列表</span>
      </div>
      <el-table :data="model">
        <el-table-column type="expand">
            <template slot-scope="props">
                <el-form label-position="left" inline class="demo-table-expand">
                    <el-form-item label="所属店铺">
                        <span>{{ props.row.shop.name }}</span>
                    </el-form-item>
                    <el-form-item label="商品重量">
                        <span>{{ props.row.weight }}kg</span>
                    </el-form-item>
                    <el-form-item label="商品简介">
                        <span>{{ props.row.describe }}</span>
                    </el-form-item>
                    <el-form-item label="收藏数">
                        <span>{{ props.row.collect }}</span>
                    </el-form-item>
                </el-form>
            </template>
        </el-table-column>
        <el-table-column prop="_id" label="ID"></el-table-column>
        <el-table-column prop="name" label="商品名称"></el-table-column>
        <el-table-column prop="price" label="商品价格"></el-table-column>
        <el-table-column label="操作">
          <template slot-scope="scope">
            <el-button size="mini" @click="$router.push(`/good/edit/${scope.row._id}`)">编辑</el-button>
            <el-button size="mini" type="danger" @click="handleDelete(scope.row)">删除</el-button>
          </template>
        </el-table-column>
      </el-table>
    </el-card>
  </div>
</template>

<script>
export default {
    data() {
        return {
            model: []
        }
    },
    methods: {
        async fetch() {
            const res = await this.$http.get('/good')
            this.model = res.data
        },
        async handleDelete(row){
           this.$confirm('此操作将永久删除该文件, 是否继续?', '提示', {
            confirmButtonText: '确定',
            cancelButtonText: '取消',
            type: 'warning'
            }).then(async() => {
                const res = await this.$http.delete(`/good/${row._id}`)
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