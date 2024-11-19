const mongoose = require('mongoose')

const EmployerSchema = new mongoose.Schema(
    {  
       Name : String, 
       PostNeeded : String,
       Skills : String,
       Experiences : String,
    }
)
module.exports = mongoose.model('ProfilNeeded',EmployerSchema)