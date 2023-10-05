const express=require('express');

const router=express.Router();
const User=require('../models/User');
const Post=require("../models/Post");
const bcrypt=require('bcrypt');


// Update

router.put('/:id', async (req,res,next)=>
{
    if(req.body.userId!==req.params.id)
    {
        res.status(500).json("You are not allowed to update this.Update your account only.");
    }
    if(req.body.password)
    {
        const salt=await bcrypt.genSalt(10);
        req.body.password=await bcrypt.hash(req.body.password,salt);
    }
    try{
         
        const updatedUser= await User.findByIdAndUpdate(req.params.id,{
            $set:req.body
            
        },{new:true});

        res.status(200).json(updatedUser); 
    }
    catch(err)
    {
         res.status(500).json(err);
    }
})


// delete

router.delete('/:id',async(req,res,next)=>
{
    if(req.body.userId!==req.params.id)
    {
        res.status(500).json("You are not allowed to delete this.Delete your account only.");
    }

    try
    {
        const user= await User.findById(req.params.id);
        try{
              await Post.deleteMany({username:user.username});
              await User.findByIdAndDelete(req.params.id);
             res.status(200).json("User has been deleted...");
        }
        catch(err)
        {      
         res.status(500).json(err);
        }
    }
    catch(err)
    {
         
        res.status().json("User not found.");
    }
    
});



// get

router.get("/:id",async(req,res,next)=>
{
    try
    {
         const user=await User.findById(req.params.id);
         res.status(200).json(user);
    }
    catch(err)
    {
        res.status(500).json(err);
    }
})







module.exports=router;