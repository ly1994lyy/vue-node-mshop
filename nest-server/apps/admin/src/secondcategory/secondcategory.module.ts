import { Module } from '@nestjs/common';
import { SecondcategoryController } from './secondcategory.controller';

@Module({
  controllers: [SecondcategoryController]
})
export class SecondcategoryModule {}
