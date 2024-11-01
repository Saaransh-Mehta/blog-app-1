import mongoose , {Schema} from "mongoose";
const CommentSchema = new Schema({
    content:{
        type:String,
        required:true
    },
    author:{
        type:Schema.Types.ObjectId,
        ref:"User"
    },
    likes:[
        {
            type:Schema.Types.ObjectId,
            ref:"User"
        }
    ],
    post:{
        type:Schema.Types.ObjectId,
        ref:"Post"
    }
})
export default mongoose.model("Comment",CommentSchema)