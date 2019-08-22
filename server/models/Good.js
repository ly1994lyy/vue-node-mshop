const mongoose = require('mongoose')
const scheme = new mongoose.Schema({
    name:{type:String},
    describe:{type:String},
    img:{type:String},
    price:{type:Number},
    icon:[{type:Object}],
    weight:{type:Number},
    collect:{type:Number,min:0,default:0},
    shop:{type:mongoose.SchemaTypes.ObjectId,ref:'Shop'},
    isbanner:{type:Boolean,default:false},
    bannerimg:{type:String},
    category:{type:mongoose.SchemaTypes.ObjectId,ref:'SecondCategory'},
    sku:{
        tree:[{
            k:{type:String},
            v:[{type:mongoose.SchemaTypes.ObjectId,ref:"RuleItem"}],
            k_s:{type:String}
        }],
        list:[{
            price:{type:Number},
            s1:{type:mongoose.SchemaTypes.ObjectId,ref:'Good'},
            s2:{type:mongoose.SchemaTypes.ObjectId,ref:'Good'},
            s3:{type:mongoose.SchemaTypes.ObjectId,ref:'Good'},
            stock_num:{type:Number}
        }],
        price: {type:Number}, // 默认价格（单位元）
        stock_num: {type:Number}, // 商品总库存
        none_sku: {type:Boolean}, // 是否无规格商品
        hide_stock: {type:Boolean} // 是否隐藏剩余库存
    },
    goods:{
        title:{type:String},
        picture:{type:String}
    }
})

module.exports = mongoose.model('Good',scheme)