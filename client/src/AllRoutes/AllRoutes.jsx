import React from 'react'
import {Route, Routes} from 'react-router-dom'
import { Dashboard } from '../Pages/Dashboard'
// import Login from '../Components/Login/Login'
import { SignIn } from '../Components/Login/SignIn'
import { useDispatch, useSelector } from 'react-redux'
import Cookies from 'universal-cookie'
import { useEffect } from 'react'
import { userLoggedIn } from '../Redux/Action'
export const AllRoutes = () => {
  const dispatch=useDispatch();
  const cookies = new Cookies();
  const token= cookies.get('jwt')
  const loggedIn= useSelector(store=> store.loggedin);
 useEffect(()=>{
  if(token){
    console.log(token)
 dispatch(userLoggedIn(true));
  }
 },[])
  const loginpage= useSelector(store=>  store.loginpage);
  return (
    <Routes>
      <Route path='/' element={loggedIn?<Dashboard/> : <SignIn/>}  />
      <Route path='/login' element={<SignIn/>} />
    </Routes>
  )
}
