import { Module } from '@nestjs/common';
import { GoodController } from './good.controller';

@Module({
  controllers: [GoodController]
})
export class GoodModule {}
