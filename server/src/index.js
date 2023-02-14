require("dotenv").config();

const express = require("express")
const mongoose=require('mongoose')
const app = express()
const cors = require("cors");
const connectDatabase = require("./database/db") 
 // to connect MongoDB
mongoose.set("strictQuery", true);

const userRouter = require("./routes/user/user.router");  
const productRouter = require("./routes/product/products.router");  
// All Routers 

const PORT = process.env.PORT || 3005


// Deafult Midllewares
app.use(express.json())
app.use(express.urlencoded({extended : true}))
app.use(cors());


// Routes
app.use("/user", userRouter)
app.use("/api", productRouter);
// app.use("/api/v1/", productRouter);


app.use("/", (req,res)=>{
    res.status(200).send("Server Started")
})

app.listen(PORT , async ()=>{
    await connectDatabase() // connnection Database
    console.log(`Server Started on Port ${PORT}`)
})



//npm i argon2 bcrypt cors dotenv express jsonwebtoken mongoose nodemon body-parser