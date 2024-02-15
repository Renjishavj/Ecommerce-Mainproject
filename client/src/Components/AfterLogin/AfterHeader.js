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
import "./After.css";
import flag from "../../Images/Flag_of_India.svg (1).jpg";
import logoimg from "../../Images/logo.png";
import LoginPage from "../LoginPage";
import RegisterPage from "../RegisterPage";
import { useLogin } from "../../Context/LoginContext";

const AfterHeader = () => {
  const {
    isDropdownVisible,
    isLoginVisible,
    isRegisterVisible,
    toggleDropdown,
    toggleVisiblelogin,
    toggleVisibleRegister,
  } = useLogin();

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

          <div className="icon-div">
            <div>
              <FaUser className="user-icon" />
            </div>
            <FaAngleDown className="arrow-icon" />
          </div>
         
          <div className="cart-num">
                <div>
                <FaShoppingCart className="cart-icon" />
                </div>
                <div>
                <input type="text" placeholder="8" className="cart-qty" />
                </div>
          </div>
          <div className="icon-div">
          <FaHeart className="wishlist-icon" />
          </div>
          <div className="icon-div">
            <button className="logout-btn">Logout</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AfterHeader;
