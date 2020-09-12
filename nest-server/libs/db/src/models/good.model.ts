import { prop,Ref } from "@typegoose/typegoose";
import { SecondCategory } from "./SecondCategory.model";
import { Shop } from "./shop.model";

export class Good {
    @prop()
    name:string

    @prop()
    describe:string
    
    @prop()
    img:string

    @prop()
    price:number

    @prop()
    icon:any

    @prop()
    weight:number

    @prop({min:0,default:0})
    collect:number

    @prop({ref:'Shop'})
    shop:Ref<Shop>

    @prop({default:false})
    isbanner:boolean

    @prop()
    bannerimg:string

    @prop({ref:'SecondCategory'})
    category:Ref<SecondCategory>
}