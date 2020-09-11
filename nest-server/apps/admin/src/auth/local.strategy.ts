import { HttpException } from "@nestjs/common";
import { PassportStrategy } from "@nestjs/passport";
import { ReturnModelType } from "@typegoose/typegoose";
import { compareSync } from "bcrypt";
import { AdminUser } from "libs/db/models/adminUser.model";
import { InjectModel } from "nestjs-typegoose";
import {Strategy} from 'passport-local'


export class LocalStrategy extends PassportStrategy(Strategy){
    constructor(
        @InjectModel(AdminUser) private adminUserModel:ReturnModelType<typeof AdminUser>
    ){
        super()
    }

    async validate(username:string,password:string){
        const user = await this.adminUserModel.findOne({username}).select('+password')
        if(!user){
            throw new HttpException('用户名不存在!',401)
        }
        if(!compareSync(password,user.password)){
            throw new HttpException('密码错误!',401)
        }
        return user
    }
    
}