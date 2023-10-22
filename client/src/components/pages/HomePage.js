import React from 'react'
import { useState,useEffect } from 'react'
import Header from '../UI/Header'
import Posts from '../posts/Posts'
import SideBar from '../UI/SideBar'
import axios from 'axios';
import { useLocation } from 'react-router-dom'

const HomePage = () => {

  const [posts,setPosts]=useState([]);

  const location=useLocation();
  const search=location.search; // if location is localhost:3000/?user=Jack then this search property will contain ?user=Jack.No need to remember this.
  // Just console.log(location) and get whatever needed.
  // Here i cant use useParams to achieve same functionality.



 // Earlier
  // const fetchPosts=async()=>{
  //   const res= await axios.get('/api/posts');
  //   // console.log(res);
  //   setPosts(res.data);
  // }

  // useEffect(()=>{
  //    fetchPosts();
  // },[])


  //After
const fetchPosts=async()=>{
    const res= await axios.get('/api/posts'+search);
    // console.log(res);
    setPosts(res.data);
  }

  useEffect(()=>{
     fetchPosts();
  },[search])
  

  return (
    <div>
      <Header></Header>
      <div className='flex'>
      <div className='flex w-3/4 h-auto '>
      <Posts posts={posts}></Posts>
      </div>
      <div className='flex w-1/4 h-fit justify-end m-2'>
      <SideBar ></SideBar>
      </div>
      </div>
     
    </div>
  )
}

export default HomePage
