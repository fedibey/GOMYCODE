const Employer = require('../Models/Employer')

exports.addEmployer = async(req,res)=>{
    try {
        const found = await Employer.findOne({email : req.body.PostNeeded})

        if(found){
            return res.status(400).send( "Employer already exist")
        }

        const SavingEmployer = new Employer(req.body)


        await SavingEmployer.save()

        res.status(200).send({ msg : "Employer saved",SavingEmployer})
    } catch (error) {

        res.status(500).send("could not add Employer")
        
    }
}

exports.getEmployers = async(req,res)=>{
    try {
        const employers = await Employer.find()


        res.status(200).send({msg:"employers",employers})
    } catch (error) {
        res.status(500).send("could not get Employers")
    }
}
exports.getOneEmployers = async(req,res)=>{
    try {
        const{id}=req.params
        
        const employer = await Employer.findById(id)

        


        res.status(200).send({msg : 'employer', employer})

    } catch (error) {
        res.status(500).send("could not get Employer")
    }
}
exports.deleteEmployer = async(req,res)=>{
    try {
        const {id} = req.params
        
        await Employer.findByIdAndDelete(id)
        res.status(200).send('Employer Deleted')
    } catch (error) {
        res.status(500).send("could not delete Employer") 
    }

}
exports.updateEmployer = async(req,res)=>{
    try {
        const {id}= req.params

        await Employer.findByIdAndUpdate(id,{$set : req.body})
        res.status(200).send('Employer Updated')
    } catch (error) {
        res.status(500).send("could not delete Employer")
    }
}