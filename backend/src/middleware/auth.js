import express, { application } from 'express'
import jwt from 'jsonwebtoken'
import  {User}  from '../Models/User.js'

const app = express()
const authOnHeader = async(req,res,next)=>{
    const token = req.cookie.jwt
    if(token){
        req.header.authorization = `Bearer ${token}`
        next();
    }

}

app.use(authOnHeader)
const auth = async(req,res,next)=>{

    const AuthToken = req.header['authorization']
    if(AuthToken){
        const token = AuthToken.split(' ')[1]
        jwt.verify(token,process.env.JWT_KEY,(err,user)=>{
            if(err){
                return res.status(401).json({message:"Error occured during bearing token"})

            }
           req.user = user
           next();
           
        })
    }else{
        res.status(401,json({message:"Token not found"}))
    }
    
}

export {auth,authOnHeader}