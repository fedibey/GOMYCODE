const mongoose = require('mongoose')

const userSchema = new mongoose.Schema(
    {
        name : String,
        lastName : String,
        birthDate : String,
        Adresse : String,        
        email : {type : String, required : true, unique : true},
        password : { type : String, required : true },
        photo : {
            type : String,
            default : 'https://www.citypng.com/public/uploads/preview/profile-user-round-white-icon-symbol-png-701751695033499brrbuebohc.png'
        },
        skills : [String],
        occupation : String,
        role :{
            type : String,
            default : 'user'
        }
    }
)

module.exports = mongoose.model('fedi',userSchema)

