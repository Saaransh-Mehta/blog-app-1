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
    const userId = req.user.id
    const post = await Post.create({
        title,
        description,
        content,
        author:userId
    })
    await post.save()
    await User.findByIdAndUpdate(userId,{
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
    const user =await User.findOne({email:req.email}).populate("posts")
    if(!user){
        throw new Error("Posts not found")
    }

    const getPost = await Post.findOne({_id:req.params.id}).select("-_id ")
    if(!getPost){
        throw new Error("Post not found")
    }

    return res.status(200).json({
        message:"Post fetched successfully",
        data:[getPost,user]
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
const allPosts = async(req,res)=>{
    const user = req.user
    const allPost = await Post.find({author:user.id}).select("-id -_id")
    return res.status(200).json({
        message:"All posts fetched successfully",
        data:allPost
    })
}
export {createPost,updatePost,getPost,deletePost,allPosts}