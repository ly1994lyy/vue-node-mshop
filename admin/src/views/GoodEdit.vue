<template>
  <div>
    <el-form label-width="130px" @submit.native.prevent="update">
      <el-tabs type="border-card">
        <el-tab-pane label="基础信息">
          <el-form-item label="商品名称">
            <el-input v-model="model.name"></el-input>
          </el-form-item>
          <el-form-item label="商品简介">
            <el-input v-model="model.describe"></el-input>
          </el-form-item>
          <el-form-item label="商品缩略图">
          <el-upload
            class="avatar-uploader"
            action="http://localhost:3008/upload"
            :show-file-list="false"
            :on-success="imgUpload"
          >
            <img v-if="model.img" :src="model.img" class="avatar" />
            <i v-else class="el-icon-plus avatar-uploader-icon" style="line-height:100px"></i>
          </el-upload>
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
          <el-form-item label="所属分类">
            <el-select v-model="model.category">
              <el-option
                v-for="item in categoryList"
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
              action="http://localhost:3008/upload"
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
          <el-form-item label="是否在首页轮播">
            <el-switch v-model="model.isbanner" active-color="#13ce66" inactive-color="#eee"></el-switch>
          </el-form-item>
          <el-form-item label='首页轮播图片' v-if="model.isbanner">
            <el-upload
              class="avatar-uploader"
              action="http://localhost:3008/upload"
              :show-file-list="false"
              :on-success="afterUpload"
            >
              <img v-if="model.bannerimg" :src="model.bannerimg" class="avatar" />
              <i v-else class="el-icon-plus avatar-uploader-icon" style="line-height:100px"></i>
            </el-upload>
          </el-form-item>
        </el-tab-pane>
        <!-- <el-tab-pane label="商品规格">
          <el-form-item label="卡片默认标题">
            <el-input v-model="model.goods.title"></el-input>
          </el-form-item>
          <el-form-item label='卡片默认图片'>
            <el-upload
              class="avatar-uploader"
              :action="$http.defaults.baseURL + '/upload'"
              :show-file-list="false"
              :on-success="goodsPicture"
            >
              <img v-if="model.goods.picture" :src="model.goods.picture" class="avatar" />
              <i v-else class="el-icon-plus avatar-uploader-icon" style="line-height:100px"></i>
            </el-upload>
          </el-form-item>
          <el-form-item label="卡片默认价格">
            <el-input v-model="model.sku.price"></el-input>
          </el-form-item>
          <el-form-item label="总库存量">
            <el-input v-model="model.sku.stock_num"></el-input>
          </el-form-item>
          <el-form-item label="是否无规格商品">
            <el-switch v-model="model.sku.none_sku" active-color="#13ce66" inactive-color="#eee"></el-switch>
          </el-form-item>
          <el-form-item label="是否隐藏剩余库存">
            <el-switch v-model="model.sku.hide_stock" active-color="#13ce66" inactive-color="#eee"></el-switch>
          </el-form-item>
          <el-button type="primary" @click="addTree">点击添加规格</el-button>
          <el-row>
            <el-col :md="12" v-for="(item,index) in model.sku.tree" :key="index">
              <el-form-item label="选择规格">
                <el-input v-model="item.k"></el-input>
              </el-form-item>
              <el-form-item label="选择规格值">
                <el-select v-model="item.v" multiple >
                  <el-option
                    v-for="ruleitems in ruleItemList"
                    :key="ruleitems._id"
                    :label="ruleitems.name"
                    :value="ruleitems._id"
                  ></el-option>
                </el-select>
              </el-form-item>
              <el-form-item label="组合Id">
                <el-select v-model="item.k_s">
                  <el-option
                    v-for="(ksid,i) in kslist"
                    :key="i"
                    :label="ksid"
                    :value="ksid"
                  >
                  </el-option>
                </el-select>
              </el-form-item>
              <el-form-item>
                <el-button type="danger" @click="model.sku.tree.splice(index,1)">删除此规格</el-button>
              </el-form-item>
            </el-col>
          </el-row>
          <el-button type="primary" v-show="model.sku.tree.length" @click="model.sku.list.push({})">点击添加详细规格</el-button>
          <el-row>
            <el-col :md="12" v-for="(item,index) in model.sku.list" :key="index">
              <el-form-item label="s1选择">
                <el-select v-model="item.s1">
                  <el-option
                    v-for="s1item in ruleItemList"
                    :key="s1item._id"
                    :label="s1item.name"
                    :value="s1item._id"
                  ></el-option>
                </el-select>
              </el-form-item>
              <el-form-item label="s2选择">
                <el-select v-model="item.s2">
                  <el-option
                    v-for="s1item in ruleItemList"
                    :key="s1item._id"
                    :label="s1item.name"
                    :value="s1item._id"
                  ></el-option>
                </el-select>
              </el-form-item>
              <el-form-item label="s3选择">
                <el-select v-model="item.s3">
                  <el-option
                    v-for="s1item in ruleItemList"
                    :key="s1item._id"
                    :label="s1item.name"
                    :value="s1item._id"
                  ></el-option>
                </el-select>
              </el-form-item>
              <el-form-item label="价格">
                <el-input v-model="item.price"></el-input>
              </el-form-item>
              <el-form-item label="库存">
                <el-input v-model="item.stock_num"></el-input>
              </el-form-item>
              <el-form-item>
                <el-button type="danger" @click="model.sku.list.splice(index,1)">删除此规格</el-button>
              </el-form-item>
            </el-col>
          </el-row>
        </el-tab-pane> -->
      </el-tabs>
      <el-form-item>
        <el-button type="primary" native-type="submit" style="margin-top:10px;margin-left:20px">保存</el-button>
      </el-form-item>
    </el-form>
  </div>
