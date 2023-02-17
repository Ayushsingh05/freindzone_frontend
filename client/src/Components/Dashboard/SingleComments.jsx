import React from 'react'

import { useSelector } from 'react-redux';


export const SingleComments = (props) => {
  console.log(props);
  const data =useSelector(store=>store);

  return (
    <>
    { Object.keys(props).length>0 ?  <div style={{display:'flex',width:'100%',alignItems:'center'}}>
       
            <img style={{width:'30px',height:'30px',borderRadius:'50%',margin:'10px 15px 10px 0'}} 
            src={props.postedBy ?props.postedBy.profile_pic : data.userDetails.user.profile_pic  } alt="" />
       
        <div style={{fontSize:'14px'}}>
         <span style={{fontWeight:'bold',fontSize:'14px',marginRight:'8px'}}>
         { props.postedBy ? props.postedBy.name :data.userDetails.user.name}</span>{props.text}
        </div>
    </div> : null}
    </>
  )
}
