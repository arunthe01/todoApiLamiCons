const express = require('express');
const router = express.Router();
const todomodel = require('../models/todomodel');



router.get('/',async(req,res)=>{
   try{
    const data = await todomodel.find();
    res.send(data);
   }catch(e){
        res.send(e.message);
   }
});

router.get('/:id',async(req,res)=>{
    var id = req.params.id;
    try{
        const data = await todomodel.findById(id);
        res.send(data);
       }catch(e){
            res.send(e.message);
       }

})

router.post('/',async(req,res)=>{
    const {item,title} = req.body;
    try{
       const data = await todomodel.collection.insertOne({item,title})
        res.send(data);
    }catch(e){
        res.send(e.message);
    }
})

router.delete('/delete/:id',async(req,res)=>{
    var id = req.params.id;
    try{
        const data = await todomodel.findByIdAndRemove(id);
        res.send(data);
    }catch(e){
        res.status(404);
        res.send(e.message);
    }
})

router.put('/put/:id',async(req,res)=>{

    var id = req.params.id;
    const {item,title,status} = req.body;

    try{
        const data = await todomodel.findByIdAndUpdate(id,{
            item,title,status:false
        });
        res.send(data);
    }catch(e){
        res.status(404);
        res.send(e.message);
    }

});


module.exports = router;