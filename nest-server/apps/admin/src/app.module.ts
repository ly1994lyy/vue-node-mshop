import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { CategoryModule } from './category/category.module';
import { CommonModule } from 'libs/common';
import { ItemcategoryModule } from './itemcategory/itemcategory.module';
import { SecondcategoryModule } from './secondcategory/secondcategory.module';
import { MulterModule } from '@nestjs/platform-express';
import { ShopModule } from './shop/shop.module';

@Module({
  imports: [
    CommonModule,
    CategoryModule,
    ItemcategoryModule,
    SecondcategoryModule,
    MulterModule.register({
      dest:'uploads'
    }),
    ShopModule
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
