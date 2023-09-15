import React from 'react'
import { useState,useEffect } from 'react';
const SideBar = () => {


  return (
    <div className='flex-col justify-end w-fit bg-gray-200 p-4 mr-2 m-2'>
        <div className=' flex-col m-2 '>
        <hr className='border-2 border-gray-600 w-1/2 mr-auto ml-auto'></hr>
      <h1 className='text-center'>ABOUT ME</h1>
      <hr className='border-2 border-gray-600 w-1/2 mr-auto ml-auto'></hr>
        </div>
        <div className='flex justify-center'>
        <img src={img1} className='h-60 w-auto' alt="img"/>
        </div>
        <div className=' w-auto flex justify-center m-2'>
       <p>The Lorem ipsum text is derived from sections 1.10.32 and 1.10.33 of Cicero's De finibus bonorum et malorum.[7][8] The physical source may have been the 1914 Loeb Classical Library edition of De finibus, where the Latin text, presented on the left-hand (even) pages, breaks off on page 34 with "Neque porro quisquam est qui do-" and continues on page 36 with "lorem ipsum ...", suggesting that the galley type of that page was mixed up to make the dummy text seen today.[1]   
       </p>
      </div>
      <hr className='border-2 border-gray-600 w-1/2 mr-auto ml-auto'></hr>
      <h1 className='text-center'>CATEGORIES</h1>
      <hr className='border-2 border-gray-600 w-1/2 mr-auto ml-auto'></hr>
    <div className='flex justify-center'>
        <div className='flex-col m-4'>
        <p>Life</p>
        <p>Music</p>
        <p>Style</p>
        
        
        </div>
         <div className='flex-col m-4'>
        <p>Sport</p>
        <p>Study</p>
        <p>Study</p>
        </div>

    </div>
    <div className='flex-col'>
    <hr className='border-2 border-gray-600 w-1/2 mr-auto ml-auto'></hr>
      <h1 className='text-center'>FOLLOW US</h1>
      <hr className='border-2 border-gray-600 w-1/2 mr-auto ml-auto'></hr>
      
      <div className='w-80 flex justify-center'>
        <i className="fa-brands fa-facebook m-2 hover:cursor-pointer"></i>
        <i className="fa-brands fa-twitter m-2 hover:cursor-pointer"></i>
        <i className="fa-brands fa-pinterest m-2 hover:cursor-pointer"></i>
        <i className="fa-brands fa-square-instagram m-2 hover:cursor-pointer"></i>
        </div>
    </div>
    </div>
   
     
  )
}

export default SideBar
