import React from "react";
import "./Login.css";
import axios from "axios";
import { useState, useRef } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { IoIosCloseCircleOutline } from "react-icons/io";
import { useLogin } from "../../Context/LoginContext";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";

function UserorPass() {
  const [errors, setErrors] = useState();
  const navigate = useNavigate();

  const { toggleVisiblelogin, setLoggedIn, setUser, user } = useLogin();

  const emailRef = useRef();
  const passRef = useRef();

  const emailError = useRef();
  const passwordError = useRef();

  const validateFields = () => {
    const email = emailRef.current.value;
    const password = passRef.current.value;

    const emailRegex = /^[\w\-\.]+@([\w-]+\.)+[\w-]{2,}$/;

    const errors = {
      email: emailRegex.test(email)
        ? ""
        : "Please enter a valid email address.",
      password:
        password.length >= 8
          ? ""
          : "Password should have a minimum length of 8 characters.",
    };

    emailError.current = errors.email;
    passwordError.current = errors.password;

    const values = Object.values(errors).every((error) => error === "");
    console.log(values);
    setErrors({ ...values });
    return values;
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
        if (email === "admin123@gmail.com" && password === "admin@123") {
          // Navigate to AdminPage
          navigate("/adminpage");
          return;
        }

        if (response.status === 200 || response.status === 201) {
          console.log("Login successful!");
          toast.success("Login Successfull");
          setLoggedIn(true);
          localStorage.setItem('token', response.data.token);
          setUser(response.data.user);
          localStorage.setItem('user', JSON.stringify(response.data.user));
          toggleVisiblelogin();
        } else {
          const errorData = response.data;

          console.error(errorData.message);
        }
      } catch (error) {
        console.error("Error during login:", error);
        toast.warning("Can't login");
      }
    }
  };

  return (
    <>
      <ToastContainer className="taost -pos" position="top-center" />
      <button className="close-btn" onClick={toggleVisiblelogin}>
        <IoIosCloseCircleOutline />
      </button>
      <h2 className="login-head">Login</h2>
      <div className="userorpass-sub">
        <div className="user">
          <div>
            <label className="lab-email">Email</label>
          </div>
          <div>
            <input type="text" className="inp-user" ref={emailRef} />
            {emailError.current && (
              <div className="error-email">{emailError.current}</div>
            )}
          </div>
        </div>
        <div className="pass">
          <div>
            <label className="lab-pass">Password</label>
          </div>
          <div>
            <input type="password" className="inp-pass" ref={passRef} />
            {passwordError.current && (
              <div className="error-pass">{passwordError.current}</div>
            )}
          </div>
        </div>

        <div>
          <button className="login-btn" onClick={loginUser} type="submit">
            Login
          </button>
        </div>
        <Link to="/forgotpassword">
          <button className="forgot-password-btn">Forgot Password</button>
        </Link>
        <div className="login-horizontal">
          <div>
            {" "}
            <hr className="hori-login" />
          </div>
          <div className="continue">Or Continue With</div>
          <div>
            {" "}
            <hr className="hori-login" />
          </div>
        </div>
      </div>
    </>
  );
}

export default UserorPass;
