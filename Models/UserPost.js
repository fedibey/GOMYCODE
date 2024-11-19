const mongoose = require('mongoose')

const userSchema = new mongoose.Schema(
    {
        Post : String,
        skills : String,
        owner : {
            type : mongoose.Types.ObjectId,
            ref : "fedi"
        }
    }
)
module.exports = mongoose.model('Post',userSchema)