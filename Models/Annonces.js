const mongoose = require('mongoose')

const annoncesSchema = new mongoose.Schema(
    {
       titre : String,

       photo : {
        type : String,
        default : 'https://www.citypng.com/public/uploads/preview/profile-user-round-white-icon-symbol-png-701751695033499brrbuebohc.png'
    },
        description : String,
        
        owner: {
            type : mongoose.Types.ObjectId,
            default : 'user'
        },

       

         }
)

module.exports = mongoose.model('annonce',annoncesSchema)