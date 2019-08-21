const mongoose = require('mongoose')
let counter = 1;
let id = {type: Number, default: () => counter++};
const scheme = new mongoose.Schema({
    name:{type:String},
    id:id
})

module.exports = mongoose.model('RuleItem',scheme)