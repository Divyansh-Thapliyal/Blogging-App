import React from 'react';
import { useState } from 'react';
import axios from 'axios';

// import img1 from '../../img-1.jpeg';
const Register = () => {

  const [username,setUserName]=useState("");
  const [email,setEmail]=useState("");
  const [password,setPassword]=useState("");
  const [err,setErr]=useState(false);

  

  const handleSubmit=async (e)=>
  {
    e.preventDefault();
    
  }
  return ( 
    <>
    <div className='flex justify-end mr-4'>
    <a href="/login"><button className='rounded-md p-2 text-white text-center  bg-red-400'>Login</button></a><br></br>
    </div>
  <div className='mt-28 flex-col mb-16'>
    <div className='flex justify-center mb-5'>
      <p className='text-2xl font-bold '>Register</p>
    </div>
    <div className=' flex justify-center'>
      <form className='m-1' onSubmit={handleSubmit}>
      <label className='m-2'>Username</label> <br></br>
         <input className='m-2' type="text" placeholder='Enter your username....' onChange={(e)=>setUserName(e.target.value)} value={username}/><br></br>
         <label className='m-2'>Email</label> <br></br>
         <input className='m-2' type="email" placeholder='Enter your email....' onChange={(e)=>setEmail(e.target.value)} value={email}/><br></br>
         <label className='m-2'>Password</label><br></br>
         <input className='m-2' type="password" placeholder='Enter your password....' onChange={(e)=>setPassword(e.target.value)} value={password}/><br></br>
       <button  type="submit" className='rounded-md p-3 text-black text-center m-2 flex justify-center bg-green-900 w-3/4'>Register</button><br></br>
      </form>
      </div>
       
      {err && <span className='text-red-600  flex justify-center'>Wrong or Invalid Credentials</span> }
      
    
    </div>
    </>
  )
}

export default Register
