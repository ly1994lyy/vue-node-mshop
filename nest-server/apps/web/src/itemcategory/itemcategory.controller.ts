import { Controller } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { ReturnModelType } from '@typegoose/typegoose';
import { ItemCategory } from 'libs/db/models/ItemCategory.model';
import { Crud } from 'nestjs-mongoose-crud';
import { InjectModel } from 'nestjs-typegoose';

@Controller('itemcategory')
@Crud({
    model:ItemCategory,
    routes:{
        create:false,
        update:false,
        delete:false
    }
})
@ApiTags('一级分类')
export class ItemcategoryController {
    constructor(
        @InjectModel(ItemCategory) private model:ReturnModelType<typeof ItemCategory>
    ){}
}
