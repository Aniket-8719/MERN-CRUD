const express = require("express");
const mongoose = require("mongoose");
const interns = require("../models/Interns");

const router = express.Router(); 
 

// create intern
router.post("/", async(req, res)=>{
    const {name, email, position, experience} = req.body;
    try{
        const internAdd = await interns.create({
            name:name,  
            email:email,
            position:position,
            experience:experience,
        });
        res.status(201).json(internAdd);
    }catch(err){ 
        console.log(err); 
        res.send(400).json({err:err.messages});
    }
});

//  Get All intern 
router.get("/", async(req, res)=>{
    try{
        const AllInterns = await interns.find();
        res.status(200).json(AllInterns);
    }catch(err){
        res.send(500).json({err: err.messages});
    }
});

// get single intern
router.get("/:id", async(req, res)=>{
    const {id} = req.params;
    try{
        const SingleIntern = await interns.findById({_id: id});
        res.status(200).json(SingleIntern);
    }catch(err){
        res.send(500).json({err: err.messages});
    }
});

// delete single intern
router.delete("/:id", async(req, res)=>{
    const {id} = req.params;
    try{
        const deleteIntern = await interns.findByIdAndDelete({_id: id});
        res.status(200).json(deleteIntern);
    }catch(err){
        res.send(500).json({err: err.messages});
    }
});


// update  interns
router.put("/:id", async(req, res)=>{
    const {id} = req.params;
    const {name, email, position, experience} = req.body;
    try{
        const updateIntern = await interns.findByIdAndUpdate(id, req.body, {new:true});
        res.status(200).json(updateIntern);
    }catch(err){
        res.send(500).json({err: err.messages});
    }
});


module.exports = router;