const mongoose = require('mongoose')

const scheme = new mongoose.Schema({
    username:{type:String},
    password:{type:String}
})

module.exports = mongoose.model('User',scheme)