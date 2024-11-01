import mongoose ,{Schema} from "mongoose";

const UserSchema = new Schema({
    username:{
    type:String,
    required:true,
    unique:true
    },
    email:{
        type:String,
        required:true,
        unique:true 
    },
    password:{
        type:String,
        required:true
    },
    isAdmin:{
        type:Boolean,
        default:false
    },
    isActive:{
        type:Boolean,
        default:false,
        
    },
    posts:[
        {
            type:Schema.Types.ObjectId,
            ref:"Post"
        }
    ]
})

export const User = mongoose.model("User",UserSchema)