import { Controller, UseGuards } from '@nestjs/common';
import { ApiBearerAuth, ApiTags } from '@nestjs/swagger';
import { Crud } from 'nestjs-mongoose-crud';
import { SecondCategory } from 'libs/db/models/SecondCategory.model';
import { InjectModel } from 'nestjs-typegoose';
import { ReturnModelType } from '@typegoose/typegoose';
import { AuthGuard } from '@nestjs/passport';

@Controller('secondcategory')
@ApiTags('二级分类')
@Crud({
    model:SecondCategory
})
@ApiBearerAuth()
@UseGuards(AuthGuard('jwt'))
export class SecondcategoryController {
    constructor(
        @InjectModel(SecondCategory) private model:ReturnModelType<typeof SecondCategory>
    ){}
    
}
