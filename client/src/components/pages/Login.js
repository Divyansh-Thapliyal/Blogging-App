import React, { useContext } from 'react'
import { useState } from 'react';
import { Context } from '../../context/Context';
import axios from 'axios';
// import img1 from '../../img-1.jpeg';
const Login = () => {


  // Note:Once login I need that user data to be accessible everywhere bcz we need it in almost every page.For this I have used context api.We can use redux also or any other state
  // management tool but since it is a simple application context api will work fine.
  const [username,setUserName]=useState("");
  const [password,setPassword]=useState("");
  const {dispatch,isFetching}=useContext(Context);
  

  const handleSubmit=async (e)=>
  {
    e.preventDefault();
     dispatch({type:"LOGIN_START"});

    try
    {
       const res=await axios.post("api/auth/login",{username:username,password:password});
        dispatch({type:"LOGIN_SUCCESS",payload:res.data});
    }
    catch(err)
    {
           dispatch({type:"LOGIN_FAILURE"});
    }
  }
  // Now we want to store our user to our localStorage so that it doesnt get remove on refresh.So need to do a little change in Context.js.
  
  return ( 
  <div className='mt-28 flex-col'>
    <div className='flex justify-center'>
      <p className='text-2xl font-bold '>Login</p>
    </div>
    <div className=' flex justify-center'>
      <form className='m-1' onSubmit={handleSubmit}>
         <label className='m-2'>UserName</label> <br></br>
         <input className='m-2' type="text" placeholder='Enter your username....' value={username} onChange={(e)=>setUserName(e.target.value)}/><br></br>
         <label className='m-2'>Password</label><br></br>
         <input className='m-2' type="password" placeholder='Enter your password....' value={password} onChange={(e)=>setPassword(e.target.value)} /><br></br>
         <button type="submit" className={`rounded-md p-3 text-white text-center w-44 bg-red-400 m-4 ${isFetching && 'opacity-20 bg-black'}`} disabled={isFetching}>Login</button><br></br>
      </form>
      </div>
      <div className='flex justify-center'>
      <button className='rounded-md p-3 text-black text-center border-2 border-black m-4 flex justify-center'><a href="/register">Register</a></button><br></br>
      </div>
    
    </div>
  )
}

export default Login
