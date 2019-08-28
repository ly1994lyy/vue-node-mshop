const mongoose = require('mongoose')

const scheme = new mongoose.Schema({
    username:{type:String},
    password:{
        type:String,
        set:(val)=>{
            return require('bcrypt').hashSync(val,10)
        }
    },
    address:[{
        addressDetail: {type:String},
        areaCode: {type:String},
        city: {type:String},
        county: {type:String},
        isDefault: {type:Boolean},
        name:{type:String},
        postalCode: {type:String},
        province: {type:String},
        tel: {type:String},
    }],
    myCollect:[{type:mongoose.SchemaTypes.ObjectId,ref:'Good'}]
})

module.exports = mongoose.model('User',scheme)