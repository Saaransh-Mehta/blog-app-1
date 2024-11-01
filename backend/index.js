import express from 'express'
import dotenv from 'dotenv'
import connectDB from './src/db/db.js';
import cors from 'cors'
import cookieParser from 'cookie-parser';
import UserRouter from './src/routes/userRoute.js';

dotenv.config({
    path:'./.env'
})
const app = express();
app.use(express.json())
app.use(cors())
app.use(cookieParser());
app.use(express.urlencoded({extended:true}))

connectDB();

app.get('/',(req,res)=>{
    res.send("Hello World")
})

app.use('/api/user',UserRouter)


app.listen(3000,()=>{
console.log("App listening on port 3000")
})