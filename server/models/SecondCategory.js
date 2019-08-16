const mongoose = require('mongoose')
const scheme = new mongoose.Schema({
    name:{type:String},
    icon:{type:String},
    category:{type:mongoose.SchemaTypes.ObjectId,ref:'ItemCategory'}
})

scheme.virtual('goods',{
    ref:'Good',
    localField:'_id',
    foreignField:'category',
    justOne:false
})

module.exports = mongoose.model('SecondCategory',scheme)