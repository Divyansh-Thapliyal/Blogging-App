import React from 'react'
const Post = (props) => {
  

  return (
    <div className='flex-col w-5/12 justify-center m-4'>
      
      <div className='flex rounded-md justify-center'>
        <img src=""  className='rounded-md w-96'/>
      </div>
      <div className='flex justify-center text-gray-500'>
        {/* <p className='m-2'>Music</p>
        <p className='m-2'>Life</p> */}
        
        {props.post.categories.map((c)=><span className='m-2'>{c.name}</span>)}

      </div>
      <div className='flex justify-center text-2xl font-extrabold m-1'>
        <a href={`/post/${props.post._id}`}>{props.post.title}</a>
      </div>
      <div className='flex justify-center text-gray-500 m-1'>
        <p> {new Date(props.post.createdAt).toDateString()}</p>
      </div>
      <div className='flex justify-center text-center m-1'>
      <p>
      {props.post.desc}
      </p>
      </div>

    </div>
  )
}

export default Post
