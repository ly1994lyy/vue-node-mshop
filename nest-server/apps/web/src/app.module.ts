import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { CategoryModule } from './category/category.module';
import { ItemcategoryModule } from './itemcategory/itemcategory.module';
import { SecondcategoryModule } from './secondcategory/secondcategory.module';
import { GoodModule } from './good/good.module';
import { ShopModule } from './shop/shop.module';
import { AuthModule } from './auth/auth.module';
import { CommonModule } from 'libs/common';

@Module({
  imports: [
    CommonModule,
    CategoryModule,
    ItemcategoryModule,
    SecondcategoryModule,
    GoodModule,
    ShopModule,
    AuthModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
