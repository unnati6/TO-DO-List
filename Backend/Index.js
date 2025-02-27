import express from'express';
import cors from 'cors';
import mongoose from "mongoose";
import bodyParser from "body-parser";
import router from './Router/TodolistRouter.js';
const app = express();
app.use(cors());
app.use(bodyParser.json());

//connect with db

mongoose.connect("mongodb://localhost:27017/TODOLIST")
.then(()=>{
    app.listen(4000,()=>{
        console.log("Database Connected")
    })
})

.catch((error)=>{
    console.log(error)
})
app.use('/api',router);