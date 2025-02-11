/* eslint-disable jsx-a11y/anchor-is-valid */

import './SignUpPage.css'
import myImage from './testbook.jpg'

const SignUpPage = () => {
  return (
    <div className='model-body'>
      <form>
        <div>
          <div className='close'>
          <i className="fa-sharp-duotone fa-solid fa-xmark"></i>
          </div>
        <div className='header'>
            <img src={myImage} alt='textbook'/>
            <h2>Get started with Testbook!</h2>
            <p>Continue with your mobile number</p>
        </div>
        <div className='user-input'>
            <div className='input'>
            <i className="fa-light fa-mobile-notch"></i>
            <input type='number' placeholder='Please Enter your mobile number'/>
            </div>
            <button >Continue</button>
        </div>
        <div className='gap'></div>
        <p className='footer'>Already have an account? <a href='#'>LOGIN</a></p>
        </div>
      </form>
    </div>
  )
}

export default SignUpPage
