import React from "react";
import "./Cart.css";
import noimg from "../../Images/noimage.jpg";
function cart() {
  return (
    <div className="cart-section">
      <div className="cart">
        <div>
          <img src={noimg} alt="" className="cart-img" />
        </div>
        <div className="cart-one-right">
          <div>
            <input type="text" name="" id="" placeholder="title" />
          </div>
          <div>
            <input type="text" name="" id="" placeholder="size" />
          </div>
          <div>
            <input type="text" name="" id="" placeholder="price" />
          </div>
          <div>
            <input type="number" />
          </div>
          <div>
            <button>Remove</button>
          </div>
        </div>
        <div>
          <input type="text" placeholder="expected delivery date by" />
        </div>
      </div>
    </div>
  );
}

export default cart;
