const mongoose = require('mongoose')
const scheme = new mongoose.scheme({
    title:{type:String},
    body:{type:String}
},{
    timestamps:true
})

module.exports = mongoose.model('News',scheme)