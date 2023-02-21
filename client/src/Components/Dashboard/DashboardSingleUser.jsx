import React from 'react'
import { useState, useEffect } from 'react';
import { useSelector,useDispatch } from 'react-redux';
import Cookies from 'universal-cookie';
import { getUserDetails } from '../../Redux/Action';
export const DashboardSingleUser = (props) => {
  const userDetails=useSelector(store=>store.userDetails);
const dispatch=useDispatch();
const {profile_pic,email,name,_id}=props;
const cookies=new Cookies();
const token =cookies.get('jwt');
const [follow,setFollow]=useState(true);
const handleFollow=async()=>{
  if(follow){
    userDetails.user.followers.push(_id);
    dispatch(getUserDetails(userDetails));
    try{
      const res=await fetch(`http://localhost:8080/profile/followers`,{
       method: 'PUT',
       body:JSON.stringify({followId:_id}),
       headers: {
         'Content-Type': 'application/json',
         'Authorization': 'Bearer ' + token,
       }
      })
      const data= await res.json();
      
      setFollow(false);
 } catch(e){
   console.log(e.message);
 }
  }
  else{
    userDetails.user.followers.remove(_id);
    dispatch(getUserDetails(userDetails));
    try{
      const res=await fetch(`http://localhost:8080/profile/unfollowers`,{
       method: 'PUT',
       body:JSON.stringify({unFollowId:_id}),
       headers: {
         'Content-Type': 'application/json',
         'Authorization': 'Bearer ' + token,
       }
      })
      const data= await res.json();
      setFollow(true);
 } catch(e){
   console.log(e.message);
 }
  }
}
const checkfollow=()=>{
 const exist= userDetails.user.followers.map(el=> console.log(el));
 console.log(exist);
}
useEffect(()=>{
checkfollow();
})
  return (
    <div class="profile-card">
                <div class="profile-pic">
                    <img src={profile_pic} alt=""/>
                </div>
                <div>
                    <p class="username">{name}</p>
                    <p class="sub-text">{email}</p>
                </div>
                <button class="action-btn" onClick={handleFollow}>{follow?"Follow" : "Following"}</button>
            </div>
  )
}
