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
import { useEffect } from "react";

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
 //console.log(user)
 const [cartItems, setCartItems] = useState([]);


  const LogOut=()=>{
    setUser(null)
    setLoggedIn(false)
    localStorage.removeItem('user')
    localStorage.removeItem('token')
    window.location.href = "/";
  }
  
  useEffect(() => {
    const fetchCart = async () => {
      try {
        const response = await fetch(`http://localhost:3300/route/${user.email}/cart`);
        if (!response.ok) {
          throw new Error('Error fetching cart');
        }
        const cartData = await response.json();
        setCartItems(cartData);
        console.log("cart",cartData)

       
      } catch (error) {
        console.error('Error fetching cart:', error.message);
      }
    };

    if (loggedIn && user) {
      fetchCart();
    }
  }, [loggedIn, user]);
  const totalQuantity = cartItems.reduce(
    (total, item) => total + item.quantity,
    0
  );


  return (
    <div className="header">
      <div className="header-content">
        <Link to="/">
        <div className="logo">

          <img src={logoimg} alt="" className="img" />
        </div>
        </Link>
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
        <div className="user-icon">
         
            <div className="user-name">
            {user.name}
            </div>
           
           
        </div>
        )}



{loggedIn && (
  <div className="user-icon" onMouseEnter={toggleDropdown} onMouseLeave={toggleDropdown}>
    <div className="icon-div">
      <div>
        <FaUser className="user-icon" />
      </div>
      <div>
        <FaAngleDown className="arrow-icon" />
      </div>
    </div>

    {isDropdownVisible && (
      <div className="drop-user">
        <div className="dropuser-item">
          <button className="userdrop-btn">User Profile</button>
        </div>
        <Link to="/userorder">
        <div className="dropuser-item">
          <button className="userorder-btn">Orders</button>
        </div>
        </Link>
      </div>
    )}
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
              <h4 className="cart-qty" >{totalQuantity.toString()}</h4>  
            </div>
          </div>
          {loggedIn &&
          <div className="icon-div"><FaHeart className="wishlist-icon" /></div>
          }
          {loggedIn &&
          <div className="icon-div"><button onClick={LogOut} className="logout-btn">Log out</button></div>
          }
        </div>
      </div>
    </div>
  );
};

export default Header;
