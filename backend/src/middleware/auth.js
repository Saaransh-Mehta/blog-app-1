import express from 'express'
import jwt from 'jsonwebtoken'
import  {User}  from '../Models/User.js'

const auth = async(req,res,next)=>{

    
    const token = req.cookies.jwt
    if(!token){
        throw new Error("Login first (No token found)")

    }
     const verify = jwt.verify(token,process.env.JWT_KEY)
     if(!verify){
        console.log("Wrong access token")
     }
     const user = await User.findOne({email:verify.email})
     req.user = user
     req.token = token
     next()

}

export {auth}