import { Controller } from '@nestjs/common';
import { Crud } from 'nestjs-mongoose-crud';
import { ItemCategory } from 'libs/db/models/ItemCategory.model';
import { ApiTags } from '@nestjs/swagger';
import { InjectModel } from 'nestjs-typegoose';
import { ReturnModelType } from '@typegoose/typegoose';

@Controller('itemcategory')
@Crud({
    model:ItemCategory
})
@ApiTags('一级分类')
export class ItemcategoryController {
    @InjectModel(ItemCategory) private model:ReturnModelType<typeof ItemCategory>
}
