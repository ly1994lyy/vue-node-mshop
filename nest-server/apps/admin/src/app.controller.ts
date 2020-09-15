import { Controller, Get, Post, UseInterceptors, UploadedFile } from '@nestjs/common';
import { AppService } from './app.service';
import { FileInterceptor } from '@nestjs/platform-express'
import { InjectModel } from 'nestjs-typegoose';
import { Category } from 'libs/db/models/category.model';
import { ReturnModelType } from '@typegoose/typegoose';
import {data} from './data'
import { SecondCategory } from 'libs/db/models/SecondCategory.model';
import { ItemCategory } from 'libs/db/models/ItemCategory.model';

@Controller()
export class AppController {
  constructor(
    @InjectModel(Category) private cateModel:ReturnModelType<typeof Category>,
    @InjectModel(SecondCategory) private secCateModel:ReturnModelType<typeof SecondCategory>,
    @InjectModel(ItemCategory) private itemCateModel:ReturnModelType<typeof ItemCategory>,
    private readonly appService: AppService
    ) {}

  @Get()
  getHello(): string {
    return this.appService.getHello();
  }

  @Post('upload')
  @UseInterceptors(FileInterceptor('file'))
  async upload(@UploadedFile('file') file):Promise<any>{
    file.url = `http://localhost:3008/uploads/${file.filename}`
    return file
  }

  @Get('cate')
  initCate(){
    // const data = ["手机数码", "电脑办公", "家用电器", "计生情趣", "美妆护肤", "个护清洁", "汽车生活", "京东超市", "男装", "男鞋", "女装", "女鞋", "母婴童装", "图书音像", "运动户外", "内衣配饰", "食品生鲜", "酒水饮料", "家具家装", "家居厨具", "箱包手袋", "钟表珠宝", "玩具乐器", "医药保健", "宠物生活", "礼品鲜花", "农资绿植", "生活旅行", "奢侈品", "京东国际", "艺术邮币", "二手商品", "特产馆", "京东金融", "国际名牌", "拍卖", "房产", "工业品"]
    // data.forEach(el => {
    //    this.cateModel.create({name:el})
    // });
    return "success"
  }

  @Get('init')
  async init(){
    data.forEach(async(element) => {
      const res =await this.cateModel.findOne({name:element.name})
      console.log(res)
      const itemCate =  element.child.map(item=>{
        return item.name
      })
      itemCate.forEach(async e=>{
        await this.itemCateModel.create({category:res,name:e})
      })
    });
    return 'success'
  }

  @Get('write')
  async write(){
    data.forEach(async(ele)=>{
      ele.child.forEach(async e=>{
        const res = await this.itemCateModel.findOne({name:e.name})
        const secCate = e.child.map(i=>{
          return {
            img:i.img,
            name:i.name
          }
        })
        secCate.forEach(async le=>{
          await this.secCateModel.create({category:res,icon:le.img,name:le.name})
        })
      })
    })
    return 'success'
  }
}
