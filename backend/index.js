import express from 'express'
import dotenv from 'dotenv'
import connectDB from './src/db/db.js';

dotenv.config({
    path:'./.env'
})
const app = express();

connectDB();

app.get('/',(req,res)=>{
    res.send("Hello World")
})

app.listen(3000,()=>{
console.log("App listening on port 3000")
})