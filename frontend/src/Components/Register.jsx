import React, { useState } from 'react'
import loginImg from '../Images/login-2.png'
import axios from 'axios'
import { NavLink } from 'react-router-dom'

const Register = () => {

  const [username,setUsername] = useState('')
  const [email,setEmail] = useState('')
  const [password,setPassword] = useState('')
  const [existingUser,setExistingUser] = useState(false)
  const [isChecked,setIsChecked] = useState(false)
  const [error,setError] = useState(false)

  




  const handleCheckboxChange = () => {
    setIsChecked((prev) => !prev);
  };

  const handleSubmit = async(e) => {
    e.preventDefault();
    if (!isChecked) {
      alert('Please agree to the terms and conditions.');
      return;
    }

    try{
      await fetch('http://localhost:3000/api/user/register',{
        method:'POST',
        headers:{
          'Content-Type':'application/json'
        },
        body:JSON.stringify({
          username,
          email,
          password
        })
      }).then((res)=>{
        if(!res.ok){
          setExistingUser(true)
        }
        if(existingUser){
          setError("User already exists")
        }
      })
      console.log('success')
      setEmail('')
      setPassword('')
      setUsername('')
     
    }
    catch(error){
      console.log(error)
    }
   
  };
  
  return (
    <div>
       <div className="flex justify-center items-center w-full  min-h-screen bg-cream px-5 py-5">
      <div className="xl:max-w-7xl bg-cream   w-full rounded-md flex justify-between items-stretch px-5 xl:px-5 py-5">
        <div className="sm:w-[60%] lg:w-[50%] bg-cover bg-center items-center justify-center hidden md:flex ">
       
          <img
            src={loginImg}
            alt="login"
            className="h-[500px]"
          />
        </div>
       
        <div className="mx-auto w-full lg:w-1/2 md:p-10 py-5 md:py-0">
        
          <h1 className="text-center text-2xl sm:text-3xl font-semibold text-black">
            Create Account
          </h1>
          <div className="w-full mt-5 sm:mt-8">
            <div className="mx-auto w-full sm:max-w-md md:max-w-lg flex flex-col gap-5">
              <div className="flex flex-col sm:flex-row gap-3">
                <input
                  type="text"
                  placeholder="Enter Your First Name"
                  className="input input-bordered  w-full text-black placeholder:text-black/70"
                  onChange={(e)=> setUsername(e.target.value)}
                  required="true"
                />
             
              </div>
              <input
                type="text"
                placeholder="Enter Your Email"
                className="input input-bordered  w-full text-black placeholder:text-black/70"
                onChange={(e)=> setEmail(e.target.value)}
                required='true'
              />
           
              <input
                type="Password"
                placeholder="Enter Your Password"
                className="input input-bordered  w-full text-black placeholder:text-black/70"
                onChange={(e)=>setPassword(e.target.value)}
                required='true'
              />
              <div className="flex items-center gap-1.5  justify-start pl-2">
                <div className="form-control">
                  <label className="label cursor-pointer">
                    <input
                      type="checkbox"
                      className="checkbox-xs checkbox-primary"
                      required="true"
                      checked={isChecked}
                      onChange={handleCheckboxChange}
                    />
                  </label>
                </div>
                <h3 className="flex items-center whitespace-nowrap text-xs text-black">
                  I agree to the
                  <span className="text-[#4A07DA]">&nbsp;Terms</span>
                  &nbsp;and
                  <span className="text-[#4A07DA]">&nbsp;Privacy Policy</span>.
                </h3>
              </div>
              <div className="flex flex-col md:flex-row gap-2 md:gap-4 justify-center items-center">
                <button className="btn btn-active btn-primary btn-block max-w-[200px]"  onClick={handleSubmit} disabled={!isChecked}>
                  Sign Up
                </button>
             <NavLink to={"/login"}  className="btn btn-active btn-primary btn-block max-w-[200px]">
                  Login
              </NavLink>
                {error ? <h5 className='text-red-500 bg-error'>User exists</h5>: null}
              
              </div>
            </div>
          </div>
      
        </div>
      </div>
    </div>
    </div>
  )
}

export default Register