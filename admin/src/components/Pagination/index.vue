<template>
  <el-pagination
    @size-change="handleSizeChange"
    @current-change="handleCurrentChange"
    :current-page="currentPage"
    :page-sizes="[10, 15, 20]"
    :page-size="pageSize"
    layout="total, sizes, prev, pager, next, jumper"
    :total="totalNum"
    background
  ></el-pagination>
</template>

<script>
export default {
  props: {
    totalNum: Number,
  },
  data(){
      return{
          currentPage:1,
          pageSize: 10,
      }
  },
  methods: {
    handleSizeChange(val) {
      this.$emit('handle',{limit:val})
    },
    handleCurrentChange(val) {
      this.$emit('handle',{page:val})
    },
  },
};
</script>

<style>
</style>