const mongoose = require('mongoose')

const scheme = new mongoose.Schema({
    username:{type:String},
    password:{
        type:String,
        set:(val)=>{
            return require('bcrypt').hashSync(val,10)
        }
    },
    myCollect:[{type:mongoose.SchemaTypes.ObjectId,ref:'Good'}]
})

module.exports = mongoose.model('User',scheme)