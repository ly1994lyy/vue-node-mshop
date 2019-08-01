<template>
  <div>
    <el-card>
      <el-form ref="form" :model="form" label-width="80px" @submit.native.prevent="add">
        <el-form-item label="活动名称">
          <el-input v-model="form.name"></el-input>
        </el-form-item>
        <el-form-item>
          <el-button type="primary">立即创建</el-button>
        </el-form-item>
      </el-form>
    </el-card>
  </div>
</template>

<script>
export default {
    data() {
        return {
            form: {}
        }
    },
    methods: {
        async addCategory() {
            
        }
    },
};
</script>

<style lang="scss" scoped>
</style>