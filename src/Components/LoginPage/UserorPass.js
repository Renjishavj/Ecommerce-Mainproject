import React from "react";
import "./Login.css";

function UserorPass() {
  return (
    <>
    <h2 className='login-head'>Login</h2>
      <div className="userorpass-sub">
        <div className="user">
            <div>
            <label className="lab-email">
            Email</label>
            </div>
          <div>
          <input type="text" className="inp-user"/>
          </div>
            
         
        </div>
        <div className="pass">
            <div>
            <label className="lab-pass">
            Password</label>
            </div>
         
            <div>
            <input type="password" className="inp-pass" />
            </div>
         
        </div>
        <div>
          <button className="login-btn">Login</button>
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
