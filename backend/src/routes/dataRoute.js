import express from 'express'
const dataRouter = express.Router();

dataRouter.get('/get-data',async(req,res)=>{
    try{
        const data = req.user
        console.log(data);
    }
    catch(error){
        return res.status(401).json({message:"Error sending request"})
    }

})

export {dataRouter}