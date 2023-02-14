require("dotenv").config();

const { Router } = require("express");
 const productController = require("../../controllers/product.controller");



const app = Router();

 app.post("/products", productController.createProduct);
app.get("/getallproducts",productController.getAllProducts);


module.exports=app;
