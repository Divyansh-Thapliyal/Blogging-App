
const express= require("express");

const router=express.Router();
const Post=require("../models/Post");

// create post
router.post('/',async (req,res,next)=>
{
    const newPost=new Post(req.body);
    try{
         
        const savedPost=await newPost.save();
        res.status(200).json(savedPost);
    }
    catch(err)
    {
        res.status(500).json(err);
    }
})

// update post
// Remember we cant use alert here.

router.put('/:id',async (req,res,next)=>
{
     const newPost=new Post(req.body.data);

    let post;
    // alert(2);
    console.log(2);
    try{
         
         post=await Post.findById(req.params.id);
        // alert(3);
        
    console.log(3);
    }
    catch(err)
    {
        // alert(4);
        
    console.log(4);
        res.status(500).json(err);

    }
     console.log(newPost);

          if(post && post.username===req.body.data.username)
           {
            try{
                console.log(5);
                 const updatedPost=await Post.findByIdAndUpdate(req.params.id,
                    {
                        username:req.body.data.username,
                        desc:req.body.data.desc,
                        title:req.body.data.title
                    });
                //  alert(5);
                
                 console.log(6);
                 res.status(200).json(updatedPost);
                
            }
           catch(err)
           {
            // alert(6);
            
    console.log(7);
               res.status(500).json(err);
           }
           }
           else
           {
            // alert(7);
            
    console.log(7);
             res.status(500).json("Can update your post only.");
           }
        
    }
    
)

// delete post


router.delete('/:id',async (req,res,next)=>
{
    
    try{
         
        const post=await Post.findById(req.params.id);
        
           if(post.username===req.body.username)
           {
            try{
                 await Post.findByIdAndDelete(req.params.id);
                 res.status(200).json("Post deleted");
            }
           catch(err)
           {
               res.status(401).json("Can delete your post only.");
           }
           }
        
        
        // res.status(200).json();
    }
    catch(err)
    {
        res.status(500).json(err);
    }
})

// get post

router.get('/:id',async (req,res,next)=>
{
    try{
         
        const post=await Post.findById(req.params.id);
        
        res.status(200).json(post);
    }
    catch(err)
    {
        res.status(500).json(err);
    }
})

// get all post

router.get('/',async (req,res,next)=>
{
    // if path is /?user="John" I want post where username is john.
    // if path is /?cat="music" I want post where category is music.
    // For this we use query like down below.
    const username1=req.query.user;
    const catName1=req.query.cat;
    try{
         
        let posts;
        if(username1)
        {
            posts=await Post.find({username:username1});
        }
        else if(catName1)
        {
              posts=await Post.find({categories:{$in:[catName1]}}); // this tell if the following array contains this particular item.For this we use in method.
        }
        else{
             posts=await Post.find();
        }
        res.status(200).json(posts);
    }
    catch(err)
    {
        res.status(500).json(err);
    }
})

// Note: in post we need to upload img as well.For this add npm install multer.This is a library that can upload our files.We can use firebase or 
// amazon aws or whatever any cdn but for basic practice we can upload inside our api.





module.exports=router;