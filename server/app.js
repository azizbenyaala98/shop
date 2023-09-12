const express = require('express');
const mongoose =require('mongoose');
const productRouter=require('./routes/productRoute')
const cors =require("cors");
require('dotenv').config()
const app = express()
app.use(cors());
app.use(express.json())
app.use('/api/v1/products',productRouter);
try {  mongoose.connect(process.env.mongodb);
  console.log(mongoose.connection.readyState)
} catch (error) {
  console.log(error)
  
}

app.listen(process.env.port,()=>{console.log(`Server is running on http://localhost:${process.env.port}`);
})