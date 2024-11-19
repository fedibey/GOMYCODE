const Annonces = require("../Models/Annonces")

exports.addAnnounces=async(req,res)=>{
    try {
        

        const newAnnonces =  new Annonces ({...req.body,owner : req.user._id})

        await newAnnonces.save()
        res.status(200).send({msg : 'annoonces added',newAnnonces})
    } catch (error) {
        res.status(500).send("could not add annonces")
    }
}

exports.getAnnonces = async(req,res)=>{
    try {
        const annonces = await Annonces.find().populate('owner')
        res.status(200).send({msg:"annonces",annonces})
    } catch (error) {
        res.status(500).send("could not get annonces")
    }
}

exports.getOneAnnonce =async(req,res)=>{
    try {
       const {id}=req.params
       const annonce = await Annonces.findById(id)
       res.status(200).send({msg:"annonce",annonce}) 
    } catch (error) {
        res.status(500).send('no annonce')
    }
}

exports.deleteAnnonce =async(req,res)=>{
    try {
        const {id}=req.params
        await Annonces.findByIdAndDelete(id)
        res.status(200).send("annonce deleted")
    } catch (error) {
        res.status(500).send('couldnt delete annonce' )
    }
}

exports.updateAnnonce = async(req,res)=>{
    try {
        const {id}=req.params

        await Annonces.findByIdAndUpdate(id,{$set : req.body})

        res.status(200).send('annonce updated')
    } catch (error) {
        res.status(500).send('couldnt update annonce' )
    }
}
