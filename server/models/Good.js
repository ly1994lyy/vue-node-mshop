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
    rule:[{
        rulename:{type:mongoose.SchemaTypes.ObjectId,ref:"Rule"},
        rules:{type:String},
        mount:{type:String}
    }],
    isbanner:{type:Boolean,default:false},
    bannerimg:{type:String},
    category:{type:mongoose.SchemaTypes.ObjectId,ref:'SecondCategory'},
    sku:{
        tree:[{
            k:{type:mongoose.SchemaTypes.ObjectId,ref:"Rule"},
            v:[{type:mongoose.SchemaTypes.ObjectId,ref:"RuleItem"}],
            k_s:{type:String}
        }],
        list:[{
            price:{type:Number},
            s1:{type:mongoose.SchemaTypes.ObjectId,ref:'Good'},
            s2:{type:mongoose.SchemaTypes.ObjectId,ref:'Good'},
            s3:{type:mongoose.SchemaTypes.ObjectId,ref:'Good'},
            stock_num:{type:Number}
        }]
    }
})

module.exports = mongoose.model('Good',scheme)