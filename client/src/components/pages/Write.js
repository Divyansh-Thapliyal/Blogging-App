import React, { useContext, useState } from 'react'
import img1 from '../../img-1.jpeg';
import axios from 'axios';
import { Context } from '../../context/Context';

const Write = () => {

  const[title,setTitle]=useState("");
  const[desc,setDesc]=useState("");
  const[file,setFile]=useState(null);
  const {user}=useContext(Context);

  const handleSubmit= async (e)=>
  {
     e.preventDefault();
     const newPost={
       username:user.username,
       title,
       desc,
     }
     if(file) // this is related to multer code added in index.js.
     {
       const data=new FormData();
       const filename=Date.now()+file.name; // we are doing this so that diff img with same name can be inserted bcz their Date.now will be differnt and hence overall name will be different.
       data.append("name",filename);
       data.append("file",file);
       newPost.photo=filename;
      //  formData.append(name, value) – add a form field with the given name and value,

     try
     {
       await axios.post('/api/upload',data);
     }
     catch(err)
     {
       
     }
    }


     try
     {  
     const res=await axios.post('/api/posts',newPost);
     window.location.replace("/post/"+res.data._id);
     }
     catch(err)
     {

     }

     }

     
  return (
    <div className='flex-col w-3/4 ml-auto mr-auto  p-10'>
       {file &&<div className='flex m-8'>
        <img src={URL.createObjectURL(file)} className='h-96 rounded-lg w-full'/>
       </div>}
       <div className='m-8'>
        <form className='flex-col' onSubmit={handleSubmit}>
            
            <div className='m-4 text-2xl '>
            <label for="file" className='m-2'><i class="fa-solid fa-circle-plus"></i></label>
            <input type="file" id="file" className='hidden' onChange={(e)=>setFile(e.target.files[0])}/>
            <input type="text" placeholder="Title" className='focus:outline-none w-3/4 m-4' onChange={(e)=>setTitle(e.target.value)} value={title}/>
            </div>
            <div className='ml-10 text-xl '>
            <textarea type="text" rows={5} placeholder='Tell your story...' className='focus:outline-none w-3/4 m-4' onChange={(e)=>setDesc(e.target.value)} value={desc}/> 
            </div>
            <button type="submit" className='bg-green-950 rounded-md p-2 text-white'>Publish</button>
        </form>
       </div>
    </div>
  )
}

export default Write
