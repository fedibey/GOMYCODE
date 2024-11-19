const express = require('express')

const { singUp, signIn, getAllUsers, getOneUser, updateUser, deleteUser} = require('../controllers/User');

const { validation, validationRegister } = require('../Middlewares/Validator');
const { isAuth } = require('../Middlewares/isAuth');

const userRouter = express.Router()

userRouter.post('/singUp',validationRegister,validation,singUp)

userRouter.post('/signIn',signIn)

userRouter.get('/currentUser',isAuth,(req,res)=>{res.send(req.user)})

userRouter.get('/getAllUsers',getAllUsers)

userRouter.get('/getOneUser/:id',getOneUser)

userRouter.put('/updateUser/:id',updateUser)

userRouter.delete('/deleteUser/:id',deleteUser)




module.exports = userRouter