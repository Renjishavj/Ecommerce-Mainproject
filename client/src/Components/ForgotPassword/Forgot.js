import React, { useState } from 'react';
import "./Forgot.css";
import forgot from "../../Images/forgot.jpg";
import { IoIosArrowBack } from "react-icons/io";
import axios from 'axios';

function Forgot() {
  const [email, setEmail] = useState('');

  const forgotPassword = async () => {
    try {
      const response = await axios.post('http://localhost:3300/route/forgotpassword', { email });
      console.log(response.data);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <>
      <div>
        <div className='Forgot-container'>
          <img src={forgot} alt="" className='Forgot-Img' />
        </div>
        <div className='forgot-form'>
          <h3>Forgot Password</h3>
          <p className='forgot-des'>Enter Your Email and we will send you a link to reset your password</p>
          <div>
            <input
              type="text"
              placeholder='Enter your Email address'
              className='inp-forgot'
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          {/*error if no email */}
          <div>
            <button className='otp-btn' onClick={forgotPassword}>Send OTP</button>
          </div>
          <div className='back-btn'>
            <div><IoIosArrowBack className='backarrow' /><IoIosArrowBack className='backarrow' /></div>
            <div><button className='backtologin'>Back to login</button></div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Forgot;
