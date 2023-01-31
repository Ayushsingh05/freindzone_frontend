import React from 'react'
import axios from 'axios'
import option from '../../img/option.PNG'
import like from '../../img/like.PNG'
import comment from '../../img/comment.PNG'
import send from '../../img/send.PNG'
import save from '../../img/save.PNG'
import smile from '../../img/smile.PNG'
import heartFill from '../../img/heartFill.png'
import { useEffect } from 'react'
import { useState,useMemo } from 'react'
import Cookies from 'universal-cookie'
import { useSelector } from 'react-redux'
import { Comments } from './Comments'
export const SinglePost = (props) => {

//   comments
// : 
// Array(2)
// 0
// : 
// {text: 'Kya Baat hi', postedBy: '63c6c3f71c61922a79a0fcff', _id: '63c6ee24b0268073d004e01c'}
// 1
// : 
// {text: 'Kya Baat hi', postedBy: '63c6c3f71c61922a79a0fcff', _id: '63c6f69f56bfeeeab77047cf'}

  const {_id,post_pic_url,post_title,post_body,postedBy,likes,createdAt,comments}=props;
  const userDetails= useSelector(store=>store.userDetails);
  const cookies = new Cookies();
  const [likeNum,setLikeNum]=useState(likes.length)
  const token= cookies.get('jwt');
  const [show,setShow]=useState(false);
  const [comment,setComment]= useState("");
  const [showComm,setShowComm]=useState(comments);
const [date,setDate]=useState(0);
const [time, setTime]=useState("");
const [liked,setLiked]=useState(false);
    

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
   const AddLike=()=>{
    let likes=likeNum;
    setLikeNum(likes+1);
   }
   const SubLike=()=>{
    let likes=likeNum;
    setLikeNum(likes-1);
   }
    const [user,setUser]=useState({});
    const display = async()=>{
        try{
             const res=await fetch(`http://localhost:8080/profile/search/${postedBy}`,{
              method: 'GET',
              headers: {
                'Content-Type': 'application/json',
                'Authorization': 'Bearer ' + token,
              }
             })
             const data= await res.json();
             setUser(data.user_exists);
             countTime();
        } catch(e){
          console.log(e.message);
        }
      }
      const likePost=async()=>{
        try{
          const res=await fetch(`http://localhost:8080/post/likes`,{
           method: 'PUT',
           body:JSON.stringify({postId:_id}),
           headers: {
             'Content-Type': 'application/json',
             'Authorization': 'Bearer ' + token,
           }
          })
          const data= await res.json();
          AddLike();
          setLiked(true);
     } catch(e){
       console.log(e.message);
     }
  
      }
      const dislikePost=async()=>{
        axios.put(`http://localhost:8080/post/dislikes`,
        {postId:_id},
       { headers: {
          'Content-Type': 'application/json',
          'Authorization': 'Bearer ' + token,
        }}
       ).then(response => {
         SubLike();
         setLiked(false);
         
       })
       .catch(error => {
         console.error(error);
       });
      }
     const handlePostComment =async ()=>{
      try{
        const res=await fetch(`http://localhost:8080/post/comments`,{
         method: 'PUT',
         body:JSON.stringify({postId:_id,text :comment}),
         headers: {
           'Content-Type': 'application/json',
           'Authorization': 'Bearer ' + token,
         }
        })
        const data= await res.json();
        setShowComm([...showComm,{postId:_id,text :comment}])
   } catch(e){
     console.log(e.message);
   }
     }
    useEffect(()=>{
        display();
       const isLiked= likes.find(el=> el==userDetails.user._id);
       if(isLiked){
        setLiked(true);
       }
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
                      {
                    liked ? <img src={heartFill} class="icon" alt="" onClick={dislikePost} />
                    : <img src={like} class="icon" alt="" onClick={likePost}/>
                    }
                       
                        <img src={comment} class="icon" alt=""/>
                        <img src={send} class="icon" alt=""/>
                        <img src={save} class="save icon" alt=""/>
                    </div>
                    <p class="likes">{likeNum} likes</p>
                    <p class="description"><span>{post_title} </span> {post_body}</p>
                    <p class="post-time" onClick={()=>setShow(!show)}>{showComm.length>0? `${show ?'hide':'view'} all ${showComm.length} Comments`:"No Comments"}</p>
                   {show ? showComm.length>0? <Comments props={showComm} /> : null : null}
                    <p class="post-time">{date} {time} ago</p>
                </div>
                <div class="comment-wrapper">
                    <img src={smile} class="icon" alt=""/>
                    <input type="text" class="comment-box" placeholder="Add a comment" onChange={(e)=>setComment(e.target.value)}/>
                    <button class="comment-btn" onClick={handlePostComment}>post</button>
                </div>
            </div>
  )
}
