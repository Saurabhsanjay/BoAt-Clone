require("dotenv").config();

const { Router } = require("express");
const { registerUser, loginUser, GetUsers, cartPost, orderPost } = require("../../controllers/user.controller");
const { privateRoute } = require("../../middleware/authMiddleware");
const app = Router();



app.get("/",  GetUsers);

// Login Route
app.post("/register" , registerUser)

// Signup Route
app.post("/login", loginUser)

// cart Route
// protected with Private Routes
app.post("/cart", cartPost)
app.post("/order", orderPost);

app.get("/cart", GetUsers)
app.get("/cart/:id", GetUsers)

module.exports = app;