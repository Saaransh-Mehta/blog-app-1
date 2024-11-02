import express from 'express'
import mongoose from 'mongoose'
import { User } from '../Models/User.js'
import bcrypt from 'bcrypt'
import jwt from 'jsonwebtoken'

const registerUser = async(req,res)=>{
    const {username , email , password} = req.body

    if(!username | !email || !password){
        throw new Error("All fields are required")
    }

    if(password.length < 8){
        throw new Error("Password must be 8 charcters long")

    }

    const PassRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*])[A-Za-z\d!@#$%^&*]{8,}$/
    if(!PassRegex.test(password)){
        throw new Error("Password must contain at least one uppercase letter, one lowercase letter, one number, and one special character")
    }
  const userExist = await User.findOne({email})
    console.log(userExist)
    if(userExist){
        throw new Error("User already exists")
    }

        const hashedPasword = await bcrypt.hash(password,10)
         const user = await User.create({
            username,
            email,
            password:hashedPasword,
           
         })
        return res.status(200).json({
            message:"User created successfully",
            data:user
        })
}

const loginUser = async(req,res)=>{

    const {email,password} = req.body
    if(!email || !password){
        throw new Error("Fields are required")
    }

    const user = await User.findOne({email})
    if(!user){
        throw new Error("User does not exist")
    }
    const isPasswordCorrect = await bcrypt.compare(password,user.password)
    if(!isPasswordCorrect){
        throw new Error("Password is incorrect")
    }

    const token = jwt.sign({email:user.email, id:user._id},process.env.JWT_KEY,{expiresIn:"5h"})
    user.accessToken = token
    user.isActive = true
    await user.save()

    res.cookie("jwt",token,{
        httpOnly:true,
        secure:true
    })
    return res.status(200).json({
        message:"User logged in successfully",
        data:user
    })
    
}
const getUser = async(req,res)=>{

    
    const user = req.user
    
    return res.status(200).json({
        message:"User fetched successfully",
        data:user
    })
}

const logoutUser= async(req,res)=>{
    
    res.clearCookie("jwt",{
        httpOnly:true,
        secure:true
    })

    res.status(200).json({
        message:"User logged out successfully"
    })
}

export {registerUser,loginUser,getUser,logoutUser}

