const express = require('express')
const { addAnnounces, getAnnonces, getOneAnnonce, deleteAnnonce, updateAnnonce } = require('../controllers/Annonces')
const { isAuth } = require('../Middlewares/isAuth')


const AnnoncesRouter = express.Router()

AnnoncesRouter.post('/addAnnounce',isAuth,addAnnounces)
AnnoncesRouter.get('/getAnnonces',getAnnonces)
AnnoncesRouter.get('/getOneAnnonce/:id',getOneAnnonce)
AnnoncesRouter.delete('/deleteAnnonce/:id',deleteAnnonce)
AnnoncesRouter.put('/updateAnnonce/:id',updateAnnonce)




module.exports = AnnoncesRouter
