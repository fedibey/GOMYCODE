const mongoose = require('mongoose')

const demandeSchema = new mongoose.Schema(
    {
        post : {
            type : mongoose.Types.ObjectId,
            ref : "Post"
        },
        
        owner: {
            type : mongoose.Types.ObjectId,
            ref : "fedi"
        },

        ownerPost : {
            type : mongoose.Types.ObjectId,
            ref : "fedi"
        },

        status : {
            type: String,
            default : "In progress"
        }
    }
)

module.exports = mongoose.model('demande',demandeSchema)

