import React from 'react'
import profilepic from '../img/profile-pic.png'
import image9 from '../img/cover 9.png'
import image10 from '../img/cover 10.png'
import image11 from '../img/cover 11.png'
import image12 from '../img/cover 12.png'
import image13 from '../img/cover 13.png'
export const Recommondation = () => {
  return (
    <section class="section-main">
    <div class="wrapper"> 
        <div class="right-col">
            <div class="profile-card">
                <div class="profile-pic">
                    <img src={profilepic} alt=""/>
                </div>
                <div>
                    <p class="username">modern_web_channel</p>
                    <p class="sub-text">kunaal kumar</p>
                </div>
                <button class="action-btn">switch</button>
            </div>
            <p class="suggestion-text">Suggestions for you</p>
            <div class="profile-card">
                <div class="profile-pic">
                    <img src={image9} alt=""/>
                </div>
                <div>
                    <p class="username">modern_web_channel</p>
                    <p class="sub-text">followed bu user</p>
                </div>
                <button class="action-btn">follow</button>
            </div>
            <div class="profile-card">
                <div class="profile-pic">
                    <img src={image10} alt=""/>
                </div>
                <div>
                    <p class="username">modern_web_channel</p>
                    <p class="sub-text">followed bu user</p>
                </div>
                <button class="action-btn">follow</button>
            </div>
            <div class="profile-card">
                <div class="profile-pic">
                    <img src={image11} alt=""/>
                </div>
                <div>
                    <p class="username">modern_web_channel</p>
                    <p class="sub-text">followed bu user</p>
                </div>
                <button class="action-btn">follow</button>
            </div>
            <div class="profile-card">
                <div class="profile-pic">
                    <img src={image12} alt=""/>
                </div>
                <div>
                    <p class="username">modern_web_channel</p>
                    <p class="sub-text">followed bu user</p>
                </div>
                <button class="action-btn">follow</button>
            </div>
            <div class="profile-card">
                <div class="profile-pic">
                    <img src={image13} alt="" />
                </div>
                <div>
                    <p class="username">modern_web_channel</p>
                    <p class="sub-text">followed bu user</p>
                </div>
                <button class="action-btn">follow</button>
            </div>
        </div>
    </div>
</section>
  )
}
