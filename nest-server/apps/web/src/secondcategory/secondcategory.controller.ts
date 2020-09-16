import { Controller } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { ReturnModelType } from '@typegoose/typegoose';
import { SecondCategory } from 'libs/db/models/SecondCategory.model';
import { Crud } from 'nestjs-mongoose-crud';
import { InjectModel } from 'nestjs-typegoose';

@Controller('secondcategory')
@Crud({
    model:SecondCategory,
    routes:{
        create:false,
        update:false,
        delete:false
    }
})
@ApiTags('二级分类')
export class SecondcategoryController {
    constructor(
        @InjectModel(SecondCategory) private model:ReturnModelType<typeof SecondCategory>
    ){}
}
