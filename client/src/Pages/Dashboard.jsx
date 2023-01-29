import React from 'react'
import { Navbar } from '../Components/Dashboard/Navbar'
import { Posts } from '../Components/Dashboard/Posts'
import { Recommondation } from '../Components/Dashboard/Recommondation'
import { Status } from '../Components/Dashboard/Status'
import Cookies from 'universal-cookie'
export const Dashboard = () => {
 
  return (
    <div>
        <Navbar/>
        <Status/>
        <Posts/>
        <Recommondation/>
    </div>
  )
}
