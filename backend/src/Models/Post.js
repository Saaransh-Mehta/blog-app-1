import mongoose , {Schema} from "mongoose";
 const PostSchema =  new Schema({
    title:{
        type:String,
        required:true,
        default:"Untitled 0"
    },
    description:{
        type:String,
        required:true
    },
    content:{
        type:String,
        required:true
    },
    author:{
        type:Schema.Types.ObjectId,
        ref:"User"
    },
    image:{
        type:String
    },
    comments:[
        {
        type:Schema.Types.ObjectId,
        ref:"Comment"
        }
    ],
    likes:[
        {
            type:Schema.Types.ObjectId,
            ref:"User"
        }
    ]


 },{timestamps:true})

 export const Post = mongoose.model("Post",PostSchema)