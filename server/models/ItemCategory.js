const mongoose = require('mongoose')
const scheme = new mongoose.Schema({
    name:{type:String},
    category:{type:mongoose.SchemaTypes.ObjectId,ref:'Category'}
})

module.exports = mongoose.model('ItemCategory',scheme)