import React from 'react'
import image1 from '../../img/cover 1.png'
import image2 from '../../img/cover 2.png'
import image3 from '../../img/cover 3.png'
export const Status = () => {
  return (
    <section class="main">
    <div class="wrapper">
        <div class="left-col">
            <div class="status-wrapper">
                <div class="status-card">
                    <div class="profile-pic"><img src={image1} alt=""/></div>
                    <p class="username">user_name_1</p>
                </div>
                <div class="status-card">
                    <div class="profile-pic"><img src={image2} alt=""/></div>
                    <p class="username">user_name_2</p>
                </div>
                <div class="status-card">
                    <div class="profile-pic"><img src={image3} alt=""/></div>
                    <p class="username">user_name_3</p>
                </div>
        </div>
        </div>
    </div>
</section>
  )
}
