module.exports = app => {
    const mongoose = require('mongoose')

    mongoose.connect('mongodb://localhost:27017/vue-node-mshop',{
        useNewUrlParser:true,
        useFindAndModify: true,
        useUnifiedTopology:true
    })
}