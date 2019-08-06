<template>
  <div>
    <el-form label-width="120px" @submit.native.prevent="update">
      <el-tabs type="border-card">
        <el-tab-pane label="基础信息">
          <el-form-item label="商品名称">
            <el-input v-model="model.name"></el-input>
          </el-form-item>
          <el-form-item label="商品简介">
            <el-input v-model="model.describe"></el-input>
          </el-form-item>
          <el-form-item label="商品价格">
            <el-input v-model="model.price"></el-input>
          </el-form-item>
          <el-form-item label="所属商铺">
            <el-select v-model="model.shop">
              <el-option
                v-for="item in shopList"
                :key="item._id"
                :label="item.name"
                :value="item._id"
              ></el-option>
            </el-select>
          </el-form-item>
          <el-form-item label="商品重量">
            <el-input v-model="model.weight"></el-input>
          </el-form-item>
          <el-form-item label="商品图片(轮播)">
            <el-upload
              class="avatar-uploader"
              :action="$http.defaults.baseURL + '/upload'"
              list-type="picture-card"
              :on-success="afterUploadBanner"
              :on-remove="handleRemove"
              :file-list="model.icon"
            >
              <i class="el-icon-plus avatar-uploader-icon" style="line-height:100px"></i>
            </el-upload>
          </el-form-item>
          <el-form-item label="收藏数">
            <el-input v-model="model.collect" placeholder="默认为0，不可手动改写" :disabled="true"></el-input>
          </el-form-item>
        </el-tab-pane>
        <el-tab-pane label="添加规格">
          <el-button type="primary" @click="model.rule.push({})">点击添加规格</el-button>
          <el-row>
            <el-col :md="12" v-for="(item,index) in model.rule" :key="index">
              <el-form-item label="选择规格">
                <el-select v-model="item.rulename">
                  <el-option
                    v-for="ruleitem in ruleList"
                    :key="ruleitem._id"
                    :label="ruleitem.rulename"
                    :value="ruleitem._id"
                  ></el-option>
                </el-select>
              </el-form-item>
              <el-form-item label="规格内容">
                <el-input v-model="item.rules"></el-input>
              </el-form-item>
              <el-form-item label="所剩数量">
                <el-input v-model="item.mount"></el-input>
              </el-form-item>
              <el-form-item>
                <el-button type="danger" @click="model.rule.splice(index,1)">删除此规格</el-button>
              </el-form-item>
            </el-col>
          </el-row>
        </el-tab-pane>
      </el-tabs>
      <el-form-item>
        <el-button type="primary" native-type="submit" style="margin-top:10px;margin-left:20px">保存</el-button>
      </el-form-item>
    </el-form>
  </div>
</template>

<script>
export default {
  data() {
    return {
      model: {
        icon: [],
        rule: []
      },
      shopList: [],
      ruleList: []
    };
  },
  props:{
      id:''
  },
  methods: {
    async update() {
      const res = await this.$http.put(`/good/${this.id}`, this.model);
      this.$message({
        type: "success",
        message: "更新成功"
      });
      this.$router.push("/good/list");
    },
    afterUploadBanner(res) {
      this.model.icon.push(res);
    },
    handleRemove(file, fileList) {
      console.log(file, fileList);
    },
    async fetch(){
        const res = await this.$http.get(`/good/${this.id}`)
        this.model = res.data
    },
    async fetchShop() {
      const res = await this.$http.get("/shop");
      this.shopList = res.data;
    },
    async fetchRule() {
      const res = await this.$http.get("/rule");
      this.ruleList = res.data;
    }
  },
  created() {
    this.fetch();
    this.fetchShop();
    this.fetchRule();
  }
};
</script>
