import React, { useEffect, useState } from "react";
import "./Cart.css";
import axios from "axios";
import { useLogin } from "../../Context/LoginContext";
import CartSingle from "./CartSingle";

function CartShop() {
  const [cart, setCart] = useState([]);
  const { user } = useLogin();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const email = user.email;
        console.log(email)
        const response = await axios.get(`http://localhost:3300/route/${email}`);
        setCart(response.data);
        console.log(response.data);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, [user.email]);

  const removeItemFromCart = (productId) => {
    
    const updatedCart = cart.filter(item => item.productId !== productId);
  
   
    setCart(updatedCart);
  }

  return (
    <div className="cart-section">
      {user.cart ? (
        user.cart.map((item) => (
          <CartSingle product={item} key={item.productId} removeItemFromCart={removeItemFromCart} />
        ))
      ) : (
        <p>No items in the cart</p>
      )}
    </div>
  );
}

export default CartShop;
