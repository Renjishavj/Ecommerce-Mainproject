import React from "react";
import "./Login.css";
import axios from "axios";
import { useState, useRef } from "react";
import { ToastContainer, toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'

function UserorPass() {
  const [errors, setErrors] = useState({
    email: "",
    password: "",
  });

  const emailRef = useRef();
  const passRef = useRef();

  const emailError = useRef();
  const passwordError = useRef();

  const validateFields = () => {
    const email = emailRef.current.value;
    const password = passRef.current.value;

    const emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;

    setErrors({
      email: emailRegex.test(email) ? "" : "Please enter a valid email address.",
      password: password.length >= 8 ? "" : "Password should have a minimum length of 8 characters.",
    });

    emailError.current = errors.email;
    passwordError.current = errors.password;

    return Object.values(errors).every((error) => error === "");
  };

  const loginUser = async () => {
    if (validateFields()) {
      try {
        const email = emailRef.current.value;
        const password = passRef.current.value;

        const response = await axios.post("http://localhost:3300/route/login", {
          email,
          password,
        });

        if (response.status === 200 || response.status === 201) {
          console.log("Login successful!");
         toast.success("Login Successfull")
        } else {
          const errorData = response.data;

          console.error(errorData.message);
        }
      } catch (error) {
        console.error("Error during login:", error);
        toast.warning("Can't login" )
      }
    }
  };

  return (
    <>
    <ToastContainer  className="taost -pos" position="top-center"/>
      <h2 className="login-head">Login</h2>
      <div className="userorpass-sub">
        <div className="user">
          <div>
            <label className="lab-email">Email</label>
          </div>
          <div>
            <input type="text" className="inp-user" ref={emailRef} />
          </div>

        </div>
        <div className="pass">
          <div>
            <label className="lab-pass">Password</label>
          </div>
          <div>
            <input type="password" className="inp-pass" ref={passRef} />
          </div>
        </div>
        <div>
          <button className="login-btn" onClick={loginUser}>Login</button>
        </div>
        <div className="login-horizontal">
          <div> <hr className="hori-login"/></div>
          <div className="continue">Or Continue With</div>
          <div> <hr className="hori-login"/></div>
        </div>
      </div>
    </>
  );
}

export default UserorPass;