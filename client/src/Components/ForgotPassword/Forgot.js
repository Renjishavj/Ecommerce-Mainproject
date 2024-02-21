import React, { useRef, useState } from "react";
import "./Forgot.css";
import forgot from "../../Images/forgot.jpg";
import { IoIosArrowBack } from "react-icons/io";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useNavigate } from "react-router-dom"; 

function Forgot() {
  const [email, setEmail] = useState("");
  const [otp, setOtp] = useState(false);
  const [otpValue, setOtpValue] = useState("");
  const [validate, setvalidate] = useState(false);
  const navigate = useNavigate(); 
  const passwordRef = useRef();
  const confirmRef = useRef();

  const forgotPassword = async () => {
    try {
      const response = await axios.post(
        "http://localhost:3300/route/forgotpassword",
        { email }
      );
      console.log(response.data);
      
      if (response.status === 200) {
        setOtp(true);
      }
    } catch (error) {
      console.error(error);
    }
  };

  const ValidateOtp = async () => {
    try {
      const response = await axios.post("http://localhost:3300/route/validateotp",{ email ,otp: otpValue}
      
      );
      
      console.log(otpValue)
      console.log(response.data);
      if (response.status === 200) {
        setvalidate(true);

      }
    } catch (error) {
      console.error(error);
    }
  };

  /*const updatePassword = async () => {
   

    if (passwordRef.current.value === confirmRef.current.value) {
     const password=passwordRef.current.value
     
      try {
        const response = await axios.post("http://localhost:3300/route/updatepassword",{ email,password });
        console.log(updatePassword)
        console.log(response.data);
      } catch (error) {
        console.error(error);
      }
    } else {
      console.log("Passwords do not match.");
    }
  };*/
  const updatePassword = async () => {
    const password = passwordRef.current.value;
    const confirmPassword = confirmRef.current.value;
  
    if (password.length !== 8 || confirmPassword.length !== 8) {
      alert("Password and confirm password should be 8 characters long.");
      return;
    }
  
    if (password === confirmPassword) {
      try {
        const response = await axios.post("http://localhost:3300/route/updatepassword", { email, password });
        console.log(response.data);
        navigate('/'); 
      } catch (error) {
        console.error(error);
      }
    } else {
      console.log("Passwords do not match.");
    }
  };
 

  return (
    <>
      <div>
        <div className="Forgot-container">
          <img src={forgot} alt="" className="Forgot-Img" />
        </div>
        <div className="forgot-form">
          <h3>Forgot Password</h3>
          <p className="forgot-des">
            Enter Your Email and we will send you a link to reset your password
          </p>
          {!otp && (
            <>
              <div>
                <input
                  type="text"
                  placeholder="Enter your Email address"
                  className="inp-forgot"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
              </div>

              <div>
                <button className="otp-btn" onClick={forgotPassword}>
                  Send OTP
                </button>
              </div>
            </>
          )}
          {otp & !validate && (
            <div>
              <div className="otp-div">
            <input
              type="text"
              placeholder="Enter OTP"
              value={otpValue}
              onChange={(e) => setOtpValue(e.target.value)} 
            />
          </div>
              <div>
                <button onClick={ValidateOtp}>Submit</button>
              </div>
            </div>
          )}

          {validate && (
            <div>
              <div className="otp-div">
                <input
                  type="password"
                  placeholder="newpassword"
                  ref={passwordRef}
                />

                <div className="error-pass"></div>
              </div>
              <div className="otp-div">
                <input
                  type="password"
                  placeholder="confirm password"
                  ref={confirmRef}
                />

                <div className="error-conf"></div>
              </div>
              <div>
                <button onClick={updatePassword}>Reset</button>
              </div>
            </div>
          )}
          <div className="back-btn">
            <div>
              <IoIosArrowBack className="backarrow" />
              <IoIosArrowBack className="backarrow" />
            </div>
            <div>
              <button className="backtologin">Back to login</button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Forgot;
