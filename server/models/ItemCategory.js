const mongoose = require('mongoose')
const scheme = new mongoose.Schema({
    name:{type:String},
    category:{type:mongoose.SchemaTypes.ObjectId,ref:'Category'}
})

scheme.virtual('seccategories',{
    localField:'_id',
    ref:"SecondCategory",
    foreignField:'category',
    justOne:false
})

module.exports = mongoose.model('ItemCategory',scheme)