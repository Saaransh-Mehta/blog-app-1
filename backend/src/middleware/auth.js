import express, { application } from 'express'
import jwt from 'jsonwebtoken'
import  {User}  from '../Models/User.js'

const app = express()
const auth = async(req,res,next) =>{
    try{
        const token = req.cookies.jwt
        if(!token){
            throw new Error("No token found")
        }
        jwt.verify(token,process.env.JWT_KEY,(err,user)=>{
            if(err){
                throw new Error("Error occured")

            }else{
                req.user=user
                next()
            }
        })
    }
    catch(error){
        return res.status(401).json({message:"Error sending request"})
    }
}

export {auth}