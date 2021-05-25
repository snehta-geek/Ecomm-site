
import express from "express";
// import data from "./ProductData.js";
import mongoose from 'mongoose';
import userRouter from "./routers/userRouter.js";
import productRouter from "./routers/productRouter.js";
import dotenv from 'dotenv';
import orderRouter from "./routers/orderRouter.js";

dotenv.config();

const app=express();
app.use(express.json());
app.use(express.urlencoded({extended:true}));

mongoose.connect(process.env.MONGODB_URL ||'mongodb://127.0.0.1:27017/amontronDB',{
    useNewUrlParser:true,
    useUnifiedTopology:true,
    useCreateIndex:true
})
.then(() => console.log("Database Connected Successfully"))
    .catch(err => console.log(err));



app.get('/',(req,res)=>{
    res.send("Hello World!!!");
})


app.use('/api/users',userRouter);
app.use('/api/products',productRouter);
app.use('/api/orders',orderRouter);
app.get('/api/config/paypal', (req,res) => {
    res.send(process.env.PAYPAL_CLIENT_ID || 'sb');
})

app.use((err,req,res,next) =>{
    res.status(500).send({message:err.message});
})

// if Product object's id is matched with requested param id then it returns specified matched id's object into product(var)

const port = process.env.PORT || 8095;
// hero
if(process.env.NODE_ENV === "production"){
    app.use(express.static("frontend-site/build"));
}

app.listen(port,()=>console.log("Server started....")); 