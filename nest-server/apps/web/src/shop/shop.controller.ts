import { Controller } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { ReturnModelType } from '@typegoose/typegoose';
import { Shop } from 'libs/db/models/shop.model';
import { Crud } from 'nestjs-mongoose-crud';
import { InjectModel } from 'nestjs-typegoose';

@Controller('shop')
@Crud({
    model:Shop,
    routes:{
        create:false,
        update:false,
        delete:false
    }
})
@ApiTags('商家')
export class ShopController {
    constructor(
        @InjectModel(Shop) private model:ReturnModelType<typeof Shop>
    ){}
}
