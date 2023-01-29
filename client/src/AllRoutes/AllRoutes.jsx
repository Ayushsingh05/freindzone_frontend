import React from 'react'
import {Route, Routes} from 'react-router-dom'
import { Dashboard } from '../Pages/Dashboard'
// import Login from '../Components/Login/Login'
import { SignIn } from '../Components/Login/SignIn'
import { useSelector } from 'react-redux'
import Cookies from 'universal-cookie'
export const AllRoutes = () => {
  
  const loginpage= useSelector(store=>  store.loginpage);
  return (
    <Routes>
      <Route path='/' element={<Dashboard/>}  />
      <Route path='/login' element={<SignIn/>} />
    </Routes>
  )
}
