import React from 'react'
import { useState } from 'react'

import { useEffect } from 'react'
import { useDispatch ,useSelector} from 'react-redux'
import { getUserDetails, postImages } from '../../Redux/Action'
import { SinglePost } from './SinglePost'
import Cookies from 'universal-cookie'
export const Posts = () => {
  const cookies = new Cookies();
    const store= useSelector(store=>store.postImages)
  const token= cookies.get('jwt')
    const dispatch =useDispatch();
    const fetchUserDetails= async ()=>{
      try{
          const res=await fetch(`http://localhost:8080/user/loggedInUser`,{
           method: 'GET',
           headers: {
             'Content-Type': 'application/json',
             'Authorization': 'Bearer ' + token,
           }
          })
          const data= await res.json();
          dispatch(getUserDetails(data));
        //  return data;
     } catch(e){
       console.log(e.message)
     }
  }
    const display = async()=>{
      try{
           const res=await fetch(`http://localhost:8080/post/getcreatepost`,{
            method: 'GET',
            headers: {
              'Content-Type': 'application/json',
              'Authorization': 'Bearer ' + token,
            }
           })
           const data= await res.json();
           dispatch(postImages(data.data))
           console.log(data);
      } catch(e){
        console.log(e.message);
      }
    }
    useEffect(()=>{
          display();
          fetchUserDetails();
          
    },[]
        )
  return (
    <section class="main post-main">
    <div class="wrapper">
        <div class="left-col">
           {store&&store.length>0 ?store.map(el=> <SinglePost {...el} />) : <h1>Loading...</h1> }
        </div>
    </div>
</section>
  )
}
