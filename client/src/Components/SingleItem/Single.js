import React from "react";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import noimg from "../../Images/noimage.jpg";
import "./Single.css";

function Single() {
  return (
    <div className="car-div">
      <div>
        <Carousel>
          <div>
            <img src={noimg} alt=""  className="img-cara"/>
          </div>
          <div>
            <img src={noimg} alt="" className="img-cara"/>
          </div>
          <div>
            <img src={noimg} alt="" className="img-cara"/>
          </div>
          <div>
            <img src={noimg} alt="" className="img-cara"/>
          </div>
        </Carousel>
      </div>
      <div className="desc-product">
        <div>
        <div>
            <input type="text" placeholder="HandCrafted Wood Acoustic Violin" className="pro-title"/>
        </div>
        <div>
            <input type="text" placeholder="4*" className="pro-rating" />
        </div>
        <div>
            <input type="text" placeholder="4000" className="pro-price" />
        </div>
        <div>
            <textarea rows={5}   placeholder="This violin is handcrafted from solid wood by an experienced violin maker. The dimensions of the violin are 4/4, with a spruce top and maple backboard & sidebard. The finish is antique varnish, giving the violin an elegant appearance. This acoustic violin comes with a bow and rosin included." className="pro-desc" />
        </div>
        <div className="divi-cart">
        <div>
            <input type="number" className="price-qty" />
        </div>
        <div>
            <button className="addtocart-btn">Add to Cart</button>
        </div>
        </div>
        
        </div>
      </div>
    </div>
  );
}

export default Single;
