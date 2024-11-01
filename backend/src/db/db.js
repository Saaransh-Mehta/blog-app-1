import mongoose from "mongoose";
import express from 'express'

const connectDB = async()=>{
    
    try{
        await mongoose.connect(process.env.DB_URL)
        .then(()=>{
            console.log("Connected to database")
        })

    }
    catch(error){
        console.log("Error in connecting to database", error)
    }

}
export default connectDB