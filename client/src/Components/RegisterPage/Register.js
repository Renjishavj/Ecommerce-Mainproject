import React, { useRef, useState } from 'react'
import './Register.css'
import axios from 'axios';
import { ToastContainer, toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import LoginPage from "../LoginPage"


function Register() {
  const [isLoginhereVisible, setLoginhereVisible] = useState(false);

 

  
  const [errors, setErrors] = useState({
    email: '',
    name: '',
    phone: '',
    password: '',
  })

  const emailRef = useRef()
  const nameRef = useRef()
  const phoneRef = useRef()
  const passRef = useRef()

  const emailError = useRef()
  const nameError = useRef()
  const phoneError = useRef()
  const passwordError = useRef()

  const toggleDropdownLoginhere = () => {
    setLoginhereVisible(!isLoginhereVisible);
  };
  

  const validateFields = () => {
    const email = emailRef.current.value
    const name = nameRef.current.value
    const phone = phoneRef.current.value
    const password = passRef.current.value

    const emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/

    setErrors({
      email: emailRegex.test(email) ? '' : 'Please enter a valid email address.',
      name: name.length >= 3 ? '' : 'Name must be at least 3 characters long.',
      phone: (phone.length === 10 && !isNaN(phone)) ? '' : 'Please enter a valid 10-digit phone number.',
      password: password.length >= 8 ? '' : 'Password should have a minimum length of 8 characters.',
    })

    emailError.current = errors.email
    nameError.current = errors.name
    phoneError.current = errors.phone
    passwordError.current = errors.password

    return Object.values(errors).every((error) => error === '')
  }

  const registerUser = async () => {
    if (validateFields()) {
      try {
        const email = emailRef.current.value;
        const name = nameRef.current.value;
        const phone = phoneRef.current.value;
        const password = passRef.current.value;

      const response = await axios.post('http://localhost:3300/route/register', {
        email,
        name,
        phone,
        password
      });

      if (response.status === 200 || response.status === 201) {
        toast.success('Registration successful!')
        
      } else {
        const errorData = response.data;
        
        console.error(errorData.message);
      }
    } catch (error) {
      toast.warning("Can't register the user")
      console.error('Error during registration:', error);
    }
  }
}

  return (
    <>
     <ToastContainer  className="taost-pos" position="top-center" />
      <h2 className='reg-head'>Register</h2>
      <div className="reg-sub">
        <div className="reguser">
          <div>
            <label className="reglab-email">
              Email
            </label>
          </div>
          <div>
            <input type="text" className="reginp-email" ref={emailRef} />
            {emailError.current && <div className='error-email'>{emailError.current}</div>}
          </div>

        </div>
        <div className="regusername">
          <div>
            <label className="reglab-username">
              UserName
            </label>
          </div>
          <div>
            <input type="text" className="reginp-user" ref={nameRef}  />
            {nameError.current && <div className='error-username'>{nameError.current}</div>}
          </div>

        </div>
        <div className="reguser">
          <div>
            <label className="reglab-phone">
              Phone Number
            </label>
          </div>
          <div>
            <input type="text" className="reginp-phone" ref={phoneRef} />
            {phoneError.current && <div className='error-phone'>{phoneError.current}</div>}
          </div>

        </div>
        <div className="reg-pass">
          <div>
            <label className="reglab-pass">
              Password
            </label>
          </div>

          <div>
            <input type="password" className="reg-inp-pass" ref={passRef} />
            {passwordError.current && <div className='error-pass'>{passwordError.current}</div>}
          </div>

        </div>
        <div>
          <button className="reg-btn" onClick={registerUser}>
            Register
          </button>
        </div>
        <div className="reg-horizontal">
          <div> <hr className="hori-reg"/></div>
          <div className="continue-reg">Already have an Account?
          <button className='reference' onClick={toggleDropdownLoginhere}>
          Login here...
            </button >
            </div> 
            {isLoginhereVisible && (
              <div className="dropLoginhere">
                <LoginPage/>
              </div>
            )}
           <div> <hr className="hori-reg"/></div>
        </div>
        
      </div>
      
    </>
  )
}

export default Register