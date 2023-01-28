import React from 'react'
import { useState } from 'react'

import { useEffect } from 'react'
import { SinglePost } from './SinglePost'
export const Posts = () => {
    const [posts,setPosts]= useState([]);
    const display = async()=>{
      try{
           const res=await fetch(`http://localhost:8080/post/getcreatepost`,{
            method: 'GET',
            headers: {
              'Content-Type': 'application/json',
              'Authorization': 'Bearer ' + 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOiI2M2M2ZjNjZjU2YmZlZWVhYjc3MDQ3ODAiLCJpYXQiOjE2NzQ4NDYxNDYsImV4cCI6MTY3NTI3ODE0Nn0.mmxWDUf0o2EttaUjG7CMtbewmr1gW4u6axCh7XA8Yy4',
            }
           })
           const data= await res.json();
           setPosts(data.data);
        //    console.log(data);
      } catch(e){
        console.log(e.message);
      }
    }
    useEffect(()=>{
          display();
    },[]
        )
  return (
    <section class="main post-main">
    <div class="wrapper">
        <div class="left-col">
           { setPosts.length>0 ?posts.map(el=> <SinglePost {...el} />) : <h1>Loading...</h1> }
        </div>
    </div>
</section>
  )
}
