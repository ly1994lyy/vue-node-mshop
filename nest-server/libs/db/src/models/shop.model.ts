import { prop, modelOptions } from "@typegoose/typegoose";

@modelOptions({
    schemaOptions:{
        timestamps:true
    }
})

export class Shop {
    @prop()
    name:string

    @prop()
    tips:string

    @prop()
    logo:string

    @prop()
    bgimg:string

    @prop()
    createtime:Date

    @prop()
    banner:any

    @prop({min:0,default:0})
    collect:number
}
