import React from 'react'
import { useState } from 'react';
import { useEffect } from 'react';
import Cookies from 'universal-cookie';

export const SingleComments = (props) => {
const cookies = new Cookies();
const token= cookies.get('jwt')
const [state,setState]=useState({})
const fetchUser =async()=>{
  try{
    const res=await fetch(`http://localhost:8080/profile/search/${props.postedBy}`,{
     method: 'GET',
     headers: {
       'Content-Type': 'application/json',
       'Authorization': 'Bearer ' + token,
     }
    })
    const data= await res.json();
  setState(data);
    
} catch(e){
 console.log(e.message);
}
}
// {text: 'Kya Baat hi', postedBy: '63c6c3f71c61922a79a0fcff', _id: '63c6ee24b0268073d004e01c'}
useEffect(()=>{
  fetchUser();
},[])
  return (
    <>
    { Object.keys(state).length>0 ?  <div style={{display:'flex',width:'100%',alignItems:'center'}}>
       
            <img style={{width:'30px',height:'30px',borderRadius:'50%',margin:'10px 15px 10px 0'}} src={state.user_exists.profile_pic ?state.user_exists.profile_pic :"https://www.shutterstock.com/image-vector/default-avatar-profile-trendy-style-260nw-1759726295.jpg"} alt="" />
       
        <div style={{fontSize:'14px'}}>
         <span style={{fontWeight:'bold',fontSize:'14px',marginRight:'8px'}}>{state.user_exists.name}</span>{props.text}
        </div>
    </div> : null}
    </>
  )
}
