<template>
  <div>
    <el-card>
      <div slot="header">
        <span>编辑商家</span>
      </div>
      <el-form label-width="auto" @submit.native.prevent="update">
        <el-form-item  label="商家名称">
          <el-input v-model="model.name"></el-input>
        </el-form-item>
        <el-form-item  label="商家简介">
          <el-input v-model="model.tips"></el-input>
        </el-form-item>
        <el-form-item label="商家logo">
          <el-upload
            class="avatar-uploader"
            action="http://localhost:3008/upload"
            :show-file-list="false"
            :on-success="afterUpload"
          >
            <img v-if="model.logo" :src="model.logo" class="avatar" />
            <i v-else class="el-icon-plus avatar-uploader-icon" style="line-height:100px"></i>
          </el-upload>
        </el-form-item>
        <el-form-item  label="开店时间">
           <el-date-picker
            v-model="model.createtime"
            type="date"
            placeholder="选择日期"
            format="yyyy 年 MM 月 dd 日"
            value-format="yyyy-MM-dd">
            </el-date-picker>
        </el-form-item>
        <el-form-item label="商家背景图片">
          <el-upload
            class="avatar-uploader"
            action="http://localhost:3008/upload"
            :show-file-list="false"
            :on-success="afterUploadLogo"
          >
            <img v-if="model.bgimg" :src="model.bgimg" class="avatar" />
            <i v-else class="el-icon-plus avatar-uploader-icon" style="line-height:100px"></i>
          </el-upload>
        </el-form-item>
        <el-form-item label="商家主页轮播图">
          <el-upload
            class="avatar-uploader"
            action="http://localhost:3008/upload"
            list-type="picture-card"
            :file-list="model.banner"
            :on-success="afterUploadBanner"
            :on-preview="handlePreview"
            :on-remove="handleRemove"
          >
            <i class="el-icon-plus avatar-uploader-icon" style="line-height:100px"></i>
          </el-upload>
        </el-form-item>
        <el-form-item  label="收藏数">
          <el-input v-model="model.collect" placeholder="默认为0，不可手动改写" :disabled="true"></el-input>
        </el-form-item>
        <el-form-item>
          <el-button type="primary" native-type="submit">保存</el-button>
        </el-form-item>
      </el-form>
    </el-card>
  </div>
</template>

<script>
import { createShop, getShopById, updateShop } from '../api/shop'

export default {
    props:{
        id:{type:String}
    },
    data() {
        return {
            model: {
              banner:[]
            },
          }
    },
    methods: {
        async update() {
            if(this.id){
                await updateShop(this.id,this.model)
                this.$message({
                    type:"success",
                    message:'更新成功'
                })
            }else{
              console.log(this.model)
                await createShop(this.model)
                this.$message.success('创建成功')
            }
            
            this.$router.push('/shop/list')
        },
        afterUpload(res){
            this.$set(this.model,'logo',res.url)
        },
        afterUploadLogo(res){
            this.$set(this.model,'bgimg',res.url)
        },
        afterUploadBanner(res){
            this.model.banner.push(res)
        },
        async fetch(){
          const res = await getShopById(this.id)
          console.log(res)
          this.model = res.data
        },
        async handleRemove(file, fileList) {
          this.model.banner = fileList
          console.log(fileList);
        },
        handlePreview(file) {
          console.log(file);
        }
    },
    created () {
        this.id && this.fetch();
    },
};
</script>
