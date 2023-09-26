import React from 'react'
import Post from './Post'

const Posts = (props) => {

  //  const posts=props
  return (<div className='flex flex-wrap justify-center'>

      {props.posts.map((p)=>{return <Post key={p.id} post={p}></Post>})}
      
    </div>
  )
}

export default Posts
