const Demande = require("../Models/Demande")

exports.addDemande =async(req,res)=>{
    try {
        

        const newDemande =  new Demande({...req.body,owner : req.user._id})

        await newDemande.save()
        res.status(200).send({msg : 'Demande added',newDemande})
    } catch (error) {
        res.status(500).send("could not add Demande")
    }
}

exports.getDemandes = async(req,res)=>{
    try {
        const demandes = await Demande.find().populate('owner').populate('post').populate('ownerPost')
        res.status(200).send({msg:"demandes",demandes})
    } catch (error) {
        res.status(500).send("could not get demandes")
    }
}


exports.getMyDemandes = async(req,res)=>{
    try {
        const {id} = req.params
        const demandes = await Demande.find({owner : id}).populate('owner').populate('post').populate('ownerPost')
        res.status(200).send({msg:"demandes",demandes})
    } catch (error) {
        res.status(500).send("could not get demandes")
    }
}

exports.getCandidatures = async(req,res)=>{
    try {
        const {id} = req.params
        const demandes = await Demande.find({ownerPost : id}).populate('owner').populate('post').populate('ownerPost')
        res.status(200).send({msg:"demandes",demandes})
    } catch (error) {
        res.status(500).send("could not get demandes")
    }
}

exports.updateDemande = async(req,res)=>{
    try {
        const {id}= req.params

        await Demande.findByIdAndUpdate(id,{$set : req.body})

        res.status(200).send('Demande Updated')

    } catch (error) {
        res.status(500).send("could not update Demande")
    }
}