const express = require('express')
const { addPost, getPosts, getOnePost, deletePost, updatePost, getMyPosts } = require('../controllers/UserPost')
const { isAuth } = require('../Middlewares/isAuth')



const userPostRouter = express.Router()


userPostRouter.post('/addPost',isAuth,addPost)

userPostRouter.get('/getPosts',getPosts)

userPostRouter.get('/getOnePost/:id',getOnePost)

userPostRouter.delete('/deletePost/:id',deletePost)

userPostRouter.put('/updatePost/:id',updatePost)

userPostRouter.get('/getMyPost',isAuth,getMyPosts)


module.exports = userPostRouter