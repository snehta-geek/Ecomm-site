import express from "express";
import expressAsyncHandler from "express-async-handler";
import productModel from "../models/productModel.js";
import data from "../ProductData.js";

const productRouter=express.Router();

productRouter.get('/',expressAsyncHandler(async(req,res) => {
    const products=await productModel.find({});
    res.send(products);
}))

productRouter.get('/seed',expressAsyncHandler(async(req,res) =>{
    const createdProducts=await productModel.insertMany(data.Products);
    res.send({createdProducts});
}))
 
productRouter.get('/:id',expressAsyncHandler(async(req,res) => {
    const product=await productModel.findById(req.params.id);
    if(product){
        res.send(product);
    }else{
        res.status(404).send({message: 'Product Not Found'});
    }
}));

export default productRouter;