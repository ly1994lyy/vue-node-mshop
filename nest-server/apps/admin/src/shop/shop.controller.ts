import { Controller } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { Crud } from 'nestjs-mongoose-crud';
import { Shop } from 'libs/db/models/shop.model';
import { InjectModel } from 'nestjs-typegoose';
import { ReturnModelType } from '@typegoose/typegoose';

@Controller('shop')
@ApiTags('商家管理')
@Crud({
    model:Shop
})
export class ShopController {
    constructor(
        @InjectModel(Shop) private model:ReturnModelType<typeof Shop>
    ){}
}
