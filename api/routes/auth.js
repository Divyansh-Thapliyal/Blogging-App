const express=require('express');
const router=express.Router();

const User=require("../models/User");
const bcrypt=require('bcrypt');

//Register
// this is working fine but in our database password is visible.To prevent that add npm install bcrypt.
router.post('/register',async(req,res,next)=>
{
    try{
        
        const salt=await bcrypt.genSalt(10);
        const hashPassword=await bcrypt.hash(req.body.password,salt);
        const newUser=new User({
            username:req.body.username,
            email:req.body.email,
            password:hashPassword
        });
        const user=await newUser.save();
        res.status(200).json(newUser);
    }   
    catch(err)
    {
         res.status(500).json(err);
    }
});

// Login
 router.post('/login',async(req,res,next)=>
 {
     try{
           const user= await User.findOne({username:req.body.username}); // findOne since email is unique
           if(!user)
           {
             return res.status(400).json("Wrong credentials");
           }
           const validate= await bcrypt.compare(req.body.password,user.password);
           if(!validate)
           {
              return res.status(400).json("Wrong credentials");
           }
           res.status(200).json(user);
     }
     catch(err)
     {
        res.status(500).json(err);
     }
 })



module.exports=router;