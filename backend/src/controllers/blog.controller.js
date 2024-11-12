import { User } from "../Models/User.js";
import { Post } from "../Models/Post.js";

const createPost = async(req,res)=>{

    const checkUserLoggedIn = await User.findOne({email:req.user.email})
    if(!checkUserLoggedIn){
        throw new Error("Login first or Register first")

    }

    const {title,description,content} = req.body

    if(!title || !description || !content){
        throw new Error("All fields are required")
    }

    const post = await Post.create({
        title,
        description,
        content,
        author:req.user._id
    })
    await post.save()
    await User.findByIdAndUpdate({_id:req.params.id},{
        $push:{posts:post._id}
    })
    
    return res.status(200).json({
        message:"Blog created successfully",
        data:post
    })
}

const updatePost = async(req,res)=>{

    const checkUserLoggedIn = await User.findOne({email:req.user.email})

    if(!checkUserLoggedIn){
        throw new Error("Login first or Register first")
    }

    const post = await Post.findById(req.params.id)
    if(!post){
        throw new Error("Post not found")
    }

    const {title,description,content} = req.body

    post.title = title,
    post.description = description,
    post.content = content
    await post.save()
    return res.status(200).json({
        message:"Post updated successfully",
        data:post
    })
    
}
const getPost = async(req,res)=>{

    const getPost = await Post.findOne({_id:req.params.id}).select("-_id ")
    if(!getPost){
        throw new Error("Post not found")
    }

    return res.status(200).json({
        message:"Post fetched successfully",
        data:getPost
    })

}

const deletePost = async (req,res)=>{

    const deletePost = await Post.findOne({_id:req.params.id})
    if(!deletePost){
        throw new Error("Post not found")
    }

    await deletePost.deleteOne()

    return res.status(200).json({
        message:"Psot deleted succesfully"
    })
}
export {createPost,updatePost,getPost,deletePost}