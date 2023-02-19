require("dotenv").config();

const { Router } = require("express");
const { registerUser, loginUser, GetUsers, cartPost } = require("../../controllers/user.controller");
const { privateRoute } = require("../../middleware/authMiddleware");
const app = Router();



app.get("/",  GetUsers);

// Login Route
app.post("/register" , registerUser)

// Signup Route
app.post("/login", loginUser)

// Task Route
// protected with Private Routes
app.post("/cart", cartPost)

app.get("/cart", GetUsers)
app.get("/task/:id", privateRoute, GetUsers)

module.exports = app;