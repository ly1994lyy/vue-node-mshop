const mongoose = require('mongoose')
const scheme = new mongoose.Schema({
    name:{type:String}
})

module.exports = mongoose.model('RuleItem',scheme)