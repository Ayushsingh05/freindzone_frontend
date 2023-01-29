import React from 'react'
import { Link, useNavigate } from 'react-router-dom'
import './SigninStyle.css'
import { BsArrowUpLeft } from 'react-icons/bs'
import { useState } from 'react'
import { useDispatch } from 'react-redux'
import { manageLoginPage } from '../../Redux/Action'
import { useEffect } from 'react'
import Cookies from 'universal-cookie'
export const SignIn = () => {
    const cookies= new Cookies();
    const navigate=useNavigate();
    const loginobj={email:'',password:''};
    const signobj={
        name:'',
        email:'',
        password:'',
    }
    const dispatch=useDispatch();
    const [loginData,setLoginData]=useState(loginobj);
    const [signData,setsignData]=useState(signobj);
    const [state, setState] = useState(false);
           const handleClick=()=>{
            setState(!state);
            
           }
           const handleLoginChange=(e)=>{
                setLoginData({...loginData,[e.target.name]:e.target.value})
           }
           const handleSignChange=(e)=>{
            setsignData({...signData,[e.target.name]:e.target.value});
           }

           const handleSignin=async()=>{
              try {const res= await fetch (`http://localhost:8080/user/register`,{
                method:"POST",
                body:JSON.stringify(loginData),
                headers: {
                    'Content-Type': 'application/json',
                  }
               });
               const data = await res.json();
               setState(!state);
            }catch(e){
                alert(e.message);
            }
               
           }
           const handleLogin= async()=>{
            try {const res= await fetch (`http://localhost:8080/user/login`,{
                method:"POST",
                body:JSON.stringify(loginData),
                headers: {
                    'Content-Type': 'application/json',
                  }
               });
               const data = await res.json();
               console.log(data);
               cookies.set('jwt' , data.token , {
                maxAge:24 * 60 * 60 * 100,
                path: '/'
              });

              navigate('/');
            }catch(e){
                alert(e.message);
                setState(!state);
            }
           }
useEffect(()=>{
    dispatch(manageLoginPage(state));
},[state])


    return (
        <div className='signinFreindzone'>
            <div>
                <div class="section">
                    <div class="container">
                        <div class="row full-height justify-content-center">
                            <div class="col-12 text-center align-self-center py-5">
                                <div class="section pb-5 pt-5 pt-sm-2 text-center">
                                    <h6 class="mb-0 pb-3" style={{ textAlign: 'center', fontSize: "16px" }}><span>Log In </span><span>Sign Up</span></h6>
                                    <input class="checkbox" type="checkbox" checked={state} id="reg-log" name="reg-log"  />
                                    <label for="reg-log">
                                    </label>
                                    <div class="card-3d-wrap mx-auto">
                                        <div class="card-3d-wrapper">
                                            <div class="card-front">
                                                <div class="center-wrap">
                                                    <div class="section text-center">
                                                        <h4 class="mb-4 pb-3">Log In</h4>
                                                        <div class="form-group">
                                                            <input type="email" name="email" class="form-style" placeholder="Your Email" id="logemail"  onChange={handleLoginChange} />
                                                            <i class="input-icon uil uil-at"></i>
                                                        </div>
                                                        <div class="form-group mt-2">
                                                            <input type="password" name="password" class="form-style" placeholder="Your Password" id="logpass"  onChange={handleLoginChange} />
                                                            <i class="input-icon uil uil-lock-alt"></i>
                                                        </div>
                                                        <button class="btn mt-4" onClick={handleLogin} >submit</button>
                                                        <p class="mb-0 mt-4 text-center"><p class="link">Forgot your password?</p></p>
                                                    </div>
                                                </div>
                                            </div>
                                            <div class="card-back">
                                                <div class="center-wrap">
                                                    <div class="section text-center">
                                                        <h4 class="mb-4 pb-3">Sign Up</h4>
                                                        <div class="form-group">
                                                            <input type="text" name="name" class="form-style" placeholder="Your Full Name" id="logname"  onChange={handleSignChange} />
                                                            <i class="input-icon uil uil-user"></i>
                                                        </div>
                                                        <div class="form-group mt-2">
                                                            <input type="email" name="email" class="form-style" placeholder="Your Email" id="logemailsign"  onChange={handleSignChange} />
                                                            <i class="input-icon uil uil-at"></i>
                                                        </div>
                                                        <div class="form-group mt-2">
                                                            <input type="password" name="password" class="form-style" placeholder="Your Password" id="logpasssign"  onChange={handleSignChange} />
                                                            <i class="input-icon uil uil-lock-alt"></i>
                                                        </div>
                                                        <button class="btn mt-4" onClick={handleSignin}>submit</button>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <button onClick={handleClick}>Clickme</button>
        </div>
    )
}
