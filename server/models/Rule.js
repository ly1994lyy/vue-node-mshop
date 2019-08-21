const mongoose = require('mongoose')

const scheme = new mongoose.Schema({
    rulename:{type:String},
    id:{type:mongoose.Types.ObjectId}
})

module.exports = mongoose.model('Rule',scheme)

