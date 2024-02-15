import React from "react";
import RegisterPage from "../RegisterPage";
import { useLogin } from "../../Context/LoginContext";
import women from "../../Images/woman.jpg";
import men from "../../Images/men.png";
import access from "../../Images/access.jpg";
import menwomen from "../../Images/menwomen.png";

function Banner() {
  const { isRegisterVisible, toggleVisibleRegister } = useLogin();

  return (
    <div className="Banner">
      <div className="banner-sub">
        <div>
          <img src={menwomen} alt="" className="left-banner-img" />
        </div>
        <h1 className="banner-description">Chic fashion </h1>
        <h3 className="banner-sub-description">trends meet convenience!</h3>

        <button className="shopnow-home" onClick={toggleVisibleRegister}>
          Shop Now
        </button>
        {isRegisterVisible && (
          <div className="dropRegister">
            <RegisterPage />
          </div>
        )}

        <div className="banner-secondsub">
          <div className="banner-sub-section">
            <div className="img-one">
              <img src={women} alt="" className="right-banner-one" />
              <h2 className="single-right-one">Women</h2>
              <h4 className="single-right-desone">Best Clothes for Women</h4>
            </div>
            <div className="img-one">
              <img src={men} alt="" className="right-banner-two" />
              <h2 className="single-right-two"> Men</h2>
              <h4 className="single-right-destwo">Best Clothes for Men</h4>
            </div>
          </div>
          <div className="banner-sub-section-one">
            <div className="img-one">
              <img src={access} alt="" className="right-banner-three" />
              <h2 className="single-right-three">Accessories</h2>
              <h4 className="single-right-desthree">Best trend Accessories</h4>
            </div>
          </div>
        </div>
      </div>
      {/*<div className="bg-banner">
        <img src={collection} alt="" className="bann-img" />
          </div>*/}
    </div>
  );
}

export default Banner;
