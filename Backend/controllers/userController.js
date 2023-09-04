const asyncHandler=require("express-async-handler");
const User = require("../models/userModels");

const registerUser=asyncHandler(async(req,res)=>{

  const {name,email,password}=req.body

  if(!email || !name ||!password){
    res.status(400);
    throw new Error("Please fill all required fields");
  }

  //check for password length

  //check if email is alreay there or not

  const userExists = await User.findone({email});
  if(userExists){
    res.status(400);
    throw new Error("Email already exists");
  }

  //create new user
  

    
    res.send("Register User");
});

module.exports={
  registerUser,
}