
const User = require('../Models/User')
const UserPost = require('../Models/UserPost');

const bcrypt = require('bcrypt');
var jwt = require('jsonwebtoken');

exports.singUp= async(req,res)=>{
    try {

        const {name,email,password} = req.body

        const found = await User.findOne({email}) 
        
        if (found){
            return res.status(400).send({errors : [{msg : "Email already exists"}]})
        }

        const newAcount = new User(req.body)
        


        const saltRounds = 10
        const salt = bcrypt.genSaltSync(saltRounds)
        const hashedPassword = bcrypt.hashSync(password, salt)
        
        newAcount.password = hashedPassword


        newAcount.save()

        const payload={id : newAcount._id}
        var token = jwt.sign(payload, process.env.privateKey);

        res.status(200).send({msg :"Account created",newAcount,token})
    
        
    } catch (error) {
        res.status(500).send({errors : [{msg : "could not create Acount"}]})
        
    }
}

exports.signIn=async(req,res)=>{
    try {
        const {email,password} = req.body
        const found = await User.findOne({email})

        if(!found){
            return res.status(400).send({errors: [{msg : "wrong Email or password"}]})

        }

        const matched = bcrypt.compareSync(password, found.password)

        if(!matched){
           return res.status(400).send({errors : [{msg :"wrong Email or password"}]}) 
        }

        const payload={id : found._id}
        var token = jwt.sign(payload, process.env.privateKey);

        res.status(200).send({msg : 'Welcome', found,token})





    } catch (error) {
        res.status(500).send({errors : [{msg : "could not loggin"}]})
    }
}

exports.getAllUsers = async(req,res)=>{
    try {
        const users = await User.find()


        res.status(200).send({msg:"users",users})
    } catch (error) {
        res.status(500).send("could not get users")
    }
}


exports.getOneUser = async(req,res)=>{
    try {
        const{id}=req.params
        
        const user = await User.findById(id)

        


        res.status(200).send({msg : 'user', user})

    } catch (error) {
        res.status(500).send("could not get user")
    }
}

exports.updateUser = async(req,res)=>{
    try {
        const {id}= req.params

        await User.findByIdAndUpdate(id,{$set : req.body})

        res.status(200).send('User Updated')

    } catch (error) {
        res.status(500).send("could not update User")
    }
}

exports.deleteUser = async(req,res)=>{
    try {
        const {id} = req.params
        
        await User.findByIdAndDelete(id)

        res.status(200).send('User Deleted')
        
    } catch (error) {
        res.status(500).send("could not delete User") 
    }

}
