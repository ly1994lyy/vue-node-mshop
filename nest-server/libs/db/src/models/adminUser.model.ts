import { ApiProperty } from "@nestjs/swagger";
import { prop } from "@typegoose/typegoose";
import { hashSync } from 'bcrypt'

export class AdminUser {
    @prop()
    @ApiProperty({title:'用户名'})
    username:string

    @ApiProperty({title:'密码'})
    @prop({
        set(val){
            return hashSync(val,10)
        },
        get(val){
            return val
        },
        select:false
    })
    password:string
}