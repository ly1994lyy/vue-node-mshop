const mongoose = require('mongoose')

const scheme = new mongoose.Schema({
    user:{type:mongoose.SchemaTypes.ObjectId,ref:'User'},
    goods:[{type:mongoose.SchemaTypes.ObjectId,ref:'Good'}],
    price:{type:Number},
    address:{type:String},
    ispay:{type:Boolean,default:false}, //是否付款
    istake:{type:Boolean,default:false}, //是否接单
    issend:{type:Boolean,default:false}, //是否发货
    isres:{type:Boolean,default:false} //是否收货
})