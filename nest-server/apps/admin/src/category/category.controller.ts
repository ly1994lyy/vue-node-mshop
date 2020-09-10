import { Controller } from '@nestjs/common';
import { Crud } from 'nestjs-mongoose-crud'
import { Category } from 'libs/db/models/category.model';
import { InjectModel } from 'nestjs-typegoose';
import { ReturnModelType } from '@typegoose/typegoose';
import { ApiTags } from '@nestjs/swagger';

@Controller('category')
@Crud({
    model:Category
})
@ApiTags('总分类')
export class CategoryController {
    @InjectModel(Category) private model:ReturnModelType<typeof Category>
}
