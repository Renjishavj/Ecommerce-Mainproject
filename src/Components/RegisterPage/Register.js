import React from 'react'
import "./Register.css"
import { useRef ,useState} from 'react';


function Register() {

    const [emailError, setEmailError] = useState("");
    const [nameError, setnameError] = useState("");
    const [phoneError,setphoneError]=useState("")
    const [passwordError,setpasswordError]=useState("")
    const emailRef = useRef();
    const nameRef = useRef();
    const phoneRef=useRef();
    const passRef=useRef();

    const checkEmail = () => {
        const email = emailRef.current.value;
        const emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
        if (!emailRegex.test(email)) {
          setEmailError("Please enter a valid email address.");
        } else {
          setEmailError("");
        }
      };

      const checkName=()=>{
        let name=nameRef.current.value;
        if (name.length < 3) {
            setnameError("Name must be at least 3 characters long.")
      }else{
        setnameError("");
      }
    }

    const checkPhone=()=>{
        let phone=nameRef.current.value;
        if (phone.length !== 10 || isNaN(phone)) {
            setphoneError("Please enter a valid 10-digit phone number");
          }else{
            setphoneError("");
          }
    }

    const checkPassword=()=>{
        let password=nameRef.current.value;
        if(password.length<8){
            setpasswordError("Password should have minimum length of 8 characters")
        }else{
            setpasswordError("")
        }
    }
  return (
    <>
    <h2 className='reg-head'>Register</h2>
      <div className="reg-sub">
        <div className="reguser">
            <div>
            <label className="reglab-email">
            Email</label>
            </div>
          <div>
          <input type="text" className="reginp-email" ref={emailRef}/>
          {emailError && <div className='error-email'>{emailError}</div>}
          </div>
            
         
        </div>
        <div className="regusername">
            <div>
            <label className="reglab-username">
            UserName</label>
            </div>
          <div>
          <input type="text" className="reginp-user" ref={nameRef}  />
          {nameError && <div className='error-username'>{nameError}</div>} 
          </div>
            
         
        </div>
        <div className="reguser">
            <div>
            <label className="reglab-phone">
            Phone Number</label>
            </div>
          <div>
          <input type="text" className="reginp-phone" ref={phoneRef}/>
          {phoneError && <div className='error-phone'>{phoneError}</div>}
          </div>
            
         
        </div>
        <div className="reg-pass">
            <div>
            <label className="reglab-pass">
            Password</label>
            </div>
         
            <div>
            <input type="password" className="reg-inp-pass" ref={passRef}/>
            {passwordError && <div className='error-pass'>{passwordError}</div> }
            </div>
         
        </div>
        <div>
          <button className="reg-btn" onClick={() => { checkEmail(); checkName();checkPhone(); checkPassword(); }}>Register</button>
        </div>
        <div className="reg-horizontal">
            <div> <hr className="hori-reg"/></div>
            <div className="continue-reg">Already have an Account?<a href="" id="">Login here</a></div> 
            <div> <hr className="hori-reg"/></div>
        </div>
      
        
      </div>
    </>
    
  )
}

export default Register
