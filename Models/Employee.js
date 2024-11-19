const mongoose = require('mongoose')

const EmployeeSchema = new mongoose.Schema(
    {
       FirstName : String,
       LastName : String,
       Age : Number,
       email : { type : String, unique : true , required : true},
       Adress : String,
       Work : Boolean, 
       Skills : String,
       Experiences : Boolean 
    }
)
module.exports = mongoose.model('Profil',EmployeeSchema)
 