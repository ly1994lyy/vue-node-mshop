import { HttpException } from "@nestjs/common";
import { PassportStrategy } from "@nestjs/passport";
import { ReturnModelType } from "@typegoose/typegoose";
import { AdminUser } from "libs/db/models/adminUser.model";
import { InjectModel } from "nestjs-typegoose";
import { ExtractJwt, Strategy, StrategyOptions } from "passport-jwt";

export class JwtStrategy extends PassportStrategy(Strategy){
    constructor(
        @InjectModel(AdminUser) private adminUserModel:ReturnModelType<typeof AdminUser>
    ){
        super({
            jwtFromRequest:ExtractJwt.fromAuthHeaderAsBearerToken(),
            secretOrKey:process.env.SECRET
        } as StrategyOptions)
    }

    async validate(id:string){
        const user = await this.adminUserModel.findById(id)
        if(!user){
            throw new HttpException('请先登录!',401)
        }
        return user
    }
}