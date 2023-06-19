const express = require('express');
const app = express();
const mongoose = require('mongoose');
const api = require('../api/routes/todo');

const connect = async ()=>{

    try{
        await mongoose.connect("mongodb://127.0.0.1:27017");
    }catch(e){
        console.log("database connection error");
    }
}

connect();

app.use(express.json());

app.use('/todo',api);

app.listen(5000, (req,res)=>{
    console.log("listening on port 5000")
})


