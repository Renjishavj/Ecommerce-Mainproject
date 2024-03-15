import React, { useEffect, useState } from "react";
import axios from "axios";
import { useLogin } from "../../Context/LoginContext";
import noimg from "../../Images/noimage.jpg";
import "./Cart.css";
import { Link } from "react-router-dom";

function CartSingle({product,removeFromCart}) {
  const [quantity, setQuantity] = useState(product.quantity);
  console.log("product",product)
  const handleQuantityChange = (event) => {
    const newQuantity = parseInt(event.target.value, 10);

    if (!isNaN(newQuantity) && newQuantity > 0) {
      setQuantity(newQuantity);
      
    }
  };

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
        
        <div className="price-cart">
        <p className="inp-cart">${(product.price * product.quantity).toFixed(2)}</p>

        </div>
        <div>
        <input
            type="number"
            placeholder={product.quantity}
            value={product.quantity}
            onChange={handleQuantityChange}
            className="quandity-single"
          />
        </div>
        <div className="single-buttons">
          <div >
          <button  onClick={() => removeFromCart(product._id)} className="cart-cartbutton">Remove</button>
          </div>
          <div>
          <Link to="/orderpage/addaddress" state={{ product: [product], quantity: quantity }}>
          <button className="cart-cartbutton">Buy Now</button>
          </Link>
          </div>
          
        </div>
      </div>
    </div>
  );
}

export default CartSingle;
