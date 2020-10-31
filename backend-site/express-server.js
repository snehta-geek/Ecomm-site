const express=require('express');
const app=express();
const bodyparser=require('body-parser');

app.use(bodyparser.urlencoded({extended:false}))
app.use(bodyparser.json());


app.listen(8085,()=>console.log("Server started...."));

app.get('/',(req,res)=>{
    res.send("Hello World");
})