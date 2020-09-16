import { Controller } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { ReturnModelType } from '@typegoose/typegoose';
import { Category } from 'libs/db/models/category.model';
import { Crud } from 'nestjs-mongoose-crud';
import { InjectModel } from 'nestjs-typegoose';

@Controller('category')
@Crud({
    model:Category,
    routes:{
        create:false,
        update:false,
        delete:false
    }
})
@ApiTags('分类')
export class CategoryController {
    constructor(
        @InjectModel(Category) private model:ReturnModelType<typeof Category>
    ){}
}
