const mongoose = require('mongoose')
const scheme = new mongoose.Schema({
    rulename:{type:String},
    rulecontent:[{rules:{type:String},}]
})

module.exports = mongoose.model('Rule',scheme)