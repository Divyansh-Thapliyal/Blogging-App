import React from 'react'
import { useState,useEffect } from 'react'
import SideBar from '../UI/SideBar'
import { useLocation } from 'react-router-dom'

const HomePage = () => {



  return (
    <div>
      <div className='flex'>
      <div className='flex w-1/4 h-fit justify-end m-2'>
      <SideBar ></SideBar>
      </div>
      </div>
     
    </div>
  )
}

export default HomePage
