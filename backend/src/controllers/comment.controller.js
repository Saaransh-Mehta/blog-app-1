import express from "express";
import mongoose from "mongoose";
import Comment from "../Models/Comment.js";
import { Post } from "../Models/Post.js";

const createComment = async(req,res)=>{
    const {content} = req.body
    if(!content){
        throw new Error("Comment needs content")
    }

   const saveComment =  await Comment.create({
        content,
        author:req.user._id,
        post:req.params.id
    })
    await saveComment.save()
    await Post.findOneAndUpdate({_id:req.params.id},{
        $push:{comments:saveComment._id}})
        console.log(saveComment._id)

    return res.status(200).json({
        message:"Comment created successfully",
        data: req.params.id
    })
}

const deleteComment = async(req,res)=>{

    const deleteComment = await Comment.findOne({_id:req.params.id})

    if(!deleteComment){
        throw new Error("No comment exist")
    }

    await Comment.deleteOne({_id:req.params.id})

    return res.status(200).json({
        message:"Comment deleted successfully",
        data: req.params.id
    })
}


export {createComment,deleteComment}