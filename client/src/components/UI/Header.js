import React from 'react';
import img1 from '../../img-1.jpeg';

const Header = () => {
  return (
    <>
    <div className=' flex-col justify-center m-2 '>
        <div className='flex justify-center font-mono text-gray-600 '>React & Node</div>
        <div className='flex justify-center font-sans text-6xl text-black'>Blog</div>
    </div>
    <div className=' w-full h-96'>
        <img className=" w-full h-96" src={img1}/>
    </div>
    </>
  )
}

export default Header
