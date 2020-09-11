import { Controller, UseGuards } from '@nestjs/common';
import { Crud } from 'nestjs-mongoose-crud'
import { Category } from 'libs/db/models/category.model';
import { InjectModel } from 'nestjs-typegoose';
import { ReturnModelType } from '@typegoose/typegoose';
import { ApiBearerAuth, ApiTags } from '@nestjs/swagger';
import { AuthGuard } from '@nestjs/passport';

@Controller('category')
@Crud({
    model:Category
})
@UseGuards(AuthGuard('jwt'))
@ApiBearerAuth()
@ApiTags('总分类')
export class CategoryController {
    constructor(
        @InjectModel(Category) private model:ReturnModelType<typeof Category>
    ){}
    
}
