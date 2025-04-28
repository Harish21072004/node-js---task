// console.log("GE2025 batch 2 annd jjjj4");

const express = require('express');
const app=express();
const mongoose=require('mongoose');
const productRoute=require('./routes/product.route');
const dotenv=require('dotenv');
dotenv.config();
//Importing of Product schema
const Product=require('./models/product.model');
//Middleware to convert the json
app.use(express.json());
//Test api
app.get('/api', (req, res) => {
  res.send('Hello World');
});
//Listen to this port
app.listen(3001);
//routes
app.use('/api/products',productRoute);



//create an api to Get the products
// app.get('/api/products/:id',async(req,res)=>{
//     try{
//        const {id}=req.params;
//        const products=await Product.findById(id);
//        res.status(200).json(products);
//     }
//     catch{
//         res.status(500).json({message:error.message}); 
//     }
// })
//update a product
// app.put('/api/products/:id',async(req,res)=>{
//     try{
//         const {id}=req.params;
//         const product=await Product.findByIdAndUpdate(id,req.body);
//         if(!product){
//             return res.status(404).json({message: 'Product not found'});
//         }
//         const updateProduct =await Product.findById(id);
//         res.status(200).json(updateProduct);
//     }
//     catch{
//         res.status(500).json({message:error.message}); 
 
//     }
// })
//Delete a product
// app.delete('/api/products/:id',async(req,res)=>{
//     try{
//         const {id}=req.params;
//         const product=await Product.findByIdAndDelete(id);
//         if(!product){
//             return res.status(404).json({message: 'Product not found'});
//         }
//         return res.status(200).json({message:"product deleted successful"})      }
//         catch{
//             res.status(500).json({message:error.message}); 
     

//     }
// })
//Mongodb connection
mongoose.connect(process.env.MONGO_CONNECTION_STRING)
  .then(() => console.log('Connected!'));
