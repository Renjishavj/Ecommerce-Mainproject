import React from "react";
import RegisterPage from "../RegisterPage";
import { useLogin } from "../../Context/LoginContext";
import musicbanner from "../../Images/Hero-Image.png"
import {Link} from "react-router-dom"

function Banner() {
  const { isRegisterVisible, toggleVisibleRegister , loggedIn} = useLogin();

  return (
    <div className="bg-banner">
      <div>
        <img src={musicbanner} alt="" className="bann-img" />
      </div>
      <div>
        <h1 className="head-bann">Rhythmic Resonance</h1>
        <h3 className="desc-bann">
          Elevate Your Sound with our Unmatched Collection of Musical
          Instruments!
        </h3>
        {!loggedIn && (
        <Link to="/shop">
        <button className="shopnow-home" onClick={toggleVisibleRegister}>
          Shop Now
        </button>
        </Link>
)}
        {isRegisterVisible && (
          <div className="dropRegister">
            <RegisterPage />
          </div>
        )}
      </div>
    </div>
  );
}

export default Banner;
