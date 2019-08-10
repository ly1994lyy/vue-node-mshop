const mongoose = require('mongoose')
const scheme = new mongoose.Schema({
    name:{type:String},
})

scheme.virtual('itemcategories',{
    localField:'_id',
    ref:'ItemCategory',
    foreignField:'category',
    justOne:false
})


module.exports = mongoose.model('Category',scheme)