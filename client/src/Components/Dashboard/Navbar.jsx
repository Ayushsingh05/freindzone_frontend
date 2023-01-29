import React from 'react'
import logo from '../../img/logo.PNG';
import home from '../../img/home.PNG'
import messenger from '../../img/messenger.PNG'
import add from '../../img/add.PNG'
import explore from '../../img/explore.PNG'
import like from '../../img/like.PNG'
export const Navbar = () => {
  return (
    <nav class="navbar">
    <div class="nav-wrapper">
        <img src={logo} class="brand-img" alt=""/>
    
        <input type="text" class="search-box" placeholder="search"/>
        <div class="nav-items">
            <img src={home} class="icon" alt=""/>
            <img src={messenger} class="icon" alt=""/>
            <img src={add}class="icon" alt=""/>
            <img src={explore}class="icon" alt=""/>
            <img src={like} class="icon" alt=""/>
            <div class="icon user-profile"></div>
        </div>
    </div>
</nav>
  )
}
