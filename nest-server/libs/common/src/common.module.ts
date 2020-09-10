import { Module, Global } from '@nestjs/common';
import { CommonService } from './common.service';
import { ConfigModule } from '@nestjs/config'
import { DbModule } from 'libs/db';

@Global()
@Module({
  imports:[
    DbModule,
    ConfigModule.forRoot({
      isGlobal:true
    })
  ],
  providers: [CommonService],
  exports: [CommonService],
})
export class CommonModule {}