</template>

<script>
import { createGood, getGoodById, updateGood } from '../api/good'
import { getSecondCate } from '../api/secondCategoty';
import { getShop } from '../api/shop';

export default {
  data() {
    return {
      model: {
        icon: [],
        // rule: [],
        // sku:{
        //   tree:[],
        // },
        goods:{
          title:'',
          picture:''
        },
        isbanner: false
      },
      shopList: [],
    //   ruleList: [],
      categoryList:[],
    //   ruleItemList:[],
    //   kslist:["s1","s2","s3"]
    };
  },
  props:{
      id:String
  },
  methods: {
    async update() {
        if(this.id){
            await updateGood(this.id,this.model)
            this.$message({
                type: "success",
                message: "更新成功"
            });
        }else{
            await createGood(this.model)
            this.$message.success('新建成功!')
        }
      
      this.$router.push("/good/list");
    },
    afterUploadBanner(res) {
      this.model.icon.push(res);
    },
    // addTree(){
    //   if(this.model.sku.tree.length<3){
    //     this.model.sku.tree.push({})
    //   }else{
    //     this.$message({
    //       type:'error',
    //       message:'最多只能添加三个规格'
    //     })
    //   }
    // },
    handleRemove(file, fileList) {
      console.log(file, fileList);
    },
    async fetch(){
        const res = await getGoodById(this.id)
        this.model = res.data
    },
    async fetchCategory() {
      const {data} = await getSecondCate()
      this.categoryList = data.data;
    },
    async fetchShop() {
      const {data} = await getShop()
      this.shopList = data.data;
    },
    // async fetchRule() {
    //   const res = await this.$http.get("/rule");
    //   this.ruleList = res.data;
    // },
    // async fetchRuleItem() {
    //   const res = await this.$http.get("/ruleitem");
    //   this.ruleItemList = res.data;
    // },
    imgUpload(res){
        this.$set(this.model,'img',res.url)
    },
    goodsPicture(res){
      this.$set(this.model.goods,'picture',res.url)
    },
  },
  created() {
    this.id && this.fetch();
    this.fetchShop();
    //this.fetchRule();
    this.fetchCategory();
    //this.fetchRuleItem()
  }
};
</script>
