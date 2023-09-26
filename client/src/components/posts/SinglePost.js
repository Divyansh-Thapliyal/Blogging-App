import React, { useContext, useEffect } from 'react';
import axios from 'axios';
import {useLocation} from 'react-router';
import {useState} from 'react';

const SinglePost = () => {

  const location=useLocation();  // this is a hook. It will provide me with an object with one property as pathname that contains the full address 
  // i.e http://..../api/post/..(id)..
  // console.log(location); // see this to understand what I am getting.
  const path=location.pathname.split("/")[2]; // 2 bcz if I see pathname I am getting my id at index2 if i split it acc to '/'.

  const [post,setPost]=useState([]);
  const [title,setTitle]=useState("");
  const [desc,setDesc]=useState("");
  const [updateMode,setUpdateMode]=useState(false);
  
  
  return (
    <div className='flex-col m-2'>
      
      {post.photo &&
      <div className='m-2'>
         <img src={post.photo} className='h-64 w-full rounded-md'/>
      </div>
      }

      <div className='flex'>
        <div className='w-1/2 text-right'>
          {updateMode && <input type="text" placeholder='Enter title' value={title} onChange={(e)=>setTitle(e.target.value)}/>}
        {!updateMode && <span className='font-extrabold text-xl'>{post.title}</span>}
        </div>
        {user && post.username===user.username&& !updateMode &&
        <div className='w-1/2 text-right  '>
        <i class="fa-solid fa-pen-to-square bg-re m-2 text-blue-950 hover:cursor-pointer" onClick={()=>{setUpdateMode(true)}}></i>
        <i class="fa-solid fa-trash m-2 text-red-500 hover:cursor-pointer" onClick={handleDelete}></i>
      
        </div>
         }
      </div>


      <div className='flex-col'>
       <div className='flex'>
       <p className='w-1/2 text-left'>Author:<a href={`/?user=${post.username}`}>{post.username}</a></p>
       <p className='w-1/2 text-right'>{new Date(post.createdAt).toDateString()}</p>
       </div>
       {updateMode && <textarea type="text" placeholder='Enter description' value={desc} onChange={(e)=>setDesc(e.target.value)}/>}
       <br></br>
        {!updateMode && <span>{post.desc}</span>}
        {updateMode && <button className='bg-green-800 p-2 text-white flex justify-center rounded-md' onClick={handleEdit}>Update</button>}
      </div>


      {/* <div className='flex justify-center'>
        <div className='flex'>
       </div>
      </div>
       */}
      </div>
  )
}

export default SinglePost
