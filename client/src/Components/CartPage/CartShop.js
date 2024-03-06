import React, { useEffect, useState } from "react";
import "./Cart.css";
import axios from "axios";
import { useLogin } from "../../Context/LoginContext";
import CartSingle from "./CartSingle";
import Cartbilling from "./Cartbilling";

function CartShop() {
  const [cart, setCart] = useState([]);
  const { user } = useLogin();

  useEffect(() => {
    (async () => {
      try {
        if (user && user.email) {
          const email = user.email;
          console.log(email);
          const res = await axios.get(
            `http://localhost:3300/route/${email}/cart`
          );
          setCart(res.data);
        }
      } catch (err) {
        console.log(err);
      }
    })();
  }, [user, user.cart]);

  const removeFromCart = async (productId) => {
    try {
      const email = user.email;
      await axios.delete(`http://localhost:3300/route/${productId}/cart/delete`, {
        data: { email }, 
      });
  
      setCart((prevCart) => prevCart.filter((item) => item.productId !== productId));
      alert("one item deleted from cart")
    } catch (error) {
      console.log(error);
    }
  };


  return (
    <div className="cart-section">
      
      {cart ? (
        cart.map((item) => (
          <div key={item.productId}>
            <CartSingle product={item} removeFromCart={removeFromCart} />
           
           
          </div>
        ))
      ) : (
        <p>No items in the cart</p>
      )}
      <div>
      <Cartbilling cart={cart} />
      </div>
       
    </div>
  );
}

export default CartShop;
