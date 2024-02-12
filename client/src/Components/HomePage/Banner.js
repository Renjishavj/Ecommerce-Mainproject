import React from "react";
import banner from "../../Images/Collection.png";
import google from "../../Images/goog.png";
import fb from "../../Images/fb.png";
import twitter from "../../Images/twit.png";
import imge from "../../Images/leftbanner.jpg"
import rightone from "../../Images/rightone.jpg"
import righttwo from "../../Images/righttwo.jpg"
import rightthree from "../../Images/rightthree.jpg"
import rightfour from "../../Images/rightfour.jpg"
import RegisterPage from "../RegisterPage";
import { useState } from "react";
import righthree from "../../Images/righty.png"
import righty from "../../Images/rightyy.png"


function Banner() {
  const [isShopbtnVisible, setShopbtnVisible] = useState(false);

  const toggleDropdownShopbtn = () => {
    setShopbtnVisible(!isShopbtnVisible);
  };

  return (
    <div className="Banner">
      <div className="banner-sub">
          <div><img src={imge} alt="" className="left-banner-img"/></div>
          <h1 className="banner-description">Chic fashion </h1>
          <h3 className="banner-sub-description">trends meet convenience!</h3>

          <button className="shopnow-home" onClick={toggleDropdownShopbtn}>Shop Now</button>
          {isShopbtnVisible && (
              <div className="dropShowbtn">
                <RegisterPage/>
              </div>
            )}
        
          <div  className="banner-secondsub">
              <div className="banner-sub-section">
                <div>
                <img src={rightone} alt="" className="right-banner"/>
                <h3 className="single-right-one">Women</h3>
                <h4 className="single-right-desone">Best Clothes for Women</h4>
                </div>
                <div>
                <img src={righttwo} alt="" className="right-banner"/>
                <h3 className="single-right-two"> Men</h3>
                <h4 className="single-right-destwo">Best Clothes for Men</h4>
                </div>  
              </div>
              <div className="banner-sub-section">
              <div>
                <img src={righty} alt="" className="right-banner-three"/>
                <h3 className="single-right-three">Accessories</h3>
                <h4 className="single-right-desthree">Best trend Accessories</h4>
                </div>
                <div>
                <img src={rightfour} alt="" className="right-banner"/>
                <h3 className="single-right-four">Accessories</h3>
                <h4 className="single-right-desfour">Best trend Accessories</h4>
                </div>
              </div>
          </div>
      </div>

    </div>
  );
}

export default Banner;
