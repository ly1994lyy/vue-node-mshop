import { Module, Global } from '@nestjs/common';
import { DbService } from './db.service';
import { TypegooseModule } from 'nestjs-typegoose';
import { Category } from './models/category.model';
import { ItemCategory } from './models/ItemCategory.model';
import { SecondCategory } from './models/SecondCategory.model';
import { Shop } from './models/shop.model';
import { AdminUser } from './models/adminUser.model';
import { Good } from './models/good.model';
import { Rule } from './models/Rule.model'

const models = TypegooseModule.forFeature([
  Category,
  ItemCategory,
  SecondCategory,
  Shop,
  AdminUser,
  Good,
  Rule,
]);

@Global()
@Module({
  imports: [
    TypegooseModule.forRootAsync({
      useFactory() {
        return {
          uri: process.env.DB,
          useCreateIndex: true,
          useNewUrlParser: true,
          useFindAndModify: false,
          useUnifiedTopology: true,
        };
      },
    }),
    models,
  ],
  providers: [DbService],
  exports: [DbService, models],
})
export class DbModule {}
