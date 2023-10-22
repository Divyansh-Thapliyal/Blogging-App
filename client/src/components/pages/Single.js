import React from 'react'
import SideBar from '../UI/SideBar'
import SinglePost from '../posts/SinglePost'

const Single = () => {
  return (
    <div className='flex'>
        <div className='w-3/4 flex justify-center'>
      <SinglePost></SinglePost>
      </div>
       <div className='w-1/4 flex justify-end'>
      <SideBar></SideBar>
      </div>
    </div>
  )
}

export default Single
