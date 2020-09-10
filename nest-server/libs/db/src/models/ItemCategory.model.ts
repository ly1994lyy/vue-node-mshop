import { prop, Ref } from "@typegoose/typegoose";
import { Category } from "./category.model";

export class ItemCategory{
    @prop()
    name:string

    @prop({ref:'Category'})
    category:Ref<Category>
}