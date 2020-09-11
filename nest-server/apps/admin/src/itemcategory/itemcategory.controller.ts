import { Controller, UseGuards } from '@nestjs/common';
import { Crud } from 'nestjs-mongoose-crud';
import { ItemCategory } from 'libs/db/models/ItemCategory.model';
import { ApiBearerAuth, ApiTags } from '@nestjs/swagger';
import { InjectModel } from 'nestjs-typegoose';
import { ReturnModelType } from '@typegoose/typegoose';
import { AuthGuard } from '@nestjs/passport';

@Controller('itemcategory')
@Crud({
    model:ItemCategory
})
@ApiTags('一级分类')
@ApiBearerAuth()
@UseGuards(AuthGuard('jwt'))
export class ItemcategoryController {
    constructor(
        @InjectModel(ItemCategory) private model:ReturnModelType<typeof ItemCategory>
    ){}
    
}
