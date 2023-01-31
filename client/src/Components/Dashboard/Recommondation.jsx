import React from 'react'
import image9 from '../../img/cover 9.png'

import { useDispatch, useSelector } from 'react-redux'
import { useEffect } from 'react'
import { getAllUsers, userLoggedIn } from '../../Redux/Action'
import { DashboardSingleUser } from './DashboardSingleUser'
import Cookies from 'universal-cookie'
export const Recommondation = () => {
  const cookies = new Cookies();
 const token= cookies.get('jwt')
    const data =useSelector(store=>store);
    const dispatch=useDispatch();
    const fetchAllUser= async ()=>{
        try{
            const res=await fetch(`http://localhost:8080/user`,{
             method: 'GET',
             headers: {
               'Content-Type': 'application/json',
               'Authorization': 'Bearer ' + token,
             }
            })
            const data= await res.json();
            dispatch(getAllUsers(data.data));
       } catch(e){
         console.log(e.message)
       }
    }
    const logout=()=>{
      dispatch(userLoggedIn(false));
      cookies.remove('jwt')
    }
    useEffect(()=>{
        fetchAllUser();
    },[])
  return (
    <section class="section-main">
    <div class="wrapper"> 
        <div class="right-col">
           {
            data.userDetails.user?
            <div class="profile-card">
            <div class="profile-pic">
                <img src={data.userDetails.user? data.userDetails.user.profile_pic :image9} alt=""/>
            </div>
            <div>
                <p class="username">{data.userDetails.user.name}</p>
                <p class="sub-text">{data.userDetails.user.email}</p>
            </div>
            <button class="action-btn" onClick={logout}>switch</button>
        </div>:
        <p>Loading....</p>
           }
            <p class="suggestion-text">Suggestions for you</p>
            {
                data.alluser?
                data.alluser.map(el=><DashboardSingleUser {...el} />):
                <h5>No Suggestion for You</h5>
            }
           
        </div>
    </div>
</section>
  )
}
