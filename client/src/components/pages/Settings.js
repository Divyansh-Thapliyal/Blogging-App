import React, { useContext } from 'react'
import SideBar from '../UI/SideBar'
import { Context } from '../../context/Context';
import { useState } from 'react';
import axios from 'axios';


const Settings = () => {

  const[file,setFile]=useState(null);
  const [username,setUserName]=useState("");
  const [email,setEmail]=useState("");
  const [password,setPassword]=useState("");
  const [updated,setUpdated]=useState(false);
  
  
  
  const {user,dispatch}=useContext(Context);
  const PF="http://localhost:5000/images/"

  const handleSubmit= async (e)=>
  {
     e.preventDefault();
     dispatch({type:"UPDATE_START"});
     const updatedUser={
       userId:user._id,
       username,
       email,
       password
     }
     if(file) // this is related to multer code added in index.js.
     {
       const data=new FormData();
       const filename=Date.now()+file.name; // we are doing this so that diff img with same name can be inserted bcz their Date.now will be differnt.
       data.append("name",filename);
       data.append("file",file);
       updatedUser.profilePic=filename;

     try
     {
       await axios.post('http://localhost:5000/api/upload',data);
     }
     catch(err)
     {
       
     }
    }


     try
     {  
      
      const res=await axios.put('/api/users/'+user._id,updatedUser);
      dispatch({type:"UPDATE_SUCCESS",payload:res.data});
      
      setUpdated(true);
       setTimeout(()=>
       {
          setUpdated(false);
       },1000)
     }
     catch(err)
     {
      dispatch({type:"UPDATE_FAILURE"});
      
     }

     }
  


  return (
    <div className='flex  '>
      <div className='w-3/4 flex-col m-2 p-2'>
        <div className='flex justify-between mb-4'>
          <p className='text-red-300 text-3xl'>Update Your Account</p>
          <button className='text-red-500'> Delete Account</button>
        </div>


        <div className='w-full'>
          <form onSubmit={handleSubmit}>
          <div className='flex-col mb-4'>
           <label>Profile Picture</label>
           <div className='flex '>
           <img src={file?URL.createObjectURL(file):PF+user.profilePic}  className='w-10 h-10 rounded-lg m-2 border-2'></img>
           <label htmlFor='fileInput'><i class="fa-regular fa-user m-2 mt-4 text-red-500 hover:cursor-pointer"></i></label>
           <input type="file" id="fileInput" className='hidden' onChange={(e)=>setFile(e.target.files[0])}/>
           
           </div>
           
          </div>
        
            <label for="userName">Username</label><br></br>
            <input type="text" onChange={(e)=>setUserName(e.target.value)} value={username}/><br></br>
            <hr></hr>
            <label for="email">Email</label><br></br>
            <input type="email" onChange={(e)=>setEmail(e.target.value)} value={email} /><br></br>
            <hr></hr>
            <label for="password">Password</label><br></br>
            <input type="Password" onChange={(e)=>setPassword(e.target.value)} value={password} /><br></br>
            <hr></hr>
            <button type="submit" className='flex justify-end rounded-md bg-green-950 p-3 m-3 text-white'>Update</button>
          </form>

          {updated&& <span>updated Successfully!</span>}
        </div>


      </div>
      <div className='w-1/4'>
        <SideBar ></SideBar>
      </div>
    </div>
  )
}

export default Settings
