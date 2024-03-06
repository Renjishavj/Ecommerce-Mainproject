import React, { useEffect, useState } from "react";
import axios from "axios";
import { useLogin } from "../../Context/LoginContext";
import noimg from "../../Images/noimage.jpg";
import "./Cart.css";
import { Link } from "react-router-dom";

function CartSingle({product,removeFromCart}) {
  const [quantity, setQuantity] = useState(product.quantity);


 

  const handleQuantityChange = (event) => {
    const newQuantity = parseInt(event.target.value, 10);

    if (!isNaN(newQuantity) && newQuantity > 0) {
      setQuantity(newQuantity);
      
    }
  };
console.log(product)
  return (
    <div className="cart">
      <div>
        {product.image ? (
          <img src={product.image} alt="" className="cart-img" />
        ) : (
          <img src={noimg} alt="No Image" className="cart-img" />
        )}
      </div>
      <div className="cart-one-right">
        <div>
          <h2 className="inp-cart">{product.title}</h2>
        </div>
        <div>
          <select name="size" id="sizeSelect" placeholder="size">
            <option value="small">Small</option>
            <option value="medium">Medium</option>
            <option value="large">Large</option>
            <option value="x-Large">X-Large</option>
          </select>
        </div>
        <div>
          <h2 className="inp-cart">{product.price}</h2>
        </div>
        <div>
        <input
            type="number"
            placeholder={product.quantity}
            value={quantity}
            onChange={handleQuantityChange}
          />
        </div>
        <div className="single-buttons">
          <div >
          <button  onClick={() => removeFromCart(product._id)} className="cart-cartbutton">Remove</button>
          </div>
          <div>
          <Link to="/orderpage/addaddress">
          <button className="cart-cartbutton">Buy Now</button>
          </Link>
          </div>
          
        </div>
      </div>
    </div>
  );
}

export default CartSingle;
