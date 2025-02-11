/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useState } from 'react'
import "./LoginPage.css"

const LoginPage = () => {
  const [number, setNumber] = useState("");
  const [otp, setOtp] = useState("");


  function LoginPage()
  {
    console.warn(number,otp)
  }

  return (
    <div className='model-body'>
      <form>
        <div className='form-body'>
        <i className="fa-sharp-duotone fa-solid fa-xmark"></i>
          <h2>Welcome Back User!</h2>
        <div className='user-input'>
        <i className="fa-light fa-mobile-notch"></i>
        <input type='number' placeholder='**********' onChange={(e)=>setNumber(e.target.value)}/>
        <p>OTP will been sent to you on above number</p>
        </div>
        <div className='user-input'>
          <input type='text' placeholder='OTP' onChange={(e)=>setOtp(e.target.value)}/>
        </div>
        <div className='OTP'>
          <a href='#'>Resend OTP</a> | <a href='#'>Get OTP on call</a>
        </div>
        <div>
          <button onClick={LoginPage}>LOGIN</button>
        </div>
        </div>
        <div></div>
        <div className='Account'>
          <p>Don't have an Account? <a href='#'>SIGNUP</a></p>
        </div>
      </form>
    </div>
  )
}

export default LoginPage
