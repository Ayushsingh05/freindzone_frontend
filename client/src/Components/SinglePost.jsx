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
// comments
// : 
// []
// createdAt
// : 
// "2023-01-17T18:00:06.616Z"
// likes
// : 
// []
// post_body
// : 
// "Since you've been around, I smile a lot more than I used to"
// post_pic_url
// : 
// "https://www.rolls-roycemotorcars.com/content/dam/rrmc/marketUK/rollsroycemotorcars_com/1-0-home/page-properties/rrmc-homepage-ghost-share-image.jpg"
// post_title
// : 
// "My Crush"
// postedBy
// : 
// "63c6c3f71c61922a79a0fcff"
// updatedAt
// : 
// "2023-01-17T18:00:06.616Z"
// __v
// : 
// 0
// _id
// : 
// "63c6e2268ceb655fc1b739d9"
// user_exists
// : 
// date
// : 
// "2023-01-17T15:51:19.453Z"
// email
// : 
// "Ashish@gmail.com"
// followers
// : 
// []
// following
// : 
// ['63c6f3cf56bfeeeab7704780']
// name
// : 
// "Ashish Bhai"
// password
// : 
// "$2b$10$Qpkdsb9sBHndt3x7GLihm.BF6dPZd3Hhibhwi3qYu6UR./pijBd1."
// profile_pic
// : 
// "https://icon-library.com/images/anonymous-avatar-icon/anonymous-avatar-icon-25.jpg"
// __v
// : 
// 0
// _id
// : 
// "63c6c3f71c61922a79a0fcff"
// link :- http://localhost:8080/profile/search/63c6f3cf56bfeeeab7704780
export const SinglePost = (props) => {
    const {post_pic_url,post_title,post_body,postedBy,likes}=props;
    // console.log(props);
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
             console.log(data);
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
                    <p class="post-time">2 minutes ago</p>
                </div>
                <div class="comment-wrapper">
                    <img src={smile} class="icon" alt=""/>
                    <input type="text" class="comment-box" placeholder="Add a comment"/>
                    <button class="comment-btn">post</button>
                </div>
            </div>
  )
}
