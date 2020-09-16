import { Controller } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { ReturnModelType } from '@typegoose/typegoose';
import { Good } from 'libs/db/models/good.model';
import { Crud } from 'nestjs-mongoose-crud';
import { InjectModel } from 'nestjs-typegoose';

@Controller('good')
@Crud({
    model:Good,
    routes:{
        create:false,
        update:false,
        delete:false
    }
})
@ApiTags('商品')
export class GoodController {
    constructor(
        @InjectModel(Good) private model:ReturnModelType<typeof Good>
    ){}
}
