import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
const NavBar = () => {


  const handleLogout=()=>
  {

  }
  return (
    <div className="flex  h-auto p-2 " href="/a">
        <div className=' w-80 flex justify-center'>
        <i className="fa-brands fa-facebook m-2 hover:cursor-pointer"></i>
        <i className="fa-brands fa-twitter m-2 hover:cursor-pointer"></i>
        <i className="fa-brands fa-pinterest m-2 hover:cursor-pointer"></i>
        <i className="fa-brands fa-square-instagram m-2 hover:cursor-pointer"></i>
        </div>

        <div className=' w-full flex justify-center'>
          <a className='m-2 text-gray-500 ' href="/">HOME</a>
          <a className='m-2 text-gray-500' href="/about">ABOUT</a>
          <a className='m-2 text-gray-500' href="/contact">CONTACT</a>
          <a className='m-2 text-gray-500' href="/write">WRITE</a>
          {user&&<a className='m-2 text-gray-500 hover:cursor-pointer' onClick={handleLogout}>LOGOUT</a>}
        </div>

        <div className=' w-80 flex justify-center'>
        <a href="/settings"><img className="w-10 h-10 hover:cursor-pointer bg-red-400 border-2" alt="img" src={user?PF+user.profilePic||"":""} ></img></a>
        {/* {!user&&<a className='m-2 text-gray-500' href="/login">LOGIN</a>}
        {!user&&<a className='m-2 text-gray-500' href="/register">REGISTER</a>}
        */}
        <i className="fa-solid fa-magnifying-glass m-2"></i>
        </div>

    </div>
  )
}

export default NavBar
