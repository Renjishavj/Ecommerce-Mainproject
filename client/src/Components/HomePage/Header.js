import React, { useState } from "react";
import {
  FaSearch,
  FaGlobeAmericas,
  FaUser,
  FaShoppingCart,
  FaQrcode,
  FaAngleDown,
  FaHeart
} from "react-icons/fa";
import "./Style.css";
import flag from "../../Images/Flag_of_India.svg (1).jpg";
import logoimg from "../../Images/headlogo.png";
import LoginPage from "../LoginPage";
import RegisterPage from "../RegisterPage";
import { useLogin } from "../../Context/LoginContext";
import { Link } from "react-router-dom";

const Header = () => {
  const {
    isDropdownVisible,
    isLoginVisible,
    isRegisterVisible,
    toggleDropdown,
    toggleVisiblelogin,
    toggleVisibleRegister,
    loggedIn,
    user,
    setUser,
    setLoggedIn
  } = useLogin();




  const LogOut=()=>{
    setUser(null)
    setLoggedIn(false)
    localStorage.removeItem('user')
    localStorage.removeItem('token')
    window.location.href = "/";
  }




  return (
    <div className="header">
      <div className="header-content">
        <div className="logo">
          <img src={logoimg} alt="" className="img" />
        </div>
        <div className="search">
          <div className="search-container">
            <FaSearch className="search-icon" />
            <input type="text" placeholder="Search" className="search-input" />
          </div>
        </div>

        <div className="icons">
          <div className="icon-div">
            <div>
              <FaQrcode className="qr-code-icon" />
            </div>

            <div>
              <FaAngleDown className="arrow-icon" />
            </div>
          </div>
          <div className="icon-div">
            <div>
              <img src={flag} alt="" className="language-icon" />
            </div>
            <div>
              <FaAngleDown className="arrow-icon" />
            </div>
          </div>
          {!loggedIn && (
            <div
              className="icon-div"
              onMouseEnter={toggleDropdown}
              onMouseLeave={toggleDropdown}
            >
              <div className="icon-div">
                <div><FaUser className="user-icon" /></div>
                
                <div><FaAngleDown className="arrow-icon" /></div>
                
              </div>

              

              {isDropdownVisible && (
                <div className="dropdown">
                  <div className="dropdown-item">
                    <button
                      className="drop-btn-login"
                      onClick={toggleVisiblelogin}
                    >
                      Login
                    </button>
                  </div>
                  <div className="dropdown-item">
                    <button
                      className="drop-btn-register"
                      onClick={toggleVisibleRegister}
                    >
                      Register
                    </button>
                  </div>
                </div>
              )}
            </div>
          )}

        {loggedIn && (
        <div>
          <div>{user.name}</div>
        </div>
        )}


          {isLoginVisible && (
            <div className="dropLogin">
              <LoginPage />
            </div>
          )}

          {isRegisterVisible && (
            <div className="dropRegister">
              <RegisterPage />
            </div>
          )}
          <div className="cart-num">
            {loggedIn && (
            <div>
              <Link to ="/cartpage/:email">
              <FaShoppingCart className="cart-icon" />
              </Link>
            </div>
            )}
             {!loggedIn && (
            <div>
             
              <FaShoppingCart className="cart-icon" />
              
            </div>
            )}
            <div>
              <input type="text" placeholder="8" className="cart-qty" />
            </div>
          </div>
          {loggedIn &&
          <div className="icon-div"><FaHeart className="wishlist-icon" /></div>
          }
          {loggedIn &&
          <div className="icon-div"><button onClick={LogOut}>Log out</button></div>
          }
        </div>
      </div>
    </div>
  );
};

export default Header;
