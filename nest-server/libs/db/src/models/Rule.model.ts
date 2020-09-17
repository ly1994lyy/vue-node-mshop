import { prop, Ref } from "@typegoose/typegoose";
import { Category } from "./category.model";

class TreeV{
    id: string
    name:string
    imgUrl?: string
    previewImgUrl: string
}

export class Rule{

    @prop()
    category:Ref<Category>

    @prop()
    k:string

    @prop()
    v:Ref<TreeV>[]
    
}