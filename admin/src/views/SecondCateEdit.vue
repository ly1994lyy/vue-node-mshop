<template>
  <div>
    <el-card>
      <div slot="header">
        <span>新建二级分类分类</span>
      </div>
      <el-form label-width="auto" @submit.native.prevent="add">
        <el-form-item label="二级分类名称">
          <el-input v-model="model.name"></el-input>
        </el-form-item>
        <el-form-item label="分类图标">
          <el-upload
            class="avatar-uploader"
            action="http://localhost:3008/upload"
            :show-file-list="false"
            :on-success="afterUpload"
          >
            <img v-if="model.icon" :src="model.icon" class="avatar" />
            <i v-else class="el-icon-plus avatar-uploader-icon" style="line-height:100px"></i>
          </el-upload>
        </el-form-item>
        <el-form-item label="所属一级分类">
          <el-select v-model="model.category" placeholder="请选择一级分类" filterable>
            <el-option
              v-for="item in ItemCategoryList"
              :key="item._id"
              :label="item.name"
              :value="item._id"
            ></el-option>
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
import { getItemCate } from "../api/itemCategory";
import {
  createSecondCate,
  getSecondCateById,
  updateSecondCate,
} from "../api/secondCategoty";

export default {
  props: {
    id: String,
  },
  data() {
    return {
      model: {},
      ItemCategoryList: [],
    };
  },
  methods: {
    async add() {
      if (this.id) {
        await updateSecondCate(this.id, this.model);
        this.$message.success("更新成功");
      } else {
        await createSecondCate(this.model);
        this.$message.success("添加成功");
      }
      this.$router.push("/secondcategory/list");
    },
    async fetchItemCategory() {
      const { data } = await getItemCate();
      this.ItemCategoryList = data.data;
    },
    async fetch() {
      const { data } = await getSecondCateById(this.id);
      this.model = data;
    },
    afterUpload(res) {
      this.$set(this.model, "icon", res.url);
    },
  },
  created() {
    this.id && this.fetch();
    this.fetchItemCategory();
  },
};
</script>

<style>
.avatar-uploader .el-upload {
  border: 1px dashed #d9d9d9;
  border-radius: 6px;
  cursor: pointer;
  position: relative;
  overflow: hidden;
}
.avatar-uploader .el-upload:hover {
  border-color: #409eff;
}
.avatar-uploader-icon {
  font-size: 28px;
  color: #8c939d;
  width: 100px;
  height: 100px;
  text-align: center;
}
.avatar {
  width: 100px;
  height: 100px;
  display: block;
}
</style>