const Employee = require("../Models/Employee")

exports.addEmployee = async(req,res)=>{
    try {
        const found = await Employee.findOne({email : req.body.email})

        if(found){
            return res.status(400).send( "Employee already exist")
        }

        const SavingEmployee = new Employee(req.body)


        await SavingEmployee.save()

        res.status(200).send({ msg : "Employee saved",SavingEmployee})
    } catch (error) {

        res.status(500).send("could not add Employee")
        
    }
}

exports.getEmployees = async(req,res)=>{
    try {
        const employees = await Employee.find()


        res.status(200).send({msg:"employees",employees})
    } catch (error) {
        res.status(500).send("could not get Employee")
    }
}
exports.getOneEmployee = async(req,res)=>{
    try {
        const{id}=req.params
        // const found = await Employee.findOne({_id :id})

        // if(!found){
        //     return res.status(400).send('wrong id')
        // }
        const employee = await Employee.findById(id)

        


        res.status(200).send({msg : 'employee', employee})

    } catch (error) {
        res.status(500).send("could not get Employee")
    }
}
exports.deleteEmployee =async(req,res)=>{
    try {
        const {id} = req.params
        
        await Employee.findByIdAndDelete(id)
        res.status(200).send('Employee Deleted')
    } catch (error) {
        res.status(500).send("could not delete Employee") 
    }
}
exports.updateEmployee=async(req,res)=>{
    try {
        const {id}= req.params

        await Employee.findByIdAndUpdate(id,{$set : req.body})
        res.status(200).send('Employee Updated')
    } catch (error) {
        res.status(500).send("could not delete Employee") 
    }
}