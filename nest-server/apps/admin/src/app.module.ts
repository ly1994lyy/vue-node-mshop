import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { CategoryModule } from './category/category.module';
import { CommonModule } from 'libs/common';
import { ItemcategoryModule } from './itemcategory/itemcategory.module';
import { SecondcategoryModule } from './secondcategory/secondcategory.module';
import { MulterModule } from '@nestjs/platform-express';
import { ShopModule } from './shop/shop.module';
import { AuthModule } from './auth/auth.module';
import { GoodModule } from './good/good.module';

@Module({
  imports: [
    CommonModule,
    CategoryModule,
    ItemcategoryModule,
    SecondcategoryModule,
    MulterModule.register({
      dest:'uploads'
    }),
    ShopModule,
    AuthModule,
    GoodModule
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
