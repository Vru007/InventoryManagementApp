const mongoose=require("mongoose");

const userSchema=mongoose.Schema({

    name:{ 

        type:String,
        required:[true,"please provide your name"]
    },
    emaill:{
        type:String,
        required:[true,"please provide your email"],
        trim:true,
        unique:true,
        match:[
            /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/,"enter a valid email"
        ]
    },
    password:{
        type:String,
        required:[true,"please your password"],
        minlength:[6,"Password must be upto 6 characters"],
        maxlenght:[23,"Password must not be 23 character long"]

    },
    photo:{
        type:String,
        required:[true,"Please add a photo"],
        default:["https://i.ibb.copdndk1/avatar.png"]
    },
    phone:{
        type:String,
        default:"+91"
    },
    bio:{
        type:String,
        maxlenght:[250,"Bio must have upto 250 characters"]
    }
}
,
{
    timestamps:true;
})

const User=mongoose.model("user",userSchema)
module.exports=User
