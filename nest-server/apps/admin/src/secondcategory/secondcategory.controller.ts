import { Controller } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { Crud } from 'nestjs-mongoose-crud';
import { SecondCategory } from 'libs/db/models/SecondCategory.model';
import { InjectModel } from 'nestjs-typegoose';
import { ReturnModelType } from '@typegoose/typegoose';

@Controller('secondcategory')
@ApiTags('二级分类')
@Crud({
    model:SecondCategory
})
export class SecondcategoryController {
    constructor(
        @InjectModel(SecondCategory) private model:ReturnModelType<typeof SecondCategory>
    ){}
    
}
