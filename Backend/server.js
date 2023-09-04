const dotenv = require("dotenv").config(); // Invoke the config function
const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser"); // Corrected typo
const cors = require("cors");

const app = express();
const PORT = process.env.PORT || 5000; // Corrected case of 'PORT'
const userRoute=require("./routes/userRoute");
//Middlewares
app.use(express.json());
app.use(express.urlencoded({extended: false}));
app.use(bodyParser.json());


//Routes Middleware
app.use("/api/users",userRoute);




//Routes
app.get("/",(req,res)=>{
  res.send("Main Home Page");
})

// connect with mongoose
mongoose.set('strictQuery', false);
mongoose
  .connect(process.env.MONGO_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    app.listen(PORT, () => {
      console.log(`Server started at port ${PORT}`);
    });
  })
  .catch((err) => console.error(err));
