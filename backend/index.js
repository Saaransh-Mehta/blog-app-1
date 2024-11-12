import express from 'express'
import dotenv from 'dotenv'
import connectDB from './src/db/db.js';
import cors from 'cors'
import cookieParser from 'cookie-parser';
import UserRouter from './src/routes/userRoute.js';
import { BlogRouter } from './src/routes/blogRouter.js';
import { dataRouter } from './src/routes/dataRoute.js';

dotenv.config({
    path:'./.env'
})
const app = express();
app.use(express.json())
app.use(cookieParser());
app.use(cors(
   {
    origin:"http://localhost:5173",
    credentials:true
   }
))
app.use(express.urlencoded({extended:true}))

connectDB();

app.get('/',(req,res)=>{
    res.send("Hello World")
})

app.use('/api/user',UserRouter)
app.use('/api/blog',BlogRouter)
app.use('/api/data',dataRouter)


app.listen(3000,()=>{
console.log("App listening on port 3000")
})