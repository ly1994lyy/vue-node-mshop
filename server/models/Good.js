const mongoose = require('mongoose')
const scheme = new mongoose.Schema({
    name:{type:String},
    describe:{type:String},
    price:{type:Number},
    icon:[{type:Object}],
    weight:{type:Number},
    rules:[{
        rulename:{type:mongoose.SchemaTypes.ObjectId,ref:'Rule'},
        rulebody:[{type:String}]
    }],
    collect:{type:Number,min:0,default:0},
    shop:{type:mongoose.SchemaTypes.ObjectId,ref:'Shop'}
})

module.exports = mongoose.model('Good',scheme)