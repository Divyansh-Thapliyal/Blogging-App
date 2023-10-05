
const mongoose=require('mongoose');

const UserSchema=new mongoose.Schema({
    username:{type:String,required:true,unique:true},
    email:{type:String,required:true,unique:true},
    password:{type:String,required:true},
    profilePic:{type:String,default:""},

},{timestamps:true}); // Either we create created data,updated date inside schema or use this shortcut.This will automatically do the same for us.


// module.exports=mongoose.model('User',UserSchema);

// When using same model twice or more, code this way

module.exports =mongoose.model('User', UserSchema);