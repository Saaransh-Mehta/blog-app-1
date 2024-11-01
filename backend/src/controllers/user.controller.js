import express from 'express'
import mongoose from 'mongoose'
import { User } from '../Models/User.js'

const registerUser = async(req,res)=>{
    const {username , email , password} = req.body

    if(!username | !email || !passsword){
        throw new Error("All fields are required")
    }

    if(password.length < 8){
        throw new Error("Password must be8 charcters long")

    }

    const PassRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*])[A-Za-z\d!@#$%^&*]{8,}$/
    if(!PassRegex.test(password)){
        throw new Error("Password must contain at least one uppercase letter, one lowercase letter, one number, and one special character")
    }
    const userExist = User.findOne({email})
    if(userExist){
        throw new Error("User already exists")
    }

        const hashedPasword = await bcrypt.hash(password,10)
         const user = await User.create({
            username,
            email,
            password:hashedPasword
         })
        return res.status(200).json({
            message:"User created successfully",
            data:user
        })
}

export {registerUser}

