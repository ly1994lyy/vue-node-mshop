import { Module } from '@nestjs/common';
import { ItemcategoryController } from './itemcategory.controller';

@Module({
  controllers: [ItemcategoryController]
})
export class ItemcategoryModule {}
