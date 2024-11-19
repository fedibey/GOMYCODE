const express = require('express')
const { isAuth } = require('../Middlewares/isAuth')
const { addDemande, getDemandes, getMyDemandes, getCandidatures, updateDemande } = require('../controllers/Demande')


const demandeRouter = express.Router()


demandeRouter.post('/addDemande',isAuth,addDemande)

demandeRouter.get('/getDemandes',getDemandes)

demandeRouter.get('/getMyDemandes/:id',getMyDemandes)

demandeRouter.get('/getCandidatures/:id',getCandidatures)

demandeRouter.put('/updateStatus/:id',updateDemande)

// demandeRouter.get('/getOnePost/:id',getOnePost)

// demandeRouter.delete('/deletePost/:id',deletePost)

// demandeRouter.put('/updatePost/:id',updatePost)

// demandeRouter.get('/getMyPost',isAuth,getMyPosts)


module.exports = demandeRouter