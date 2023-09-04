const mongoose=require("mongoose");

const userSchema=mongoose.Schema({

    name:{
        type:String,
        required:[true,"Please add name"]
    },
    email:{
        type:String,
        required:[true,"Please add an email"],
        trim:true,
        unique:true,
    },
    password:{
        type:String,
        required:[true,"Please add a password"],
        minlength:[6,"Passowrd must be upto 6 character"],
        maxlength:[23, "Password must be upto 23 character"],
    }
    //,
    // photo:{
    //     type:String,
    //     required:[true,"Please add photo"],
    //     default:"https://i.ibb.co/4pDNDk1/avatar.png"
    // },
    // phone:{
    //     type:String,
    //     default:"+91"
    // }
},{
    timestamps:true
})

const User=mongoose.model("User",userSchema)
module.exports=User