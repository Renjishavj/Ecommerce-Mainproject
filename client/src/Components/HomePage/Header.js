import React, { useState } from "react";
import {
  FaSearch,
  FaGlobeAmericas,
  FaUser,
  FaShoppingCart,
  FaQrcode,
  FaAngleDown,
} from "react-icons/fa";
import "./Style.css";
import flag from "../../Images/Flag_of_India.svg (1).jpg";
import logoimg from "../../Images/logo.png";
import LoginPage from "../LoginPage";
import RegisterPage from "../RegisterPage";

const Header = () => {
  const [isDropdownVisible, setDropdownVisible] = useState(false);
  const [isLoginVisible, setLoginVisible] = useState(false);
  const [isRegisterVisible, setRegisterVisible] = useState(false);

  const toggleDropdown = () => {
    setDropdownVisible(!isDropdownVisible);
  };

  const toggleVisiblelogin = () => {
    setLoginVisible(!isLoginVisible);
    setRegisterVisible(false);
  };

  const toggleVisibleRegister = () => {
    // Set isLoginVisible to false if isRegisterVisible is true
    setLoginVisible(false);
    setRegisterVisible(!isRegisterVisible);
  };

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

        <div className="icon-div" onMouseEnter={toggleDropdown} onMouseLeave={toggleDropdown}>
        
          <div>
            <FaUser className="user-icon" />
          </div>
          <FaAngleDown className="arrow-icon" />

          {isDropdownVisible && (
            <div className="dropdown">
              <div className="dropdown-item">
                <button className="drop-btn-login" onClick={toggleVisiblelogin}>
                  Login
                </button>
              </div>
              <div className="dropdown-item">
                <button className="drop-btn-register" onClick={toggleVisibleRegister}>
                  Register
                </button>
              </div>
            </div>
          )}
        </div>
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
          <div>
            <FaShoppingCart className="cart-icon" />
          </div>
          <div>
            <input type="text" placeholder="8" className="cart-qty" />
          </div>
        </div>
      </div>
    </div>
  </div>
  );
}

export default Header;
