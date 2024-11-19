const UserPost = require("../Models/UserPost")

exports.addPost =async(req,res)=>{
    try {
        
        const found = await  UserPost.findOne({skills : req.body.skills})
        if(found){
            return res.status(400).send("Post exists")
        }
        const newPost =  new UserPost({...req.body,owner : req.user._id})

        await newPost.save()
        res.status(200).send({msg : 'Post added',newPost})
    } catch (error) {
        res.status(500).send("could not add post")
    }
}

exports.getPosts = async(req,res)=>{
    try {
        const posts = await UserPost.find().populate('owner')
        res.status(200).send({msg:"posts",posts})
    } catch (error) {
        res.status(500).send("could not get posts")
    }
}

exports.getOnePost =async(req,res)=>{
    try {
       const {id}=req.params
       const post = await UserPost.findById(id)
       res.status(200).send({msg:"post",post}) 
    } catch (error) {
        res.status(500).send('no post')
    }
}

exports.deletePost =async(req,res)=>{
    try {
        const {id}=req.params
        await UserPost.findByIdAndDelete(id)
        res.status(200).send("post deleted")
    } catch (error) {
        res.status(500).send('couldnt delete post' )
    }
}

exports.updatePost = async(req,res)=>{
    try {
        const {id}=req.params

        await UserPost.findByIdAndUpdate(id,{$set : req.body})

        res.status(200).send('post updated')
    } catch (error) {
        res.status(500).send('couldnt update post' )
    }
}

exports.getMyPosts =async(req,res)=>{
    try {
       const myPosts = await UserPost.find({owner : req.user._id}).populate('owner')
       res.status(200).send({msg:"post",myPosts}) 
    } catch (error) {
        res.status(500).send('no post')
    }
}