import React from 'react'
import image1 from '../img/cover 1.png'
import image2 from '../img/cover 2.png'
import option from '../img/option.PNG'
import like from '../img/like.PNG'
import comment from '../img/comment.PNG'
import send from '../img/send.PNG'
import save from '../img/save.PNG'
import smile from '../img/smile.PNG'
import { useEffect } from 'react'
import { useState } from 'react'

export const SinglePost = (props) => {

const [date,setDate]=useState(0);
const [time, setTime]=useState("");
    const {post_pic_url,post_title,post_body,postedBy,likes,createdAt}=props;

    const convertTime=(t)=>{
      setTime(t);
    }
  const countTime=()=>{
    const _MS_PER_YEAR = 1000 * 60 * 60 * 24 *30* 365;
    const olddate= new Date(createdAt)
    const newdate=new Date()
    const utc1 = Date.UTC(olddate.getFullYear(), olddate.getMonth(), olddate.getDate());
  const utc2 = Date.UTC(newdate.getFullYear(), newdate.getMonth(), newdate.getDate());
 
  const year= Math.floor((utc2 - utc1) / _MS_PER_YEAR); 
  if(year === 0){
     const _MS_PER_MONTH=1000 * 60 * 60 * 24 *30;
     const month= Math.floor((utc2 - utc1) / _MS_PER_MONTH);
     if(month === 0){
      const _MS_PER_DAYS=1000 * 60 * 60 * 24 ;
      const days= Math.floor((utc2 - utc1) / _MS_PER_DAYS);
      if(days=== 0){
        const _MS_PER_HOUR=1000 * 60 * 60  ;
        const hour= Math.floor((utc2 - utc1) / _MS_PER_HOUR);
        
        if(hour===0){
          const _MS_PER_MINUTES=1000 * 60   ;
          const min= Math.floor((utc2 - utc1) / _MS_PER_MINUTES);
          if(min===0){
            const _MS_PER_SECONDS=1000 * 60   ;
            const sec= Math.floor((utc2 - utc1) / _MS_PER_SECONDS);
            setDate(sec);
            convertTime("seconds");
            return
          }
          else{
            setDate(min);
          convertTime("minutes");
          return
          }
        }else{
          setDate(hour);
          convertTime("hours");
          return
        }
      }else{
        setDate(days);
        convertTime("days");
  return
      }
     }else{
      setDate(month);
      convertTime("month");
  return
     }
  }else{
  setDate(year);
  convertTime("year");
  return
  }
  }
   
    const [user,setUser]=useState({});
    const display = async()=>{
        try{
             const res=await fetch(`http://localhost:8080/profile/search/${postedBy}`,{
              method: 'GET',
              headers: {
                'Content-Type': 'application/json',
                'Authorization': 'Bearer ' + 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOiI2M2M2ZjNjZjU2YmZlZWVhYjc3MDQ3ODAiLCJpYXQiOjE2NzQ4NDYxNDYsImV4cCI6MTY3NTI3ODE0Nn0.mmxWDUf0o2EttaUjG7CMtbewmr1gW4u6axCh7XA8Yy4',
              }
             })
             const data= await res.json();
             setUser(data.user_exists);
             countTime();
        } catch(e){
          console.log(e.message);
        }
      }
    useEffect(()=>{
        display();
    },[])
  return (
    <div class="post">
                <div class="info">
                    <div class="user">
                        <div class="profile-pic"><img src={user? user.profile_pic : 'null'} alt=""/></div>
                        <p class="username">{user ? user.name : 'loading...'}</p>
                    </div>
                    <img src={option} class="options" alt=""/>
                </div>
                <img src={post_pic_url} class="post-image" alt=""/>
                <div class="post-content">
                    <div class="reaction-wrapper">
                        <img src={like} class="icon" alt=""/>
                        <img src={comment} class="icon" alt=""/>
                        <img src={send} class="icon" alt=""/>
                        <img src={save} class="save icon" alt=""/>
                    </div>
                    <p class="likes">{likes.length} likes</p>
                    <p class="description"><span>{post_title} </span> {post_body}</p>
                    <p class="post-time">{date} {time} ago</p>
                </div>
                <div class="comment-wrapper">
                    <img src={smile} class="icon" alt=""/>
                    <input type="text" class="comment-box" placeholder="Add a comment"/>
                    <button class="comment-btn">post</button>
                </div>
            </div>
  )
}
