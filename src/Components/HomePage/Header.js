// Header.js
import React from "react";
import {
  FaSearch,
  FaGlobeAmericas,
  FaUser,
  FaShoppingCart,
  FaQrcode,
  FaAngleDown
} from "react-icons/fa";

import "./Style.css";
import flag from "../../Images/Flag_of_India.svg (1).jpg"
import logoimg from "../../Images/picture (1).jpg";

const Header = () => {
  return (
    <div className="header">
      <div className="header-content">
        <div className="logo">
          <img src={logoimg} alt="" class="img"></img>
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
          <img src={flag} alt=""  className="language-icon"/>
          </div>
          <div>
          <FaAngleDown className="arrow-icon" />
          </div>
          
          </div>
          <div className="icon-div">
            <div>
            <FaUser className="user-icon" />
            </div>
            <div>
          <FaAngleDown className="arrow-icon" />
          </div>
          </div>
          <div className="cart-num">
            <div>
          <FaShoppingCart className="cart-icon" />
          </div>
          <div>
            <input type="text" placeholder="1" className="cart-qty"/>
          </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
