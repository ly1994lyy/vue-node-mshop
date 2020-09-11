import { Controller, Post, Body, Get, UseGuards } from '@nestjs/common';
import { ApiBearerAuth, ApiTags } from '@nestjs/swagger';
import { Crud } from 'nestjs-mongoose-crud';
import { Shop } from 'libs/db/models/shop.model';
import { InjectModel } from 'nestjs-typegoose';
import { ReturnModelType } from '@typegoose/typegoose';
import { AuthGuard } from '@nestjs/passport';

@Controller('shop')
@ApiTags('商家管理')
@Crud({
    model:Shop
})
@ApiBearerAuth()
@UseGuards(AuthGuard('jwt'))
export class ShopController {
    constructor(
        @InjectModel(Shop) private model:ReturnModelType<typeof Shop>
    ){}
}
