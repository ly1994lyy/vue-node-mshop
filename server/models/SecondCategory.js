const mongoose = require('mongoose')
const scheme = new mongoose.Schema({
    name:{type:String},
    icon:{type:String},
    category:{type:mongoose.SchemaTypes.ObjectId,ref:'ItemCategory'}
})

module.exports = mongoose.model('SecondCategory',scheme)