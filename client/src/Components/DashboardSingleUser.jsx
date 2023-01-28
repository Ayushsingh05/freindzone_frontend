import React from 'react'
export const DashboardSingleUser = (props) => {
const {profile_pic,email,name}=props;
  return (
    <div class="profile-card">
                <div class="profile-pic">
                    <img src={profile_pic} alt=""/>
                </div>
                <div>
                    <p class="username">{name}</p>
                    <p class="sub-text">{email}</p>
                </div>
                <button class="action-btn">follow</button>
            </div>
  )
}
