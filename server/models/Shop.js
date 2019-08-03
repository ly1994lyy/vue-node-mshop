const mongoose = require('mongoose')
const scheme = new mongoose.Schema({
    name:{type:String},
    tips:{type:String},
    logo:{type:String},
    createtiem:{type:Date},
    bgimg:{type:String},
    banner:[{type:String}],
    collect:{type:Number,min:0,default:0},
})

module.exports = mongoose.model('Shop',scheme)