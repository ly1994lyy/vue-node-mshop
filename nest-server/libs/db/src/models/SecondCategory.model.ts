import { prop, Ref } from "@typegoose/typegoose";
import { ItemCategory } from "./ItemCategory.model";

export class SecondCategory{
    @prop()
    name:string

    @prop()
    icon:string

    @prop({ref:'ItemCategory'})
    category:Ref<ItemCategory>
}