import express from "express";
import mongoose from "mongoose";
import Comment from "../Models/Comment.js";
import { Post } from "../Models/Post.js";

const createComment = async(req,res)=>{
    const {content} = req.body
    if(!content){
        throw new Error("Comment needs content")
    }

    await Comment.create({
        content,
        author:req.user._id,
        post:req.params.id
    })
    await Post.findOneAndUpdate({_id:req.params.id},{
        $push:{comments:Comment._id}})

    return res.status(200).json({
        message:"Comment created successfully",
        data: req.params.id
    })
}


export {createComment}