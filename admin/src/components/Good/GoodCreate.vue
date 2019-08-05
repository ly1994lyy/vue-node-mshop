<template>
  <div>
    <el-form label-width="auto" @submit.native.prevent="add">
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
            >
              <i class="el-icon-plus avatar-uploader-icon" style="line-height:100px"></i>
            </el-upload>
          </el-form-item>
          <el-form-item label="收藏数">
            <el-input v-model="model.collect" placeholder="默认为0，不可手动改写" :disabled="true"></el-input>
          </el-form-item>  
          <el-button @click="model.rule.push({})">点击添加规格</el-button>
            <el-row >
                <el-col :span="8" v-for="(item,index) in model.rule" :key="index">
                    <el-form-item label="选择规格">
                        <el-select v-model="model.rule.rulename">
                            <el-option 
                                v-for="ruleitem in ruleList"
                                :key="ruleitem._id"
                                :label="ruleitem.rulename"
                                :value="ruleitem._id"
                            ></el-option>
                        </el-select>
                    </el-form-item>
                    <el-form-item label="属性">
                        <el-select v-model="model.rule.rulecontent">
                            <el-option 
                                v-for="ruleitem in item.rulecontent"
                                :key="ruleitem._id"
                                :label="ruleitem.rulename"
                                :value="ruleitem._id"
                            ></el-option>
                        </el-select>
                    </el-form-item>
                </el-col>
                <!-- <el-col :span="4">
                    <el-button @click="item.rulecontent.push({})">点击添加规格内容和数量</el-button>
                </el-col>
                <el-col :span="12">
                    <el-row v-for="(iten,index) in item.rulecontent" :key="index">
                        <el-col :span="12">
                            <el-form-item label="规格内容">
                                <el-input v-model="iten.rules"></el-input>
                            </el-form-item>
                        </el-col>
                        <el-col :span="12">
                            <el-form-item label="所剩数量">
                                <el-input v-model="iten.amount"></el-input>
                            </el-form-item>
                        </el-col>
                    </el-row>
                </el-col> -->
            </el-row>    
        </el-tab-pane>
        <el-tab-pane label="添加规格">
            
        </el-tab-pane>
      </el-tabs>
      <el-form-item>
            <el-button type="primary" native-type="submit">保存</el-button>
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
        rule:[]
      },
      shopList: [],
      ruleList:[]
    };
  },
  methods: {
    async add() {
      const res = await this.$http.post("/good", this.model);
      this.$message({
        type: "success",
        message: "添加成功"
      });
      this.$router.push("/good/list");
    },
    afterUploadBanner(res) {
      this.model.icon.push(res);
    },
    handleRemove(file, fileList) {
      console.log(file, fileList);
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
    this.fetchShop();
    this.fetchRule()
  }
};
</script>
