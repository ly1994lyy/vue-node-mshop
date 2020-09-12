import { Controller, UseGuards } from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';
import { ApiBearerAuth, ApiTags } from '@nestjs/swagger';
import { ReturnModelType } from '@typegoose/typegoose';
import { Good } from 'libs/db/models/good.model';
import { Crud } from 'nestjs-mongoose-crud';
import { InjectModel } from 'nestjs-typegoose';

@Controller('good')
@ApiTags('商品')
@Crud({
    model:Good
})
@ApiBearerAuth()
@UseGuards(AuthGuard('jwt'))
export class GoodController {
    constructor(
        @InjectModel(Good) private model:ReturnModelType<typeof Good>
    ){}
}
